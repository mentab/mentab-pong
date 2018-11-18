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
        // create menus
        this.menus = [
            new MenuObject(
                {
                    scene: this,
                    type: 'menu',
                    y: 100,
                    text: 'One player',
                    nextScene: 'GameScene',
                    type: GAME_TYPE_1P
                }
            ),
            new MenuObject(
                {
                    scene: this,
                    type: 'menu',
                    y: 150,
                    text: 'Two player',
                    nextScene: 'GameScene',
                    type: GAME_TYPE_2P
                }
            ),
            new MenuObject(
                {
                    scene: this,
                    type: 'menu',
                    y: 200,
                    text: 'One player VS wall',
                    nextScene: 'GameScene',
                    type: GAME_TYPE_1PW
                }
            ),
            new MenuObject(
                {
                    scene: this,
                    type: 'menu',
                    y: 250,
                    text: 'Show controls',
                    nextScene: 'ShowControlsScene',
                    type: null
                }
            )
        ];

        // set first menu active
        this.menus[0].setActive();

        this.isToggable = true;
    }

    update() {
        // create cursors
        const cursors = this.input.keyboard.createCursorKeys();

        if (cursors.up.isDown) {
            this.toggleActiveMenu('up');
        }

        if (cursors.down.isDown) {
            this.toggleActiveMenu('down');
        }

        if (cursors.space.isDown) {
            if (this.isToggable) {
                this.menus.find(menu => menu.isActive).startNewScene();
            }
            this.isToggable = false;
        }
    }

    toggleActiveMenu(type) {
        if (this.isToggable) {
            this.isToggable = false;

            let activeIdx = this.menus.findIndex(menu => menu.isActive);

            switch (type) {
                case 'up':
                    if (activeIdx > 0) {
                        this.menus[activeIdx].setInactive();
                        this.menus[activeIdx - 1].setActive();
                    }
                    break;
                case 'down':
                    if (activeIdx < this.menus.length - 1) {
                        this.menus[activeIdx].setInactive();
                        this.menus[activeIdx + 1].setActive();
                    }
                    break;
            }

            setTimeout(() => {
                this.isToggable = true;
            }, 200);
        }
    }
}