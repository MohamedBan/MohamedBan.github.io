// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x =0;
let y =0;
let speed =20;
let state = "right";
let squareSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawSquare();
  moveSquare();
}
function drawSquare() {
  square(x, y, squareSize);
}

function moveSquare(){
  if (state === "right") {
    x += speed;
    if (x + squareSize >= width){
      x = width - squareSize;
      state = "down";

    }
  }
  if (state === "down") {
    y += speed;
    if (y + squareSize >= height){
      y = height - squareSize;
      state = "left";

    }
  }
  if (state === "left") {
    x -= speed;
    if (x <= 0){
      x = 0;
      state = "up";

    }
  }




}

