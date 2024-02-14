

class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){
        this.load.image('donut1', './assets/domut1.png')
        this.load.image('bird', './assets/bird.png')
        this.load.image('cupcake', './assets/cupcake.png')
        this.load.image('boom', './assets/boom.png')
        this.load.image('background', './assets/background.png')
        
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
       this.add.text(20, 20, 'Endless Runner Menu')
       this.scene.start('playScene')
    }
    update(){
        
    }
}