//HO TIN CHEN
//Endless Runner
//12 hours

const Phaser = require("phaser");

let config = {
    type:Phaser.AUTO,
    width: 1000,
    height:800,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

