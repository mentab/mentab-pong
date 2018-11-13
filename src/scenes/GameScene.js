import 'phaser';
import Ball from '../images/Ball';
import Pad from '../images/Pad';
import Wall from '../images/Wall';
import ScoreText from '../texts/ScoreText';
import { GAME_TYPE_1P, GAME_TYPE_2P, GAME_TYPE_1PW, PAD_TYPE, WALL_TYPE } from './../constants/constants';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });

        // TODO define this somewhere else
        this.pad1;
        this.pad2;
        this.ball;
        this.scoreText1;
        this.scoreText2;
        this.lastScored = 1;
        this.player2Config;
    }

    create(data) {
        // create inner parameters abstract from data
        switch (data.type) {
            case GAME_TYPE_1P:
                this.player2Config = {
                    isAI: true,
                    controls: false,
                    type: PAD_TYPE
                };
                break;
            case GAME_TYPE_2P:
                this.player2Config = {
                    isAI: false,
                    controls: true,
                    type: PAD_TYPE
                };
                break;
            case GAME_TYPE_1PW:
                this.player2Config = {
                    isAI: false,
                    controls: false,
                    type: WALL_TYPE
                };
                break;
        }

        // create pad 1 and score text 1
        this.pad1 = new Pad({ scene: this, x: 20 });
        this.scoreText1 = new ScoreText({ scene: this, x: 250 });

        // create ball
        this.ball = new Ball({ scene: this });

        // add pad or wall depending on player2 type
        switch (this.player2Config.type) {
            case PAD_TYPE:
                this.pad2 = new Pad({ scene: this, x: 580 });
                this.scoreText2 = new ScoreText({ scene: this, x: 350 });
                break;
            case WALL_TYPE:
                this.pad2 = new Wall({ scene: this, x: 580 })
        }
    }

    update() {
        // add colliders
        // TODO create custom collider classes
        this.physics.add.collider(this.pad1, this.ball, this.ball.hitPadCallback);
        
        if (this.player2Config.type === PAD_TYPE) {
            this.physics.add.collider(this.pad2, this.ball, this.ball.hitPadCallback);
        }

        if (this.player2Config.type === WALL_TYPE) {
            this.physics.add.collider(this.pad2, this.ball, () => {
                this.scoreText1.incrementScore();
                this.sound.play('hit2');
            });
        }

        // create cursors
        const cursors = this.input.keyboard.createCursorKeys();

        // p1 cursors
        if (cursors.up.isDown) {
            this.pad1.bottomMoving();
        } else if (cursors.down.isDown) {
            this.pad1.topMoving();
        } else {
            this.pad1.stopMoving();
        }

        // p2 controls
        if (this.player2Config.controls) {
            // p2 cursors
            // TODO change cursors
            if (cursors.left.isDown) {
                this.pad2.bottomMoving();
            } else if (cursors.right.isDown) {
                this.pad2.topMoving();
            } else {
                this.pad2.stopMoving();
            }
        }

        if (this.player2Config.isAI) {
            this.handleAi();
        }

        if (cursors.space.isDown) {
            this.ball.launchBall(this.lastScored);
        }

        this.handleBlockedBall();
    }

    handleBlockedBall() {
        // handle scoring classic
        if (this.player2Config.type === PAD_TYPE) {
            if (this.ball.isBlockedRight()) {
                this.scoreText1.incrementScore();
                this.lastScored = 1;
            }
            if (this.ball.isBlockedLeft()) {
                this.scoreText2.incrementScore();
                this.lastScored = 2;
            }
        }
        
        // reinitialise position after scoring
        if (this.ball.isBlockedRight() || this.ball.isBlockedLeft()) {
            this.ball.reinitializePosition();
            this.pad1.reinitializePosition();
            this.pad2.reinitializePosition();
        }
    }

    handleAi() {
        // TODO AI that follow ball not based on ball velocity (will not work if pad is at top or bottom border)
        this.pad2.setVelocityY(this.ball.body.velocity.y);
    }
}