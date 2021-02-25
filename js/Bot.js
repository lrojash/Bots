class Bot extends Robots {
    constructor(context, x, y) {
        super(context, x, y)
        //default dimensions

        this.width = 25
        this.height = 20
        this.maxVelocity = 200
        this.accel = 50
        this.initialVx = 0
        this.finalVx = 0

        this.right = true
        // this.initialVy = 0
        // this.finalVy = 0

        // the angle that will be used for rotation. 
        this.angle = 0



    }
    // method that draws the object on to the canvas
    draw() {

        // this.context.save()
        // this.context.translate(this.x, this.y)
        // this.context.rotate(this.angle)
        this.context.fillStyle = 'black'
        this.context.fillRect(this.x, this.y, this.width, this.height)
        // this.context.restore()

    }
    motion(time, width, height) {
        if ( this.initialVx < this.maxVelocity) {
            if (this.x >= 0 && this.right && this.x < 600) {
                this.accelerate(time, 'speedUp')
            } else if (this.right && this.x >= 600) {
                this.accelerate(time, 'slowDown')
            } else if (!this.right && this.x >= 400) {
                this.accelerate(time, 'speedUp')
            } else if (!this.right && this.x < 400) {
                this.accelerate(time, 'slowDown')
            } else {
                console.log('error')
            }
        } else {
            this.accelerate(time, 'slowDown')
        }

        if (this.x >= 0 && this.x < width - this.width && this.right) {
            this.speed(time, 'west')
        } else if (this.x < 0) {
            this.speed(time, 'west')
        }
        else {
            this.speed(time, 'east')
        }
    }
    // will set the motion of the bot based on the time stamp that is being provided. will also verify if it has reached the edge of the canvas.
    speed(time, direction) {
        switch (direction) {
            case 'west':
                this.finalVx = this.finalVx
                this.right = true
                break
            case 'east':
                this.finalVx = -this.finalVx
                this.right = false
                break
            default:
                return
        }
        this.x += this.finalVx * time

    }
    // will be used to increase the velocity or decrease base on the location of the bot relative to the board, and later other bots
    accelerate(time, action) {
        switch (action) {
            case 'speedUp':
                this.finalVx = this.initialVx + this.accel * time

                break
            case 'slowDown':
                this.finalVx = this.initialVx - this.accel * time
                break
            default:
                return
        }

        this.initialVx = this.finalVx

    }
    // will be used to rotate the bot, either north, west, south, east
    turn(direction) {
        switch (direction) {
            case 'north':
                this.angle = 270
                break
            case 'west':
                this.angle = 0
                break
            case 'south':
                this.angle = 90
                break
            case 'east':
                this.angle = 180
                break
            default:
                return
        }
    }
}