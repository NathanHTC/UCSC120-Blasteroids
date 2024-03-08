class spaceShip extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.moveSpeed = game.settings.spaceShipSpeed
        this.hp = 10
        this.score = 0
        this.angle = 0
        
    }
    update(){
        if(keyUp.isDown && this.y > borderPadding){
            this.y -= this.moveSpeed;
            this.angle = 0;
        }
        if(keyDown.isDown && this.y < game.config.height - borderPadding - borderUISize){
            this.y += this.moveSpeed;
            this.angle = 180;
        }
        if(keyLeft.isDown && this.x > borderPadding){
            this.x -= this.moveSpeed;
            this.angle = -90;
        }
        if(keyRight.isDown && this.x < game.config.width - borderPadding - borderUISize){
            this.x += this.moveSpeed;
            this.angle = 90
        }
        // if(Phaser.Input.Keyboard.JustDown(keyF)){
        //     this.laserGroup.fireBullet();
        // }
        
        


        
    }
    reset(){
        this.y = game.config.height - borderPadding - borderUISize * 7
    }

    
}