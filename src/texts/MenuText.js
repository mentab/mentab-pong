import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Text {
    constructor(config) {
        super(config.scene, config.x = 40, config.y, config.text);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.setFontSize('35px');
        this.setFill('#FFF');
        this.setInteractive();
    }
}