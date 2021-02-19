class Grid {
    constructor(canvasId) {
        this.canvas = null
        this.context = null
        this.initialTime = 0
        // use to store all bots in an array
        this.bots = []
        this.init(canvasId)
    }
    init(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.context = this.canvas.getContext('2d')

        this.addBots()
        window.requestAnimationFrame((timeStamp) => { this.gridLoop(timeStamp) })
    }
    // create bot array
    addBots() {
        this.bots = [
            // reminder (context, x-coordinate, y-coordinate, x-velocity, y-volocity)
            new Bot(this.context, 0, 275, 200, 0),
            new Bot(this.context, 475, 0, 0, 150)
        ]
    }
    gridLoop(timeStamp) {
        let deltaTime = (timeStamp - this.initialTime) / 1000;
        this.initialTime = timeStamp
        for (let i = 0; i < this.bots.length; i++) {
            this.bots[i].motion(deltaTime, this.canvas.width, this.canvas.height)
        }
        this.collision()
        this.clear()
        for(let i =0; i < this.bots.length; i++) {
            this.bots[i].draw()
            this.bots[i].drawLines()
        }


        window.requestAnimationFrame((timeStamp) => this.gridLoop(timeStamp))
    }
    // clear the canvas in order to have a single square display instead of a continuous drawing
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    // will check to see if the objects are within range of each other
    collision() {
        let bot1
        let bot2
        
        for(let i = 0; i < this.bots.length; i++) {
            bot1 = this.bots[i]
            for (let j = i + 1; j < this.bots.length; j++){
                bot2 = this.bots[j]
                this.rangeValue(bot1.x, bot1.y, bot2.x, bot2.y)
                
            }
        }
    }
    // helper function to be used inside collision
    // the function will take in the position of both objects and calcualte the distance between
    // if within a certain range will return true
    rangeValue(x1, y1, x2, y2) {
        if(x1 > 400 && x1 < 550 && y2 > 200 && y2 < 350) {
            console.log('DANGER!!!')
            return true
        }
        return false
    }
}