import Phaser from 'phaser';

export default class extends Phaser.Physics.Arcade.Image {
    constructor(config) {
        super(config.scene, config.x, config.y = 200, config.key = 'square');
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setImmovable();
        this.setScale(1, 20);
        this.setTint('0x9955ff');
    }

    reinitializePosition() {
        this.setY(0);
    }
}