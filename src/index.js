import 'phaser';
import MenuScene from './scenes/MenuScene';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import ShowControlsScene from './scenes/ShowControlsScene';

// config
// TODO check physics type
// TODO global handle of size and positioning from game object instead of arbitrary values
const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        BootScene,
        MenuScene,
        GameScene,
        ShowControlsScene
    ]
};

// game
const game = new Phaser.Game(config);
