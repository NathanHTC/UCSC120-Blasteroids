
class Fuel extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.moveSpeed = 3
        this.initialize();
    }

    initialize() {
        // Randomly choose a side: 0 = top, 1 = right, 2 = bottom, 3 = left
        const side = Phaser.Math.Between(0, 3);

        switch(side) {
            case 0: // Top
                this.x = Phaser.Math.Between(0, game.config.width);
                this.y = -this.height;
                this.moveSpeedX = 0;
                this.moveSpeedY = game.settings.boomSpeed;
                break;
            case 1: // Right
                this.x = game.config.width + this.width;
                this.y = Phaser.Math.Between(0, game.config.height);
                this.moveSpeedX = -game.settings.boomSpeed;
                this.moveSpeedY = 0;
                break;
            case 2: // Bottom
                this.x = Phaser.Math.Between(0, game.config.width);
                this.y = game.config.height + this.height;
                this.moveSpeedX = 0;
                this.moveSpeedY = -game.settings.boomSpeed;
                break;
            case 3: // Left
                this.x = -this.width;
                this.y = Phaser.Math.Between(0, game.config.height);
                this.moveSpeedX = game.settings.boomSpeed;
                this.moveSpeedY = 0;
                break;
        }
    }

    update() {
        this.x += this.moveSpeedX;
        this.y += this.moveSpeedY;

        // Reset if it goes off screen
        if (this.x < -this.width || this.x > game.config.width + this.width || 
            this.y < -this.height || this.y > game.config.height + this.height) {
            this.initialize(); // Reinitialize to come from a new direction
        }
    }

    reset() {
        this.initialize(); // Reuse the initialization logic for resetting
    }
}