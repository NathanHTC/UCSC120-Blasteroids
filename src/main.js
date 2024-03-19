//Nathan Chan and Shazer Rizzo
//Make the Fake
let config = {
    type:Phaser.AUTO,
    width: 1200,
    height:800,
    scene: [ Menu, Play ],
    
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;


// reserve keyboard variables
let keyReset, keyLeft, keyRight, keyUp, keyDown, keyX, keyF;
