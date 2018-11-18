import Phaser from 'phaser';
import MenuText from '../texts/MenuText';

export default class extends Phaser.GameObjects.GameObject {
    constructor(config) {
        super(config.scene, config.type);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.menuText = new MenuText({ scene: config.scene, y: config.y, text: config.text });

        this.menuText.on('pointerdown', () => {
            console.log(config);
            config.scene.scene.start(config.nextScene, { type: config.type });
        });
    }
}
