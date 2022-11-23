class Bullet{
  constructor(bulletArr, character, img){
    this.character = character;
    this.x = this.character.x + this.character.width;
    this.y = this.character.y + this.character.height/2;
    this.img = img;
    this.bulletArr = bulletArr;
  }

  display(){
    image(this.img, this.x, this.y, this.imgwidth, this.img.height);
  }

  update(){

    this.x +=5;

    if (this.x > windowWidth){
      this.bulletArr.splice(this.bulletArr.indexOf(this), 1);
    }
  }
}


let bulletArr = [];
let rectangle = {
  x: 100,
  y: 100,
  width: 100,
  height: 100

};

let bulletImg;


function preload(){
  bulletImg = loadImage("bullet.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

  for (let i = 0; i < bulletArr.length; i++){
    bulletArr[i].display();
    bulletArr[i].update();
  }

  inputHandler();
}

function keyPressed(){
  if (key === " "){
    bulletArr.push(new Bullet(bulletArr, rectangle, bulletImg));
  }
}

function inputHandler(){
  if (keyIsDown(87)){
    rectangle.y -= 5;
  }
  if (keyIsDown(83)){
    rectangle.y += 5;
  }
  if (keyIsDown(65)){
    rectangle.x -= 5;
  }
  if (keyIsDown(68)){
    rectangle.x += 5;
  }
}
