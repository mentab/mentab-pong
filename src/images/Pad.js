import Phaser from 'phaser';
import { PAD_BASE_VELOCITY } from './../constants/constants';

export default class extends Phaser.Physics.Arcade.Image {
    constructor(config) {
        super(config.scene, config.x, config.y = 200, config.key = 'pad');
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setImmovable();
        this.body.setMaxVelocity(PAD_BASE_VELOCITY);
    }

    bottomMoving() {
        this.body.setVelocityY(-PAD_BASE_VELOCITY);
    }

    topMoving() {
        this.body.setVelocityY(PAD_BASE_VELOCITY);
    }

    stopMoving() {
        this.body.setVelocityY(0);
    }

    reinitializePosition() {
        this.setY(200);
    }
}