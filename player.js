class Player {
  constructor() {
    this.x = 20;
    this.y = 200

    // Gravity, Jump size and Velocity
    this.gravity = 1
    this.jump = 30
    this.velocity = 2

    this.show = function () {
      fill(255)
      // rotate(20,x)
      rect(this.x, this.y, 25, 25);

      // EYES
      fill(0)
      noStroke()
      ellipse(this.x + 10, this.y + 5, 5, 5)
      ellipse(this.x + 25, this.y + 5, 5, 5)
    };

    this.update = function () {
      if(this.y < 200){
        this.down()
      }
    };

    this.down = function(){
      this.y += this.velocity / this.gravity
    }

    this.up = function () {
      if(this.y <= 190){
        return
      }else{
       this.y -= this.jump  * this.velocity
      }
    };
  }
}
