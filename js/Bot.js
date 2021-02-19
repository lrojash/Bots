class Bot extends Robots {
    constructor(context, x, y, vx, vy) {
        super(context, x, y, vx, vy)
        //default dimensions

        this.width = 50
        this.height = 50
    }
    // helper method for visualization will remove later
    drawLines() {
        this.context.beginPath()
        this.context.moveTo(500, 0)
        this.context.lineTo(500, 600)
        this.context.stroke()

        this.context.beginPath()
        this.context.moveTo(0, 300)
        this.context.lineTo(1000, 300)
        this.context.stroke()

        this.context.beginPath()
        this.context.moveTo(450, 250)
        this.context.lineTo(550, 250)
        this.context.stroke()

        this.context.beginPath()
        this.context.moveTo(550, 250)
        this.context.lineTo(550, 350)
        this.context.stroke()

        this.context.beginPath()
        this.context.moveTo(450, 250)
        this.context.lineTo(450, 350)
        this.context.stroke()

        this.context.beginPath()
        this.context.moveTo(450, 350)
        this.context.lineTo(550, 350)
        this.context.stroke()
    }
    // method that draws the object on to the canvas
    draw() {
        this.context.fillStyle = 'black'
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
    motion(deltaTime, canvasWidth, canvasHeight) {
        if (this.x < 0 || this.x > canvasWidth - this.width) {
            this.vx = -this.vx
        }
        if (this.y < 0 || this.y > canvasHeight - this.height) {
            this.vy = -this.vy
        }
        this.x += this.vx * deltaTime
        this.y += this.vy * deltaTime
    }
    // will halt the motion of the bot
    stop() {
        console.log('DANGER!!!')
    }
    // will continue the motion of the bot after stopping
    continue() { }
}