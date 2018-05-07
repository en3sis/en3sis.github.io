class Obstacle{
  constructor(){
    this.x = width
    this.y = 200
    this.height = 25
    this.width = 5

    this.hits = function(player){

      // Detect colision / end game
      if(this.x <= player.x + 23 ||this.x <= player.x - 25 ){
        if(player.y >= 175 && this.x >= 10)  {
          noLoop()
          this.gameOver()
        }
      }
    }

    // Display Obstacle
    this.show = function(){
      fill(0)
      rect(this.x, this.y, this.width , this.height)
    }

    //Calculate offScreen
    this.offScreen = function(){
      if(this.x < -width){
        return true
      }else{
        return false
      }
    }

    // Increse speed
    this.update = function(){
      this.x -= velocity;
    }

    // Game over function
    this.gameOver = function(){
        noFill()
        strokeWeight(1);
        stroke(0)
        rect(width / 2 - 55, height / 2 - 90, 100,20)
        fill(0)
        noStroke()
        text("Game over!", width / 2 - 35, height / 2 - 77)
        endSound.setVolume(0.3)
        endSound.play()
        baseSound.stop()
    }
  }
}