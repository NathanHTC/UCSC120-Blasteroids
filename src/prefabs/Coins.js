
class Coin extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.moveSpeed = 3
    }

    update(){
        this.x -= this.moveSpeed

        if(this.x <= 0 - this.width){
            this.x = game.config.width
        }
    }
    reset(){
        this.x = game.config.width + this.x + borderPadding * 12
    }
}