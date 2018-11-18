import 'phaser';
import MenuText from '../texts/MenuText';
import { GAME_TYPE_1P, GAME_TYPE_2P, GAME_TYPE_1PW } from './../constants/constants';
import MenuObject from '../gameObjects/MenuObject';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'MenuScene'
        });
    }

    create() {
        this.menuOnePlayerText = new MenuObject(
            {
                scene: this,
                type: 'menu',
                y: 100,
                text: 'One player',
                nextScene: 'GameScene',
                type: GAME_TYPE_1P
            }
        );
        this.menuTwoPlayersText = new MenuObject(
            {
                scene: this,
                type: 'menu',
                y: 150,
                text: 'Two player',
                nextScene: 'GameScene',
                type: GAME_TYPE_2P
            }
        );
        this.menuOnePlayerVSWallText = new MenuObject(
            {
                scene: this,
                type: 'menu',
                y: 200,
                text: 'One player VS wall',
                nextScene: 'GameScene',
                type: GAME_TYPE_1PW
            }
        );
        this.menuShowControlsText = new MenuObject(
            {
                scene: this,
                type: 'menu',
                y: 250,
                text: 'Show controls',
                nextScene: 'ShowControlsScene',
                type: null
            }
        );
    }
}