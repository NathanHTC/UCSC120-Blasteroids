class spaceShip extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        // this.moveSpeed = game.settings.spaceShipSpeed
        this.hp = 15
        this.score = 0
        this.angle = 0
        this.isInvulnerable = false;
        this.invulnerabilityDuration = 1000;
        
    }
    update(){
        if(keyUp.isDown && this.y > borderPadding){
            this.y -= game.settings.spaceShipSpeed;
            this.angle = 0;
        }
        if(keyDown.isDown && this.y < game.config.height - borderPadding - borderUISize){
            this.y += game.settings.spaceShipSpeed;
            this.angle = 180;
        }
        if(keyLeft.isDown && this.x > borderPadding){
            this.x -= game.settings.spaceShipSpeed;
            this.angle = -90;
        }
        if(keyRight.isDown && this.x < game.config.width - borderPadding - borderUISize){
            this.x += game.settings.spaceShipSpeed;
            this.angle = 90
        }
        // if(Phaser.Input.Keyboard.JustDown(keyF)){
        //     this.laserGroup.fireBullet();
        // }
        
        


        
    }
    reset(){
        this.y = game.config.height - borderPadding - borderUISize * 7
    }

    takeDamage(){
        if(!this.isInvulnerable){
            this.hp -= 1;
            this.isInvulnerable = true;
            this.scene.time.delayedCall(this.invulnerabilityDuration, () => {
                this.isInvulnerable = false; //reest after duration
            }, [], this)
        }
    }

    
}