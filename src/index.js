import 'phaser';
import Pad from './images/Pad';
import Ball from './images/Ball';
import Text from './texts/Text';
import { BALL_BASE_VELOCITY, PAD_INCREMENT_VELOCITY, PAD_BASE_VELOCITY } from './constants/constants';

// constants
const CONFIG_HEIGHT = 400;
const CONFIG_WIDTH = 600;

// config
// TODO check physics type
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
    this.load.audio('hit1', ['assets/hit1.wav']);
    this.load.audio('hit2', ['assets/hit2.wav'])
}

// variables
let pad1;
let pad2;
let ball;
let score1 = 0;
let score2 = 0;
let scoreText1;
let scoreText2;
// 1 for pad1, 2 for pad2
let lastScored = 1;

// create
function create() {
    pad1 = new Pad({
        scene: this,
        x: 20
    });

    pad2 = new Pad({
        scene: this,
        x: 580
    });

    ball = new Ball({
        scene: this
    });

    scoreText1 = new Text({
        scene: this,
        x: 250
    });

    scoreText2 = new Text({
        scene: this,
        x: 350
    });
}

// update
function update() {
    this.physics.add.collider(pad1, ball, hitPad);
    this.physics.add.collider(pad2, ball, hitPad);
    
    const cursors = this.input.keyboard.createCursorKeys();

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

    handleBlockedBall();
    handleAi();
}

const hitPad = (body1, body2) => {
    changeVelocityY(body1, body2);
    addVelocityX(ball.body.velocity.x);
    game.sound.play('hit1');
}

const changeVelocityY = (body1, body2) => {
    const impactPoint = body2.y - body1.y;
    // TODO better angle management, depending on pad size on percentage, but between -45 and 45°
    let arbitraryMultiplicator = 5;
    // angle will depends on the pad size
    ball.setVelocityY(parseInt(impactPoint) * arbitraryMultiplicator);
}

const addVelocityX = () => {
    if (ball.body.velocity.x > 0) {
        ball.setVelocityX(ball.body.velocity.x + PAD_INCREMENT_VELOCITY);
    } else {
        ball.setVelocityX(ball.body.velocity.x - PAD_INCREMENT_VELOCITY);
    }
}

const handleBlockedBall = () => {
    if (ball.body.blocked.right) {
        score1 += 1;
        scoreText1.setText(score1);
        lastScored = 1;
    }
    if (ball.body.blocked.left) {
        score2 += 1;
        scoreText2.setText(score2);
        lastScored = 2;
    }
    if (ball.body.blocked.left || ball.body.blocked.right) {
        ball.reinitializePosition();
        pad1.reinitializePosition();
        pad2.reinitializePosition();
    }
}

const handleAi = () => {
    // TODO AI that follow ball not based on ball velocity (will not work if pad is at top or bottom border)
    pad2.setVelocityY(ball.body.velocity.y);
}

const launchBall = () => {
    if (!ball.isLaunched) {
        switch (lastScored) {
            case 1:
            default:
                ball.setVelocityX(BALL_BASE_VELOCITY);
                break;
            case 2:
                ball.setVelocityX(-BALL_BASE_VELOCITY);
                break;
        }
        ball.setVelocityY(Math.random() * 100 - 50);
        ball.launchBall();
    }
}
