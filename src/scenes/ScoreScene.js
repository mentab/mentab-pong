import 'phaser';
import MenuObject from '../gameObjects/MenuObject';

export default class ShowControlsScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'ScoreScene'
        });
    }

    // TODO make a scene to display texts
    create(data) {
        // create menus
        this.menus = [
            new MenuObject(
                {
                    scene: this,
                    type: 'menu',
                    y: 50,
                    text: 'Back to menu',
                    nextScene: 'MenuScene',
                    type: null
                }
            )
        ];

        this.menus[0].setActive();

        this.isToggable = true;

        this.add.text(20, 125, 'Game finished');

        if (data.P1Score !== undefined) {
            this.add.text(20, 150, 'P1 Score:');
            this.add.text(20, 175, data.P1Score);
        }

        if (data.P2Score !== undefined) {
            this.add.text(20, 225, 'P2 Score:');
            this.add.text(20, 250, data.P2Score);
        }
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