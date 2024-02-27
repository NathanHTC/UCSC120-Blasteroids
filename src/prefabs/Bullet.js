class Bullet extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'bullet');
        scene.add.existing(this);
        this.setActive(false);
        this.setVisible(false);
        this.velocity = 4
        this.vx = 0
        this.vy = 0
    }
    fire(x, y, angle){
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.setRotation(Phaser.Math.DegToRad(angle));

        // Convert angle to radians for trigonometric functions
        let radian = Phaser.Math.DegToRad(angle);
        // Calculate velocity components
        let vx = this.velocity * Math.cos(radian);
        let vy = this.velocity * Math.sin(radian);

        // Directly adjust sprite's position in the update method based on these velocities
        this.vx = vx;
        this.vy = vy;

    }

    update(time,delta){
        // Update position based on velocity
        this.x += this.vx * (delta / 1000);
        this.y += this.vy * (delta / 1000);
        // If bullet goes off screen, deactivate it
        if (this.x < 0 || this.x > game.config.width || this.y < 0 || this.y > game.config.height) {
            this.setActive(false);
            this.setVisible(false);
        }
        
}
    // Call this method to recycle bullets
    reset(){
        this.setActive(false);
        this.setVisible(false);
    }
}