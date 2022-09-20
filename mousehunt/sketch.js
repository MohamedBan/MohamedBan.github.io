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
let cheeseSize = 100;
let cheeseSpeed = 5;
let mouseSize = 100;
let mouseSpeed = 5;

let img;
let img1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese.png");
  img1 = loadImage("mouse.png");

}

function draw() {
  background("white");
  cheese();
  handlekeys();
}

function mouse(){
  image(img1, dx, dy, mouseSize, mouseSize);
}


function cheese() {
  image(img, x, y, cheeseSize, cheeseSize);
}

function handlekeys() {
  if (keyIsDown(87)) {
    y -= cheeseSpeed;
  }
  if (keyIsDown(83)){
    y += cheeseSpeed;
  }
  if (keyIsDown(68)) {
    x += cheeseSpeed;
  }
  if (keyIsDown(65)) {
    x -= cheeseSpeed;
  }
}

function handleMouse() {
  ()
}
