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
            new Bot(this.context, 100, 100, 50, 50)
        ]
    }
    gridLoop(timeStamp) {
        let deltaTime = (timeStamp - this.initialTime) / 1000;
        this.initialTime = timeStamp
        
        for (let i = 0; i < this.bots.length; i++) {
            this.bots[i].motion(deltaTime)
        }
        this.clear()
        for(let i =0; i < this.bots.length; i++) {
            this.bots[i].draw()
        }


        window.requestAnimationFrame((timeStamp) => this.gridLoop(timeStamp))
    }
    // clear the canvas in order to have a single square display instead of a continuous drawing
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}