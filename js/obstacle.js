class Obstacle {
  constructor() {
    this.x = floor(random(ww,ww - 10))
    this.y = 200
    this.height = 25
    this.width = 5

    this.hits = (player) => {
      // Detect colision / end game
      if(this.x <= player.x + 23 ||this.x <= player.x - 25 ){
        if(player.y >= 175 && this.x >= 10)  {
          noLoop()
          this.gameOver()
        }
      }
    }

    // Display Obstacle
    this.show = () => {
      fill(0)
      rect(this.x, this.y, this.width , this.height)
    }

    //Calculate offScreen
    this.offScreen = () => {
      if(this.x < -width){
        return true
      }else{
        return false
      }
    }

    // Increse speed
    this.update = () => {
      this.x -= velocity;
    }

    // Game over function
    this.gameOver = () => {
      push()
        noFill()
        strokeWeight(1);
        stroke(0)
        rect(width / 2 - 55, height / 2 - 90, 100,20)
      pop()

        // Local storage of Best Score
        let bestScore = 0

        if(score.score > localStorage.getItem("bestScore")){
          bestScore = score.score
          updateBest(floor(bestScore))
        }

        function updateBest(el) {
          localStorage.setItem("bestScore", el)
        }

        push()
          fill(0)
          text("Game over!", width / 2 - 35, height / 2 - 77)
        pop()

        // Stop base sound and play the death sound
        endSound.play()
        baseSound.stop()
    }
  }
}
