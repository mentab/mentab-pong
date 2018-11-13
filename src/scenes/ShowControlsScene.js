import 'phaser';
import Ball from '../images/Ball';
import Pad from '../images/Pad';
import ScoreText from '../texts/ScoreText';
import MenuText from '../texts/MenuText';

export default class ShowControlsScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'ShowControlsScene'
        });
    }

    create() {
        this.backToMenu = new MenuText({ scene: this, y: 100, text: 'Back to menu' });
        this.add.text(20, 200, 'P1: up/down - P2: left/right - Launch ball: space');
    }

    update() {
        this.backToMenu.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}