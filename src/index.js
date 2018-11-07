import 'phaser';
import GameScene from './scenes/GameScene';

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
        GameScene
    ]
};

// game
const game = new Phaser.Game(config);
