// MouseHunt
// Mohamed Banigesh
// 10/17/2022
//
// Extra for Experts:
// - added sound to my project when you die


//set my variables
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


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese1.png");
  img2 = loadImage("mouse5.png");
  img3 = loadImage("gameOver.jpg");
  img4 = loadImage("rat.jpg");
  img5 = loadImage("Retry.png");
  sound = loadSound("end1.mp3");
  
}



function draw() {
  //when game is not over keep the game going
  if (state === "false") {
    start();
    cheese();
    mouse();
    handlekeys();
  }

  //when game ends change backgorund image and play a song add retry button
  if (state === "true") {
    end();
    sound.playMode("UntilDone");
    sound.play();
    startScreen();
  }
  
  //if rect's hits end game
  hit = collideRectRect(x , y, mouseSize, mouseSize, mouseX, mouseY, cheeseSize, cheeseSize);
  if (hit) {
    state = "true";
  } 
}

//image of a cheese
function cheese(){
  image(img, mouseX, mouseY, cheeseSize, cheeseSize);
  imageMode(CENTER);

}

//image of game over screen
function end() {
  image(img3, windowWidth/2, windowHeight/2, windowWidth, windowHeight); 

}

//image of a mouse
function mouse() {
  image(img2, x, y, 240, 240);

}

//image of a retry button
function retry() {
  image(img5, 800, 800, 160, 160);
}

//image of a kitchen
function start(){
  image(img4, windowWidth/2, windowHeight/2, windowWidth, windowHeight);

}

//moves the mouse image using wasd keys
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

// if your press rectangle it restarts game
function mousePressed() {
  if (state === "true" && mouseInsideRect(660, 960, 720, 870)) {
    state = "false";
  } 
}

//draws my rectangle
function startScreen() {
  if (mouseInsideRect(660, 960, 720, 870)) {
    fill("gray");
  }
  else {
    fill("white");
  }
  rect(660, 720, 300, 150);
  fill("white");
  retry();
 
}

//keeps track if mouse is inside rect
function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}








