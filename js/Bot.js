class Bot extends Robots {
    constructor(context, x, y) {
        super(context, x, y)
        //default dimensions

        this.width = 25
        this.height = 20
        this.minVelocity = 100
        this.maxVelocity = 225
        this.accel = 125
        this.initalVx = 0
        this.finalVx = 0
        this.initalVy = 0
        this.finalVy = 0
    }
    // method that draws the object on to the canvas
    draw() {
        this.context.fillStyle = 'black'
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
    motion(time, canvasWidth, canvasHeight) {
        // if (this.x < 0 || this.x > canvasWidth - this.width) {
        //     console.log('reached the edge: ')
        //     this.vx = -this.vx

        // }
        // if (this.y < 0 || this.y > canvasHeight - this.height) {
        //     this.vy = -this.vy
        // }
        // this.x += this.vx * deltaTime
        // this.y += this.vy * deltaTime
        // console.log('position x: ', this.x)
        // // this.x += this.vx * deltaTime + .5 * (.0000000000000001) * deltaTime * deltaTime
        // // this.y += this.vy * deltaTime + .5 * (.0000000000000001) * deltaTime * deltaTime
    
        if (this.initalVx < this.maxVelocity) {
            this.acceleration(time)
        }
        this.velocity(time, canvasWidth, canvasHeight)

    }
    acceleration(time) {
        this.x += this.initalVx * time + .5 * this.accel * time * time
        // this.y += this.initalVx * time + .5 * this.acceleration * time * time

        this.finalVx = this.initalVx + this.accel * time
        // this.finalVy = this.initalVy + this.acceleration * time

        this.initalVx = this.finalVx
        // this.initalVy = this.finalVy
    }
    velocity(time, width, height) {
        console.log('position: ', this.x)
        console.log('width: ', height)
        if (this.x < 0 || this.x > width - this.width) {
            this.finalVx = -this.finalVx
        }
        if (this.y < 0 || this.y > height - this.height) {
            this.finalVy = -this.finalVy
        }
        this.x += this.finalVx * time
        this.y += this.finalVy * time
    }
    turn() {
        this.context.rotate(180 * Math.PI / 180)
        console.log('reached rotate method: ')
    }
}