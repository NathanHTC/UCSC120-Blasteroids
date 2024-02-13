

class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){
        this.load.image('donut1', './assets/domut1.png')
        this.load.image('bird', './assets/bird.png')
        this.load.image('cupcake', './assets/cupcake.png')
        this.load.image('background', './assets/background.png')
    }

    create() {
       this.add.text(20, 20, 'Endless Runner Menu')
       this.scene.start('playScene')
    }
    update(){
        
    }
}