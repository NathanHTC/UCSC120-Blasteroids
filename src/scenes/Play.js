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
        this.cupcake1 = new Cupcake(this, game.config.width/2, game.config.height/3, 'cupcake', 0).setOrigin(0, 0)
        this.cupcake2 = new Cupcake(this, game.config.width/3 + borderPadding * 6, game.config.height/3 - borderUISize - borderPadding, 'cupcake', 0).setOrigin(0, 0)
        this.cupcake3 = new Cupcake(this, game.config.width/2 + borderPadding * 12, game.config.height/3 - borderUISize - borderPadding, 'cupcake', 0).setOrigin(0, 0)

        this.bird = new Bird(this, game.config.width/2, game.config.height - borderPadding - borderUISize, 'bird').setOrigin(0, 0)
        // this.donut1 = new Donut(this, game.config.width/2, game.config.height - borderPadding - borderUISize, '').setOrigin(0, 0)

        keyReset = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

    }

    update(){
        this.background.tilePositionX -= -1
        this.bird.update()
        this.cupcake1.update()
        this.cupcake2.update()
        this.cupcake3.update()

        
    }
}