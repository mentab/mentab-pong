import 'phaser';
import Ball from '../images/Ball';
import Pad from '../images/Pad';
import Text from '../texts/Text';
import PadImg from '../assets/pad.png';
import BallImg from '../assets/ball.png';
import Hit1 from '../assets/hit1.wav';
import Hit2 from '../assets/hit2.wav';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene',
            active: true
        });

        // TODO define this somewhere else
        this.pad1;
        this.pad2;
        this.ball;
        this.scoreText1;
        this.scoreText2;
        this.lastScored = 1;
    }

    preload() {
        this.load.image('pad', PadImg);
        this.load.image('ball', BallImg);
        this.load.audio('hit1', Hit1);
        this.load.audio('hit2', Hit2);
    }

    create() {
        this.pad1 = new Pad({ scene: this, x: 20 });
        this.pad2 = new Pad({ scene: this, x: 580 });

        this.ball = new Ball({ scene: this });

        this.scoreText1 = new Text({ scene: this, x: 250 });
        this.scoreText2 = new Text({ scene: this, x: 350 });
    }

    update() {
        this.physics.add.collider(this.pad1, this.ball, this.ball.hitPadCallback);
        this.physics.add.collider(this.pad2, this.ball, this.ball.hitPadCallback);

        const cursors = this.input.keyboard.createCursorKeys();

        if (cursors.up.isDown) {
            this.pad1.bottomMoving();
        } else if (cursors.down.isDown) {
            this.pad1.topMoving();
        } else {
            this.pad1.stopMoving();
        }

        if (cursors.space.isDown) {
            this.ball.launchBall(this.lastScored);
        }

        this.handleBlockedBall();
        this.handleAi();
    }

    handleBlockedBall() {
        if (this.ball.isBlockedRight()) {
            this.scoreText1.incrementScore();
            this.lastScored = 1;
        }
        if (this.ball.isBlockedLeft()) {
            this.scoreText2.incrementScore();
            this.lastScored = 2;
        }
        if (this.ball.isBlockedRight() || this.ball.isBlockedLeft()) {
            this.ball.reinitializePosition();
            this.pad1.reinitializePosition();
            this.pad2.reinitializePosition();
        }
    }

    // TODO AI that follow ball not based on ball velocity (will not work if pad is at top or bottom border)
    handleAi() {
        this.pad2.setVelocityY(this.ball.body.velocity.y);
    }
}