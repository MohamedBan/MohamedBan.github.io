class Walker{
  constructor(x, y, speed, color){
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.color = "red";
    this.radius = 2;
  }

  display(){
    noStroke;
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }
  
  move(){
    let choice = random(100);
    if (choice < 25){
      this.y -= this.speed;
    }
    else if (choice < 50){
      this.y += this.speed;
    }
    else if (choice < 75){
      this.x += this.speed;
    }
    else{
      this.x -= this.speed;
    }
  }
}


let michael;
let katherine;
let karar;


function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
  katherine = new Walker(200, 300);
  katherine.color = "blue";
  karar = new Walker(150, 150);
  karar.color = "green";
}

function draw() {
  michael.display();
  katherine.display();
  karar.display();

  michael.move();
  katherine.move();
  karar.move();


}
