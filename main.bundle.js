!function(e){function t(t){for(var o,u,c=t[0],s=t[1],a=t[2],l=0,y=[];l<c.length;l++)u=c[l],r[u]&&y.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(f&&f(t);y.length;)y.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={1:0},i=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/mentab-pong/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var f=s;i.push([1162,0]),n()}({107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WALL_TYPE=t.PAD_TYPE=t.GAME_TYPE_1PW=t.GAME_TYPE_2P=t.GAME_TYPE_1P=t.PAD_INCREMENT_VELOCITY=t.BALL_BASE_VELOCITY=t.PAD_BASE_VELOCITY=void 0,t.PAD_BASE_VELOCITY=200,t.BALL_BASE_VELOCITY=300,t.PAD_INCREMENT_VELOCITY=50,t.GAME_TYPE_1P="1P",t.GAME_TYPE_2P="2P",t.GAME_TYPE_1PW="1PW",t.PAD_TYPE="pad",t.WALL_TYPE="wall"},1162:function(e,t,n){"use strict";n(33);var o=s(n(480)),r=s(n(479)),i=s(n(475)),u=s(n(471)),c=s(n(470));function s(e){return e&&e.__esModule?e:{default:e}}var a={type:Phaser.AUTO,width:600,height:400,physics:{default:"arcade",arcade:{debug:!1}},scene:[r.default,o.default,i.default,u.default,c.default]};new Phaser.Game(a)},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(33)),r=u(n(224)),i=u(n(223));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?l(e):t}(this,a(t).call(this,e.scene,e.type)),e.scene.physics.world.enable(l(l(n))),e.scene.add.existing(l(l(n))),n.menuText=new r.default({scene:e.scene,y:e.y,text:e.text}),n.menuText.on("pointerdown",function(){n.startNewScene()}),n.isActive=!1,n.setActive=n.setActive.bind(l(l(n))),n.config=e,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.default.GameObjects.GameObject),function(e,t,n){t&&s(e.prototype,t)}(t,[{key:"setActive",value:function(){this.isActive=!0,this.scene.sound.play("hit2"),this.menuDot=new i.default({scene:this.config.scene,x:20,y:this.config.y+15}),this.menuText.setTint("0xff9955")}},{key:"setInactive",value:function(){this.isActive=!1,this.menuDot&&this.menuDot.destroy(),this.menuText.setTint("0xffffff")}},{key:"startNewScene",value:function(){this.config.scene.scene.start(this.config.nextScene,{type:this.config.type})}}]),t}();t.default=y},223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(33)),r=n(107);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?a(e):t}(this,c(t).call(this,e.scene,e.x,e.y,e.key="square")),e.scene.physics.world.enable(a(a(n))),e.scene.add.existing(a(a(n))),n.body.setCollideWorldBounds(!0),n.body.setBounce(1),n.launched=!1,n.setTint("0xff9955"),n.scene=e.scene,n.hitPadCallback=n.hitPadCallback.bind(a(a(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.default.Physics.Arcade.Image),function(e,t,n){t&&u(e.prototype,t)}(t,[{key:"launchBall",value:function(e){if(!this.launched){switch(e){case 1:default:this.body.setVelocityX(-r.BALL_BASE_VELOCITY);break;case 2:this.body.setVelocityX(r.BALL_BASE_VELOCITY)}this.body.setVelocityY(100*Math.random()-50),this.launched=!0}}},{key:"hitPadCallback",value:function(e,t){this.changeVelocityY(e,t),this.addVelocityX(),this.scene.sound.play("hit1")}},{key:"changeVelocityY",value:function(e,t){var n=t.y-e.y;this.body.setVelocityY(5*parseInt(n))}},{key:"addVelocityX",value:function(){var e=this.body.velocity.x,t=e>0?r.PAD_INCREMENT_VELOCITY:-r.PAD_INCREMENT_VELOCITY;this.body.setVelocityX(e+t)}},{key:"isBlockedRight",value:function(){return this.body.blocked.right}},{key:"isBlockedLeft",value:function(){return this.body.blocked.left}},{key:"reinitializePosition",value:function(){this.launched=!1,this.setVelocity(0),this.setX(300),this.setY(200)}}]),t}();t.default=f},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(33));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?c(e):t}(this,i(t).call(this,e.scene,e.x=40,e.y,e.text)),e.scene.physics.world.enable(c(c(n))),e.scene.add.existing(c(c(n))),n.setFontSize("35px"),n.setFill("#FFF"),n.setInteractive(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.default.GameObjects.Text),t}();t.default=s},470:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(33);var o=function(e){return e&&e.__esModule?e:{default:e}}(n(142));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(t).call(this,{key:"ScoreScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,Phaser.Scene),function(e,t,n){t&&i(e.prototype,t)}(t,[{key:"create",value:function(e){this.menus=[new o.default(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:null,enumerable:!0,configurable:!0,writable:!0}):e[t]=null,e}({scene:this,type:"menu",y:50,text:"Back to menu",nextScene:"MenuScene"},"type"))],this.menus[0].setActive(),this.isToggable=!0,this.add.text(20,125,"Game finished"),void 0!==e.P1Score&&(this.add.text(20,150,"P1 Score:"),this.add.text(20,175,e.P1Score)),void 0!==e.P2Score&&(this.add.text(20,225,"P2 Score:"),this.add.text(20,250,e.P2Score))}},{key:"update",value:function(){this.input.keyboard.createCursorKeys().space.isDown&&(this.isToggable&&this.menus.find(function(e){return e.isActive}).startNewScene(),this.isToggable=!1)}}]),t}();t.default=s},471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(33);var o=function(e){return e&&e.__esModule?e:{default:e}}(n(142));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(t).call(this,{key:"ShowControlsScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,Phaser.Scene),function(e,t,n){t&&i(e.prototype,t)}(t,[{key:"create",value:function(){this.menus=[new o.default(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:null,enumerable:!0,configurable:!0,writable:!0}):e[t]=null,e}({scene:this,type:"menu",y:100,text:"Back to menu",nextScene:"MenuScene"},"type"))],this.menus[0].setActive(),this.isToggable=!0,this.add.text(20,200,"P1: up/down - P2: right/left - Launch ball: space"),this.add.text(20,300,"Menus: up/down - Choose menu: space")}},{key:"update",value:function(){this.input.keyboard.createCursorKeys().space.isDown&&(this.isToggable&&this.menus.find(function(e){return e.isActive}).startNewScene(),this.isToggable=!1)}}]),t}();t.default=s},472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(33));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?s(e):t}(this,u(t).call(this,e.scene,e.x,e.y=16,e.text="0")),e.scene.physics.world.enable(s(s(n))),e.scene.add.existing(s(s(n))),n.setFontSize("32px"),n.setFill("#FFF"),n.score=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.GameObjects.Text),function(e,t,n){t&&i(e.prototype,t)}(t,[{key:"incrementScore",value:function(){this.score+=1,this.setText(this.score)}}]),t}();t.default=a},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(33));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?s(e):t}(this,u(t).call(this,e.scene,e.x,e.y=200,e.key="square")),e.scene.physics.world.enable(s(s(n))),e.scene.add.existing(s(s(n))),n.body.setCollideWorldBounds(!0),n.body.setImmovable(),n.setScale(1,20),n.setTint("0x9955ff"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Physics.Arcade.Image),function(e,t,n){t&&i(e.prototype,t)}(t,[{key:"reinitializePosition",value:function(){this.setY(0)}}]),t}();t.default=a},474:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(33)),r=n(107);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?a(e):t}(this,c(t).call(this,e.scene,e.x,e.y=200,e.key="square")),e.scene.physics.world.enable(a(a(n))),e.scene.add.existing(a(a(n))),n.body.setCollideWorldBounds(!0),n.body.setImmovable(),n.body.setMaxVelocity(r.PAD_BASE_VELOCITY),n.setScale(1,5),n.setTint("0xff5599"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.default.Physics.Arcade.Image),function(e,t,n){t&&u(e.prototype,t)}(t,[{key:"bottomMoving",value:function(){this.body.setVelocityY(-r.PAD_BASE_VELOCITY)}},{key:"topMoving",value:function(){this.body.setVelocityY(r.PAD_BASE_VELOCITY)}},{key:"stopMoving",value:function(){this.body.setVelocityY(0)}},{key:"reinitializePosition",value:function(){this.setY(200)}}]),t}();t.default=f},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(33);var o=s(n(223)),r=s(n(474)),i=s(n(473)),u=s(n(472)),c=n(107);function s(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,l(t).call(this,{key:"GameScene"}))).pad1,e.pad2,e.ball,e.scoreText1,e.scoreText2,e.lastScored=1,e.player2Config,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,Phaser.Scene),function(e,t,n){t&&f(e.prototype,t)}(t,[{key:"create",value:function(e){switch(e.type){case c.GAME_TYPE_1P:this.player2Config={isAI:!0,controls:!1,type:c.PAD_TYPE};break;case c.GAME_TYPE_2P:this.player2Config={isAI:!1,controls:!0,type:c.PAD_TYPE};break;case c.GAME_TYPE_1PW:this.player2Config={isAI:!1,controls:!1,type:c.WALL_TYPE}}switch(this.pad1=new r.default({scene:this,x:20}),this.scoreText1=new u.default({scene:this,x:250}),this.ball=new o.default({scene:this,x:300,y:200}),this.player2Config.type){case c.PAD_TYPE:this.pad2=new r.default({scene:this,x:580}),this.scoreText2=new u.default({scene:this,x:350});break;case c.WALL_TYPE:this.pad2=new i.default({scene:this,x:580})}}},{key:"update",value:function(){var e=this;this.physics.add.collider(this.pad1,this.ball,this.ball.hitPadCallback),this.player2Config.type===c.PAD_TYPE&&this.physics.add.collider(this.pad2,this.ball,this.ball.hitPadCallback),this.player2Config.type===c.WALL_TYPE&&this.physics.add.collider(this.pad2,this.ball,function(){e.scoreText1.incrementScore(),e.sound.play("hit2")});var t=this.input.keyboard.createCursorKeys();t.up.isDown?this.pad1.bottomMoving():t.down.isDown?this.pad1.topMoving():this.pad1.stopMoving(),this.player2Config.controls&&(t.right.isDown?this.pad2.bottomMoving():t.left.isDown?this.pad2.topMoving():this.pad2.stopMoving()),t.shift.isDown&&this.scene.start("MenuScene"),this.player2Config.isAI&&this.handleAi(),t.space.isDown&&this.ball.launchBall(this.lastScored),this.handleBlockedBall()}},{key:"handleBlockedBall",value:function(){this.player2Config.type===c.PAD_TYPE&&(this.ball.isBlockedRight()&&(this.scoreText1.incrementScore(),this.lastScored=1),this.ball.isBlockedLeft()&&(this.scoreText2.incrementScore(),this.lastScored=2),5!==this.scoreText1.score&&5!==this.scoreText2.score||this.scene.start("ScoreScene",{P1Score:this.scoreText1.score,P2Score:this.scoreText2.score})),(this.ball.isBlockedRight()||this.ball.isBlockedLeft())&&(this.ball.reinitializePosition(),this.pad1.reinitializePosition(),this.pad2.reinitializePosition(),this.player2Config.type===c.WALL_TYPE&&this.scene.start("ScoreScene",{P1Score:this.scoreText1.score}))}},{key:"handleAi",value:function(){this.pad2.setVelocityY(this.ball.body.velocity.y)}}]),t}();t.default=p},476:function(e,t,n){e.exports=n.p+"6fa7331d047fdca8630f9b4670f8aaae.wav"},477:function(e,t,n){e.exports=n.p+"66a0bf1d911e3f70fa409e54b72e43f5.wav"},478:function(e,t,n){e.exports=n.p+"5fcde48afdec3b29fbb648ea9c0b4914.png"},479:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(33);var o=u(n(478)),r=u(n(477)),i=u(n(476));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,a(t).call(this,{key:"BootScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,Phaser.Scene),function(e,t,n){t&&s(e.prototype,t)}(t,[{key:"preload",value:function(){var e=this;this.load.image("square",o.default),this.load.audio("hit1",r.default),this.load.audio("hit2",i.default),this.load.on("complete",function(){e.scene.start("MenuScene")})}},{key:"create",value:function(){this.add.text(100,100,"Boot scene")}}]),t}();t.default=l},480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(33),i(n(224));var o=n(107),r=i(n(142));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,a(t).call(this,{key:"MenuScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,Phaser.Scene),function(e,t,n){t&&s(e.prototype,t)}(t,[{key:"create",value:function(){this.menus=[new r.default(c({scene:this,type:"menu",y:100,text:"One player",nextScene:"GameScene"},"type",o.GAME_TYPE_1P)),new r.default(c({scene:this,type:"menu",y:150,text:"Two player",nextScene:"GameScene"},"type",o.GAME_TYPE_2P)),new r.default(c({scene:this,type:"menu",y:200,text:"One player VS wall",nextScene:"GameScene"},"type",o.GAME_TYPE_1PW)),new r.default(c({scene:this,type:"menu",y:250,text:"Show controls",nextScene:"ShowControlsScene"},"type",null))],this.menus[0].setActive(),this.isToggable=!0}},{key:"update",value:function(){var e=this.input.keyboard.createCursorKeys();e.up.isDown&&this.toggleActiveMenu("up"),e.down.isDown&&this.toggleActiveMenu("down"),e.space.isDown&&(this.isToggable&&this.menus.find(function(e){return e.isActive}).startNewScene(),this.isToggable=!1)}},{key:"toggleActiveMenu",value:function(e){var t=this;if(this.isToggable){this.isToggable=!1;var n=this.menus.findIndex(function(e){return e.isActive});switch(e){case"up":n>0&&(this.menus[n].setInactive(),this.menus[n-1].setActive());break;case"down":n<this.menus.length-1&&(this.menus[n].setInactive(),this.menus[n+1].setActive())}setTimeout(function(){t.isToggable=!0},200)}}}]),t}();t.default=l}});