let player, score, velocity, canJump, jumpSound, endSound, baseSound, playButton, startGame, ww, randomObstacles, newCloud

// Starting values
velocity = 3
startGame = false

let obstacles = []
let clouds = []
let cloudAppear = [130, 430, 720, 1190, 1510, 1920, 2200, 2220, 2450, 3320]

// Sounds by https://opengameart.org/content/100-plus-game-sound-effects-wavoggm4a
function preload() {
  baseSound = loadSound('sound/base.mp3')
  jumpSound = loadSound('sound/jump.ogg')
  endSound = loadSound('sound/end.ogg')
}

function setup() {
  // Calculate window width and add paddings.
  ww = windowWidth * 0.95
  if(ww > 710){
    ww = 700
  }

  // Setup responsive canvas
  createCanvas(ww , 400)

  // Create new Objects
  player = new Player()
  obstacles.push(new Obstacle)
  score = new Score

  // Sound files
  soundFormats('mp3', 'ogg');
  baseSound.play()

  // Setup the volume for sounds
  baseSound.setVolume(0.1)
  jumpSound.setVolume(0.1)
  endSound.setVolume(0.2)

  // CLOUD CONFIG
  newCloud = {
    xpos: width,
    ypos: height / 2 - 100,
    size: random(2, 2.7)
  }
}

// =================================
//   Draw function
// =================================
function draw() {
  background(255)
  fill(0)

  // Instructions
  push()
    noStroke()
    text("Press SPACE or TAP to jump!", width / 2 - 90, 340)
  pop()

  // Call Player
  player.show()
  player.update()


  // Generate new Obstacle
  if(frameCount % 90 == 0) {
    obstacles.push(new Obstacle)
  }

  // Display/update obstacles
  for(let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].show()
    obstacles[i].update()

    // Detect collision between player and obstacle
    if(obstacles[i].hits(player)){ return }

    // Remove obstacle from array
    if(obstacles[i].offScreen()) {
      obstacles.splice(i,1)
    }
  }

  // Update, display current score and best score.
  score.update()

  // Add cloud based on Score / Location
  for(let i = 0; i < cloudAppear.length; i++) {
    if(score.score ==  cloudAppear[i]){
      clouds.push(newCloud);
      // obstacles.push(new Obstacle)
    }
  }

  // Create ground
  stroke(0)
  line(0,225,width, 225)

  // Jumping on mobile
  if(mouseIsPressed) {
    player.up()
  }

  // Movment of the clouds
  for (i = 0; i < clouds.length; i++) {
    var currentObj = clouds[i];
    cloud(currentObj.xpos, currentObj.ypos, currentObj.size);
    currentObj.xpos -= 0.9;
    currentObj.ypos -= random(-0.1, 0.1);
    if (clouds[i].xpos > width+20) {
      clouds.splice(i, 1);
    }
  }
}
// end draw()

// Jump on Space
function keyPressed() {
  if(key === ' ') {
    player.up()
    return false;
  }
}
