class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload(){
        this.load.audio('backgroundMusic', './assets/scifiMusic.mp3');
    }

    create(){
        this.add.text(20, 20, 'Endless Runner Play')
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0)
        this.add.rectangle(0, 20, game.config.width, borderUISize + 20, 0x0000).setOrigin(0, 0)
        
        
        
        
        
        this.cupcake1 = new Cupcake(this, game.config.width/2, game.config.height/3, 'cupcake', 0).setOrigin(0, 0)
        this.cupcake2 = new Cupcake(this, game.config.width/3 + borderPadding * 6, game.config.height/3 - borderUISize - borderPadding, 'cupcake', 0).setOrigin(0, 0)
        this.cupcake3 = new Cupcake(this, game.config.width/2 + borderPadding * 12, game.config.height/3 - borderUISize - borderPadding, 'cupcake', 0).setOrigin(0, 0)

        this.spaceShip = new spaceShip(this, game.config.width/2, game.config.height - borderPadding - borderUISize * 6, 'spaceShip').setOrigin(0, 0)
        // this.donut1 = new Donut(this, game.config.width/2, game.config.height - borderPadding - borderUISize, '').setOrigin(0, 0)

        keyReset = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.boom1 = new Boom(this, game.config.width/2, game.config.height/3 - borderPadding * 9, 'boom', 0).setOrigin(0, 0)
        this.boom2 = new Boom(this, game.config.width/2 + borderPadding * 7, game.config.height/3 - borderPadding * 5, 'boom', 0).setOrigin(0, 0)
        this.boom3 = new Boom(this, game.config.width/2 + borderPadding * 15, game.config.height/3 - borderPadding, 'boom', 0).setOrigin(0, 0)

        //MODS -- add BGM
        this.music = this.sound.add('backgroundMusic');
        this.music.play({
            loop:true,
            volume: 0.6
        });

        this.gameOver = false

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            
        }

        //MODS -- init highest score
        localStorage.setItem('highestScore', this.spaceShip.score.toString());// MOD -- game is over, update the highest score if needed
        
        
        
        this.scoreText = this.add.text(borderUISize + borderPadding, borderUISize - borderPadding, 'Score: ' + this.spaceShip.score, scoreConfig);
        this.hpText = this.add.text(game.config.width - borderUISize * 6, borderUISize - borderPadding, 'Hp: ' + this.spaceShip.hp, scoreConfig);
        
        
        

    }

    update(){
        this.background.tilePositionY -= 1
         // check key input for restart
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyReset)) {
        this.scene.restart()
        }
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyX)) {
            this.scene.start('menuScene')
        }

        if(!this.gameOver){
            this.spaceShip.update()
            this.cupcake1.update()
            this.cupcake2.update()
            this.cupcake3.update()
    
            this.boom1.update()
            this.boom2.update()
            this.boom3.update()
        }

        //check collision with cupcake
        if(this.checkCollision(this.spaceShip, this.cupcake1)){
            
            this.cakeCollect(this.spaceShip, this.cupcake1)
            
        }
        if(this.checkCollision(this.spaceShip, this.cupcake2)){
            
            this.cakeCollect(this.spaceShip, this.cupcake2)
        }
        if(this.checkCollision(this.spaceShip, this.cupcake3)){
            
            this.cakeCollect(this.spaceShip, this.cupcake3)
        }

        //check collision with booms
        if(this.checkCollision(this.spaceShip, this.boom1)){
            
            this.explo(this.boom1)
            this.checkHp(this.spaceShip)
        }
        if(this.checkCollision(this.spaceShip, this.boom2)){
            
            this.explo(this.boom2)
            this.checkHp(this.spaceShip)
        }
        if(this.checkCollision(this.spaceShip, this.boom3)){
            //play explosion sound
            this.explo(this.boom3)
            this.checkHp(this.spaceShip)
            
        }
        
    }

    

    checkCollision(spaceShip, item) {
        // simple AABB checking
        if (spaceShip.x < item.x + item.width && 
          spaceShip.x + spaceShip.width > item.x && 
          spaceShip.y < item.y + item.height &&
          spaceShip.height + spaceShip.y > item. y) {
          return true
        } else {
          return false
        }
      }
    checkHp(spaceShip){
        if(spaceShip.hp >= 1){
            spaceShip.hp -= 1
            console.log('Hp is ' + spaceShip.hp)
            this.hpText.text = 'Hp: ' + spaceShip.hp
            spaceShip.reset()
        }else{
            // console.log('game over')
            this.gameOver = true
            //stop music
            this.music.stop()
            
            let scoreConfig = {
                fontFamily: 'Courier',
                fontSize: '28px',
                backgroundColor: '#F3B141',
                color: '#843605',
                align: 'right',
                padding: {
                    top: 5,
                    bottom: 5,
                },
                
            }
            this.OverText = this.add.text(game.config.width/8, game.config.height/2, 'GameOver: R to restart, X back to menu' , scoreConfig);
            if(this.spaceShip.score > parseInt(localStorage.getItem('highestScore'))){
                localStorage.setItem('highestScore', this.spaceShip.score.toString());
            }
        }
    }
    cakeCollect(spaceShip, item){
        item.alpha = 0
        spaceShip.score += 1
        this.sound.play('pickupcake')
        //update the text object
        item.reset()
        item.alpha = 1
        
        // console.log('Your Score:' + bird.score)
        this.scoreText.text = 'Score: ' + this.spaceShip.score

        
    }
    explo(item){
        item.alpha = 0

        let boom = this.add.sprite(item.x, item.y, 'explosion').setOrigin(0, 0)
        boom.anims.play('explode')
        boom.on('animationcomplete', () => {
            item.reset()
            item.alpha = 1
            boom.destroy()
        })

        //MOD randomize 3 explosion sound
        let rsound = Math.random();
        if(rsound > 0.7){
            this.sound.play('sfx_explo01');
        }else if (rsound > 0.4){
            this.sound.play('sfx_explo02');
        }else if(rsound > 0.2){
            this.sound.play('sfx_explo03');
        }
        else{
            this.sound.play('sfx_explo04');
        }

    }
}