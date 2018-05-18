// Clouds by http://alpha.editor.p5js.org/jackiezen/sketches/rJEziNOR
let cloud = (x, y, size) => {
  push()
  fill("#E0DFDF");
	noStroke();
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
  arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
  pop()
}

