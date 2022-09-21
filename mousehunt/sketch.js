// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
let y =200; 
let dx = 200;
let dy = 200;

let mouseSize = 100;
let mouseSpeed = 5;
let img;
let img2;
let cheeseSize;
let cheeseSpeed;




function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese.png");
  img2 = loadImage("mouse.png");

}

function draw() {
  background("white");
  cheese();
  mouse();
  handlekeys();
}

function cheese(){
  image(img, dx, dy, cheeseSize, cheeseSize);

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

