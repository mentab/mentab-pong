import Phaser from 'phaser';
import MenuText from '../texts/MenuText';
import Ball from '../images/Ball';

export default class extends Phaser.GameObjects.GameObject {
    constructor(config) {
        super(config.scene, config.type);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.menuText = new MenuText({ scene: config.scene, y: config.y, text: config.text });

        this.menuText.on('pointerdown', () => {
           this.startNewScene();
        });

        this.isActive = false;

        this.setActive = this.setActive.bind(this);

        // know about config
        this.config = config;
    }

    setActive() {
        this.isActive = true;
        this.scene.sound.play('hit2');
        this.menuDot = new Ball({ scene: this.config.scene, x: 20, y: this.config.y + 10 });
    }

    setInactive() {
        this.isActive = false;
        if (this.menuDot) {
            this.menuDot.destroy();
        }
    }

    startNewScene() {
        this.config.scene.scene.start(this.config.nextScene, { type: this.config.type });
    }
}
