class Bot extends Robots {
    constructor(context, x, y, vx, vy) {
        super(context, x , y, vx, vy)
        //default dimensions

        this.width = 50
        this.height = 50
    }
    // method that draws the object on to the canvas
    draw() {
        this.context.fillStyle = 'black'
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
    motion(deltaTime) {
        // if(this.x < 0 || this.x > this.canvas.width - this.width){
        //     this.vx = -this.vx
        // }
        // if (this.y < 0 || this.y > this.canvas.heigth - this.height) {
        //     this.vy = -this.vy
        // }
        this.x += this.vx * deltaTime
        this.y += this.vy * deltaTime
    }
}