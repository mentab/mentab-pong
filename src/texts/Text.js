import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Text {
    constructor(config) {
        super(config.scene, config.x, config.y = 16, config.text = '0');
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.setFontSize('32px');
        this.setFill('#FFF');
    }
}