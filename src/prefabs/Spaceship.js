

class spaceShip extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.moveSpeed = 4
        this.hp = 5
        this.score = 0
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
        
    }
    reset(){
        this.y = game.config.height - borderPadding - borderUISize * 7
    }
}