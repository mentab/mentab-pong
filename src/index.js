import 'phaser';
import Pad from './images/Pad';
import Ball from './images/Ball';
import Text from './texts/Text';
import { BALL_BASE_VELOCITY, PAD_INCREMENT_VELOCITY, PAD_BASE_VELOCITY } from './constants/constants';

// constants
// TODO global handle of size and positioning from game object instead of arbitrary values
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
let scoreText1;
let scoreText2;
let lastScored;

// create
function create() {
    pad1 = new Pad({ scene: this, x: 20 });
    pad2 = new Pad({ scene: this, x: 580 });

    ball = new Ball({ scene: this });

    scoreText1 = new Text({ scene: this, x: 250 });
    scoreText2 = new Text({ scene: this, x: 350 });
}

// update
function update() {
    this.physics.add.collider(pad1, ball, ball.hitPadCallback);
    this.physics.add.collider(pad2, ball, ball.hitPadCallback);

    const cursors = this.input.keyboard.createCursorKeys();

    if (cursors.up.isDown) {
        pad1.bottomMoving();
    } else if (cursors.down.isDown) {
        pad1.topMoving();
    } else {
        pad1.stopMoving();
    }

    if (cursors.space.isDown) {
        ball.launchBall(lastScored);
    }

    handleBlockedBall();
    handleAi();
}

const handleBlockedBall = () => {
    if (ball.isBlockedRight()) {
        scoreText1.incrementScore();
        lastScored = 1;
    }
    if (ball.isBlockedLeft()) {
        scoreText2.incrementScore();
        lastScored = 2;
    }
    if (ball.isBlockedRight() || ball.isBlockedLeft()) {
        ball.reinitializePosition();
        pad1.reinitializePosition();
        pad2.reinitializePosition();
    }
}

// TODO AI that follow ball not based on ball velocity (will not work if pad is at top or bottom border)
const handleAi = () => {
    pad2.setVelocityY(ball.body.velocity.y);
}
