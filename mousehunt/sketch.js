// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 1500;
let y =200;
let cheeseSize = 100;
let mouseSize = 100;
let mouseSpeed = 20;
let img;
let img2;
let hit = false;
let img3;
let state = "false";
let sound;
let img4;



function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese1.png");
  img2 = loadImage("mouse5.png");
  img3 = loadImage("gameOver.jpg");
  img4 = loadImage("rat.jpg");
  sound = loadSound("voice.mp3");
  
}



function draw() {
  if (state === "false") {
    start();
    cheese();
    mouse();
    handlekeys();
  }
  if (state === "true") {
    end();
    sound.play();
    
    startScreen();
  }
  
  hit = collideRectRect(x , y, mouseSize, mouseSize, mouseX, mouseY, cheeseSize, cheeseSize);

  if (hit) {
    
    state = "true";
    

  } 

}


function cheese(){
  image(img, mouseX, mouseY, cheeseSize, cheeseSize);
  imageMode(CENTER);

}
function end() {
  image(img3, windowWidth/2, windowHeight/2, windowWidth, windowHeight); 

}

function mouse() {
  image(img2, x, y, 240, 240);

}


function start(){
  image(img4, windowWidth/2, windowHeight/2, windowWidth, windowHeight);

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

function mousePressed() {
  if (state === "true" && mouseInsideRect(700, 1000, 400, 550)) {
    state = "false";
  } 
}

function startScreen() {
  if (mouseInsideRect(700, 1000, 400, 550)) {
    fill("gray");
  }
  else {
    fill("Red");
  }
  rect(700, 400, 300, 150);
  fill("white");
  textSize(50);
  text("Retry", 775, 490);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}








