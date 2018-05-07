// Variables declaration
let player, score, velocity, canJump

// Starting values
velocity = 3

let obstacles = []
function setup() {
  createCanvas(400, 400)

  // Create new Objects
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

  // Generate new Obstacle
  if(frameCount % 90 == 0){
    obstacles.push(new Obstacle)
  }

  // Display/update obstacles
  for(let i = obstacles.length - 1; i >= 0; i--){
    obstacles[i].show()
    obstacles[i].update()

    // Detect collision between player and obstacle
    if(obstacles[i].hits(player)){
      console.log(`hit`)
    }

    // Remove obstacle from array
    if(obstacles[i].offScreen()){
      obstacles.splice(i,1)
    }
  }

  score.update()

  // Create ground
  stroke(0)
  line(0,225,width, 225)

  // Jumping on mobile
  if(mouseIsPressed){
    player.up()
  }
}

// Jump on Space
function keyPressed(){
  if(key === ' '){
    player.up()
    return false;
  }
}
