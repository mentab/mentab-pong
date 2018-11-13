import 'phaser';
import SquareImg from '../assets/square.png';
import Hit1 from '../assets/hit1.wav';
import Hit2 from '../assets/hit2.wav';

export default class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        });
    }

    preload() {
        this.load.image('square', SquareImg);
        this.load.audio('hit1', Hit1);
        this.load.audio('hit2', Hit2);

        this.load.on('complete', () => {
            this.scene.start('MenuScene');
        });
    }

    create() {
        // Random text to see something
        // TODO implement loader in the future
        this.add.text(100, 100, 'Boot scene');
    }
}
