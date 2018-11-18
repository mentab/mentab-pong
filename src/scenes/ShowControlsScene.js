import 'phaser';
import MenuObject from '../gameObjects/MenuObject';

export default class ShowControlsScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'ShowControlsScene'
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
                    text: 'Back to menu',
                    nextScene: 'MenuScene',
                    type: null
                }
            )
        ];

        this.menus[0].setActive();

        this.isToggable = true;

        this.add.text(20, 200, 'P1: up/down - P2: right/left - Launch ball: space');
        this.add.text(20, 300, 'Menus: up/down - Choose menu: space');
    }

    update() {
        // create cursors
        const cursors = this.input.keyboard.createCursorKeys();

        if (cursors.space.isDown) {
            if (this.isToggable) {
                this.menus.find(menu => menu.isActive).startNewScene();
            }
            this.isToggable = false;
        }
    }
}