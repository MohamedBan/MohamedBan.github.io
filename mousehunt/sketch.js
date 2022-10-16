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
let img5;
let time = 2000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese1.png");
  img2 = loadImage("mouse5.png");
  img3 = loadImage("gameOver.jpg");
  img4 = loadImage("rat.jpg");
  img5 = loadImage("Retry.png");
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
    time += 2000
    sound.playMode("UntilDone");
    sound.play();

    if (millis() > 10000){
      sound.stop();
    }

    
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
function retry() {
  image(img5, 800, 870, 160, 160);
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
  if (state === "true" && mouseInsideRect(660, 960, 780, 930)) {
    state = "false";
  } 
}

function startScreen() {
  if (mouseInsideRect(660, 960, 780, 930)) {
    fill("gray");
  }
  else {
    fill("white");
  }
  rect(660, 780, 300, 150);
  fill("white");
  retry();
 
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}








