import 'phaser';
import MenuText from '../texts/MenuText';
import { GAME_TYPE_1P, GAME_TYPE_2P, GAME_TYPE_1PW } from './../constants/constants';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'MenuScene'
        });
    }

    create() {
        this.menuOnePlayerText = new MenuText({ scene: this, y: 100, text: 'One player' });
        this.menuTwoPlayersText = new MenuText({ scene: this, y: 150, text: 'Two players' });
        this.menuOnePlayerVSWallText = new MenuText({ scene: this, y: 200, text: 'One player VS wall' });
        this.menuShowControlsText = new MenuText({ scene: this, y: 250, text: 'Show controls' });
    }

    update() {
        // TODO make a game object instead of text & handle arrows to move on menus
        this.menuOnePlayerText.on('pointerdown', () => {
            this.scene.start('GameScene', { type: GAME_TYPE_1P });
        });
        this.menuTwoPlayersText.on('pointerdown', () => {
            this.scene.start('GameScene', { type: GAME_TYPE_2P });
        });
        this.menuOnePlayerVSWallText.on('pointerdown', () => {
            this.scene.start('GameScene', { type: GAME_TYPE_1PW });
        });
        this.menuShowControlsText.on('pointerdown', () => {
            this.scene.start('ShowControlsScene');
        });
    }
}