


class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){
        this.load.image('donut1', './assets/domut1.png')
        this.load.image('spaceShip', './assets/sprites/spaceShip.png')
        this.load.image('bullet', './assets/sprites/bullet')
        this.load.image('fuel', './assets/sprites/fuel.png')
        this.load.image('boom', './assets/boom.png')
        this.load.image('background', './assets/sprites/background.png')
        
        // load audio
        this.load.audio('sfx_explo01', './assets/explo01.wav');
        this.load.audio('sfx_explo02', './assets/explo02.wav');
        this.load.audio('sfx_explo03', './assets/explo03.wav');
        this.load.audio('sfx_explo04', './assets/explo04.wav');
        this.load.audio('pickupcake', './assets/pickupCake.wav');

        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 90,
            frameHeight: 64,
            startFrame: 0,
            endFrame: 9
        })

        let menuConfig = {
            fontFamily: 'cursive',
            fontSize: '28px',
            backgroundColor: '#FFFFF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        

    }

    create() {
       this.anims.create({
        key: 'explode',
        frames: this.anims.generateFrameNumbers('explosion', {
            start : 0,
            end: 9,
            first: 0
        }),
        frameRate: 30
       }) 
       this.add.text(game.config.width / 3, game.config.height / 2 - 60, 'Endless Runner Menu')
       this.add.text(game.config.width / 3, game.config.height / 2 - 30, 'Left Arrow: Start Normal Mode')
       this.add.text(game.config.width / 3, game.config.height / 2, 'Right Arrow: Start Hard Mode')

        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        //initialize highestScore to 0 if not found, stored in localStorage
        let highestScore = localStorage.getItem('highestScore') || '0'; 
        this.scoreText = this.add.text(game.config.width/3 + 120, game.config.height/2 + 50, 'Highest Score:' + highestScore).setOrigin(0.5);
        this.creditText = this.add.text(game.config.width/3 + 120, game.config.height/2 + 90, 'Credit: Art: HoTin Chen ; Music: Rog Asignf ').setOrigin(0.5);

    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLeft)){
            this.game.settings = {
                cupcakeSpeed: 3,
                boomSpeed:2
            }
            this.sound.play('pickupcake')
            this.scene.start('playScene')
        }
        if(Phaser.Input.Keyboard.JustDown(keyRight)){
            this.game.settings = {
                cupcakeSpeed: 4,
                boomSpeed:6
            }
            this.sound.play('pickupcake')
            this.scene.start('playScene')
        }
       
    }
}