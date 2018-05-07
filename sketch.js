let player, score, velocity, canJump
velocity = 3
canJump = true
let obstacles = []

function setup() {

  createCanvas(400, 400)
  player = new Player()
  obstacles.push(new Obstacle)
  score = new Score

}

function draw() {
  // Canvas decoration
  background(220)

  // Call Player
  player.show()
  player.update()

  if(frameCount % 90 == 0){
    obstacles.push(new Obstacle)
  }

  // Call obstacles
  for(let i = obstacles.length - 1; i >= 0; i--){
    obstacles[i].show()
    obstacles[i].update()

    // Detect collision
    if(obstacles[i].hits(player)){
      console.log(`hit`)
    }

    if(obstacles[i].offScreen()){
      obstacles.splice(i,1)
    }
  }

  score.update()

  stroke(0)
  line(0,225,width, 225)

}

function keyPressed(){
  if(key === ' '){
    player.up()
    return false;
  }
}

// function keyReleased(){
//   if(key === ' '){
//     player.down()
//   }
// }
