// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
<<<<<<< HEAD
let y =200;
let dx = 200;
let dy = 200; 
let cheeseSize = 100;
let cheeseSpeed = 5;
=======
let y =200; 

>>>>>>> 67e48cb68803312a8e915eba2695ffe29a98f01f
let mouseSize = 100;
let mouseSpeed = 5;
let img;
<<<<<<< HEAD
let img1;
=======
let img2;
let cheeseSize = 100;




>>>>>>> 67e48cb68803312a8e915eba2695ffe29a98f01f

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("cheese.png");
<<<<<<< HEAD
  img1 = loadImage("mouse.png");
=======
  img2 = loadImage("mouse.png");
>>>>>>> 67e48cb68803312a8e915eba2695ffe29a98f01f

}

function draw() {
  background("white");
  cheese();
  mouse();
  handlekeys();
}

<<<<<<< HEAD
function mouse(){
  image(img1, dx, dy, mouseSize, mouseSize);
}


function cheese() {
  image(img, x, y, cheeseSize, cheeseSize);
=======
function cheese(){
  image(img, mouseX, mouseY, cheeseSize, cheeseSize);
  imageMode(CENTER);

}
function mouse() {
  image(img2, x, y, mouseSize, mouseSize);
>>>>>>> 67e48cb68803312a8e915eba2695ffe29a98f01f
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
<<<<<<< HEAD
  ()
}
=======


}
>>>>>>> 67e48cb68803312a8e915eba2695ffe29a98f01f
