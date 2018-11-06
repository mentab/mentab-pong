import Phaser from 'phaser';

export default class extends Phaser.Physics.Arcade.Image {
    constructor(config) {
        super(config.scene, config.x = 300, config.y = 200, config.key = 'ball');
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setBounce(1);
        this.launched = false;
    }

    launchBall() {
        this.launched = true;
    }

    reinitializePosition() {
        this.launched = false;
        this.setVelocity(0);
        this.setX(300);
        this.setY(200);
    }
}