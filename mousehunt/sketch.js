// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
let y =200;
let cheeseSize = 100;
let mouseSize = 100;
let mouseSpeed = 90;
let img;
let img2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese1.png");
  img2 = loadImage("mouse1.png");

}

function draw() {
  background("white");
  cheese();
  mouse();
  handlekeys();
}




function cheese(){
  image(img, mouseX, mouseY, cheeseSize, cheeseSize);
  imageMode(CENTER);

}
function mouse() {
  image(img2, x, y, mouseSize, mouseSize);

}

function handlekeys() {
  if (keyIsDown(87)) {
    y -= mouseSpeed;
  }
  if (keyIsDown(83)){
    y += mouseSpeed;
  }
  if (keyIsDown(68)) {
    x += mouseSpeed;
  }
  if (keyIsDown(65)) {
    x -= mouseSpeed;
  }
}

function detectCollision(){

  mouseX >= left && mouseX <= right &&
    mouseY >= top && mouseY <= bottom;

}






