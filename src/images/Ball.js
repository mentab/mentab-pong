import Phaser from 'phaser';
import { PAD_INCREMENT_VELOCITY } from './../constants/constants';
import { BALL_BASE_VELOCITY } from './../constants/constants';

export default class extends Phaser.Physics.Arcade.Image {
    constructor(config) {
        super(config.scene, config.x = 300, config.y = 200, config.key = 'ball');
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setBounce(1);
        this.launched = false;
        // this know about scene
        this.scene = config.scene;
        // func this bindings
        this.hitPadCallback = this.hitPadCallback.bind(this);
    }

    launchBall(lastScored) {
        if (!this.launched) {
            // 1 for pad1, 2 for pad2
            switch (lastScored) {
                case 1:
                default:
                    // pad1 scored last, velocity is negative
                    this.body.setVelocityX(-BALL_BASE_VELOCITY);
                    break;
                case 2:
                    // pad2 scored last, velocity is positive
                    this.body.setVelocityX(BALL_BASE_VELOCITY);
                    break;
            }
            this.body.setVelocityY(Math.random() * 100 - 50);
            this.launched = true;
        }
    }

    // PAD, BALL
    hitPadCallback(body1, body2) {
        this.changeVelocityY(body1, body2);
        this.addVelocityX();
        this.scene.sound.play('hit1');
    }

    // TODO better angle management, depending on pad size on percentage, but between -45 and 45°
    changeVelocityY(body1, body2) {
        const impactPoint = body2.y - body1.y;
        let arbitraryMultiplicator = 5;
        this.body.setVelocityY(parseInt(impactPoint) * arbitraryMultiplicator);
    }

    addVelocityX() {
        const xVelocity = this.body.velocity.x;
        const increment = xVelocity > 0 ? PAD_INCREMENT_VELOCITY : -PAD_INCREMENT_VELOCITY;
        this.body.setVelocityX(xVelocity + increment);
    }

    isBlockedRight() {
        return this.body.blocked.right;
    }

    isBlockedLeft() {
        return this.body.blocked.left;
    }

    reinitializePosition() {
        this.launched = false;
        this.setVelocity(0);
        this.setX(300);
        this.setY(200);
    }
}