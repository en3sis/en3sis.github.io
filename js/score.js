class Score{
  constructor(){
    this.score = 0;
    this.time = 1

    // Update score
    this.update = (obstacle) => {
      this.score += 0.5;
      text("Score: " + floor(this.score), 20, 20)
      text("Velocity: " + floor(velocity), 20, 30)
      text("Best score: " + floor(localStorage.getItem("bestScore")) , 20, 40)
      // Update velocity base on score.
      velocity +=  0.6 / 100
    }
  }
}
