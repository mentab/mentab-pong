import 'phaser';

// constants
const CONFIG_HEIGHT = 600;
const CONFIG_WIDTH = 800;
const PAD_BASE_VELOCITY = 200;
const BALL_BASE_VELOCITY = 300;

// config
const config = {
    type: Phaser.AUTO,
    width: CONFIG_WIDTH,
    height: CONFIG_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// game
const game = new Phaser.Game(config);

// preload
function preload() {
    this.load.image('pad', 'assets/pad.png');
    this.load.image('ball', 'assets/ball.png');
}

// variables
let pad1;
let pad2;
let ball;
let cursors;
let score1 = 0;
let score2 = 0;
let scoreText1;
let scoreText2;
let isLaunched;
// 1 for pad1, 2 for pad2
let lastScored = 1;

// create
function create() {
    createPad1(this);
    createPad2(this);
    createScoreText(this);
    createBall(this);
}

const createPad1 = (that) => {
    pad1 = that.physics.add.image(10, 300, 'pad');
    pad1.setCollideWorldBounds(true);
    pad1.setBounce(1);
    pad1.setImmovable();
}

const createPad2 = (that) => {
    pad2 = that.physics.add.image(800, 300, 'pad');
    pad2.setCollideWorldBounds(true);
    pad2.setBounce(1);
    pad2.setImmovable();
    pad2.setMaxVelocity(PAD_BASE_VELOCITY);
}

const createScoreText = (that) => {
    scoreText1 = that.add.text(350, 16, '0', { fontSize: '32px', fill: '#FFF' });
    scoreText2 = that.add.text(450, 16, '0', { fontSize: '32px', fill: '#FFF' });
}

const createBall = (that) => {
    ball = that.physics.add.image(400, 300, 'ball');
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);
    isLaunched = false;
}

// update
function update() {
    handleColliders(this);
    handleCursorKeys(this);
    handleBlockedBall(this);
    handleAi();
}

const handleColliders = (that) => {
    that.physics.add.collider(pad1, ball, hitPad);
    that.physics.add.collider(pad2, ball, hitPad);
}

const hitPad = (body1, body2) => {
    changeVelocityY(body1, body2);
    addVelocityX(ball.body.velocity.x);
}

const changeVelocityY = (body1, body2) => {
    const impactPoint = body2.y - body1.y;
    let arbitraryMultiplicator = 5;
    // angle will depends on the pad size
    ball.setVelocityY(parseInt(impactPoint) * arbitraryMultiplicator);
}

const addVelocityX = () => {
    const increment = 50;
    if (ball.body.velocity.x > 0) {
        ball.setVelocityX(ball.body.velocity.x + increment);
    } else {
        ball.setVelocityX(ball.body.velocity.x - increment);
    }
}

const handleCursorKeys = (that) => {
    cursors = that.input.keyboard.createCursorKeys();

    if (cursors.up.isDown) {
        pad1.setVelocityY(-PAD_BASE_VELOCITY);
    } else if (cursors.down.isDown) {
        pad1.setVelocityY(PAD_BASE_VELOCITY);
    } else {
        pad1.setVelocityY(0);
    }

    if (cursors.space.isDown) {
        launchBall();
    }
}

const handleBlockedBall = (that) => {
    if (ball.body.blocked.right) {
        score1 += 1;
        scoreText1.setText(score1);
        lastScored = 1;
        resetBall(that);
        resetPads(that);
    }
    if (ball.body.blocked.left) {
        score2 += 1;
        scoreText2.setText(score2);
        lastScored = 2;
        resetBall(that);
        resetPads(that);
    }
}

const handleAi = () => {
    pad2.setVelocityY(ball.body.velocity.y);
}

const launchBall = () => {
    if (!isLaunched) {
        switch(lastScored) {
            case 1:
            default:
                ball.setVelocityX(BALL_BASE_VELOCITY);
                break;
            case 2:
                ball.setVelocityX(-BALL_BASE_VELOCITY);
                break;
        }
        ball.setVelocityY(Math.random() * 100 - 50);
        isLaunched = true;
    }
}

const resetBall = (that) => {
    ball.disableBody(true, true);
    createBall(that);
}

const resetPads = (that) => {
    pad1.disableBody(true, true);
    pad2.disableBody(true, true);
    createPad1(that);
    createPad2(that);
}
