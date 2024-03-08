//HO TIN CHEN
//Endless Runner
//12 hours

let config = {
    type:Phaser.AUTO,
    width: 1000,
    height:800,
    scene: [ Menu, Play ],
    settings: {
        boomSpeed: 6
    }
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;


// reserve keyboard variables
let keyReset, keyLeft, keyRight, keyUp, keyDown, keyX, keyF;