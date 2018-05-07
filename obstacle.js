class Obstacle{
  constructor(){
    this.x = width
    this.y = 200
    this.height = 25

    this.hits = function(player){

      // Detect colision / end game
      if(this.x <= player.x ){
        if(player.y >= 185 && this.x >= 10)  {
          noLoop()
          this.gameOver()
        }
      }
    }

    // Display Obstacle
    this.show = function(){
      fill(0)
      rect(this.x, this.y, 5, this.height, 0.8)
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
        fill(255,0,0)
        rect(width / 2 - 55, height / 2 - 90, 100,20)
        fill(0)
        text("Game over!", width / 2 - 35, height / 2 - 77)
    }
  }
}