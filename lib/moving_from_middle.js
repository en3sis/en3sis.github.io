
var xoff1 = 0
var xoff2 = 10000


function setup() {
  createCanvas(300, 300);

}

let arr = []
function draw() {
  background(200);

  var x = map(noise(xoff1), 0, 1, 0, width)
  var y = map(noise(xoff2), 0, 1, 0, height)
  // var x = random(300)
  // var y = random (100)
  xoff1 += 0.02
  xoff2 += 0.02

  fill(0)
  ellipse(x,y,24,24)
  line(150,150,x,y);
  ellipse(150,150,10,10)
  text(floor(x), 160,160)
  // noLoop()
}



