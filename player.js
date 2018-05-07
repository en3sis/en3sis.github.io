class Player {
  constructor() {
    this.x = 20;
    this.y = 200

    // Gravity, Jump size and Velocity
    this.gravity = 1
    this.jump = 30
    this.velocity = 2

    this.show = function () {
      // Define square/player
      fill(255)
      rect(this.x, this.y, 25, 25);

      // Add eyes to square
      fill(0)
      noStroke()
      ellipse(this.x + 10, this.y + 5, 5, 5)
      ellipse(this.x + 25, this.y + 5, 5, 5)
    };

    // Update player
    this.update = function () {
      if(this.y < 200){
        this.down()
      }
    };

    // Move player back to origina position
    this.down = function(){
      this.y += this.velocity / this.gravity
    }

    // Limite the jump to one
    this.up = function () {
      if(this.y <= 190){
        return
      }else{
       this.y -= this.jump  * this.velocity
      }
    };
  }
}
