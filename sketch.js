let player, score, velocity, canJump, jumpSound, endSound, baseSound, playButton, startGame, ww

// Starting values
velocity = 3
startGame = false



let obstacles = []
let clouds = []
let cloudAppear = [100, 400, 700, 1200, 1500, 1900, 2000, 2200, 2400, 3000]

// Sounds by https://opengameart.org/content/100-plus-game-sound-effects-wavoggm4a
function preload(){
  baseSound = loadSound('assets/sound/base.mp3')
  jumpSound = loadSound('assets/sound/jump.ogg')
  endSound = loadSound('assets/sound/end.ogg')
}

function setup() {
  // Calculate window with and add paddings.
  ww = windowWidth * 0.95

  createCanvas(ww , 400)
  console.log(windowWidth)
  // Create new Objects
  player = new Player()
  obstacles.push(new Obstacle)
  score = new Score

  // Sound files
  soundFormats('mp3', 'ogg');
  baseSound.setVolume(0.1)
  baseSound.play()

  // Instruction
}

function draw() {
  // Canvas decoration
  background(255 )

  // Instructions
  push()
    noStroke()
    text("Press SPACE or TAP to jump!", width / 2 - 90, 340)
  pop()

  // Call Player
  player.show()
  player.update()

  // CLOUD CONFIG
  var newCloud = {
    xpos: width,
    ypos: height / 2 - 100,
    size: random(1, 1.7)
  };

  // Generate new Obstacle
  if(frameCount % 90 == 0){
    obstacles.push(new Obstacle)
  }

  // Display/update obstacles
  for(let i = obstacles.length - 1; i >= 0; i--){
    obstacles[i].show()
    obstacles[i].update()

    // Detect collision between player and obstacle
    if(obstacles[i].hits(player)){    }

    // Remove obstacle from array
    if(obstacles[i].offScreen()){
      obstacles.splice(i,1)
    }
  }

  // Display Score
  score.update()


  // Add cloud based on Score / Location
  for(let i = 0; i < cloudAppear.length; i++){
    if(score.score ==  cloudAppear[i]){
      clouds.push(newCloud);
    }
  }

  // Create ground
  stroke(0)
  line(0,225,width, 225)

  // Jumping on mobile
  if(mouseIsPressed){
    player.up()
  }

  // Movment of the clouds
  for (i = 0; i < clouds.length; i++) {
    var currentObj = clouds[i];
    cloud(currentObj.xpos, currentObj.ypos, currentObj.size);
    currentObj.xpos -= 0.5;
    currentObj.ypos -= random(-0.5, 0.5);
    if (clouds[i].xpos > width+20) {
      clouds.splice(i, 1);
    }
  }

}
// end draw()



// Clouds by http://alpha.editor.p5js.org/jackiezen/sketches/rJEziNOR
function cloud(x, y, size) {
  push()
  fill("#E0DFDF");
	noStroke();
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
  arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
  pop()
}

// Jump on Space
function keyPressed(){
  if(key === ' '){
    player.up()
    return false;
  }
}







// function togglePlay(){
//   if(startGame){
//     loop();
//   }else{
//     noLoop();
//   }
// }