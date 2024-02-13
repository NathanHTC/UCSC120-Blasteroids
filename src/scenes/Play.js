class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload(){
        
    }

    create(){
        this.add.text(20, 20, 'Endless Runner Play')
        this.add.rectangle(0, 50, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
        this.background = this.add.tileSprite(0, 0, 1000, 800, 'background').setOrigin(0, 0)
    }

    update(){
        this.background.tilePositionX -= -1
    }
}