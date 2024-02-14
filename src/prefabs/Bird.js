

class Bird extends Phaser.GameObjects.Sprite{
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
        }
        if(keyDown.isDown && this.y < game.config.height - borderPadding - borderUISize){
            this.y += this.moveSpeed;
        }
        if(keyLeft.isDown && this.x > borderPadding){
            this.x -= this.moveSpeed;
        }
        if(keyRight.isDown && this.x < game.config.width - borderPadding - borderUISize){
            this.x += this.moveSpeed;
        }
        
    }
    reset(){
        this.y = game.config.height - borderPadding - borderUISize * 7
    }
}