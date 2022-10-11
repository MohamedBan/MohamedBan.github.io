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
let mouseSpeed = 10;
let img;
let img2;
let hit = false;
let img3;
let state = "false";



function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese1.png");
  img2 = loadImage("mouse1.png");
  img3 = loadImage("gameOver.jpg");

}



function draw() {
  if (state === "false") {
    background("white");
  }
  if (state === "true") {
    end();
  }
  mouse();
  
  
  
  
  
  hit = collideRectRect(x , y, mouseSize, mouseSize, mouseX, mouseY, cheeseSize, cheeseSize);

  if (hit) {
    img.remove();
    state = "true";

  }

  cheese();
  mouse();
  handlekeys();
  

}




function cheese(){
  image(img, mouseX, mouseY, cheeseSize, cheeseSize);
  imageMode(CENTER);

}
function end() {
  image(img3, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  

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








