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



let walkerArray= [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnWalker();
}


function draw() {
  for(let i =0; i< walkerArray.length; i++){
    walkerArray[i].display();
    walkerArray[i].move();
    
  }
  
  
  
}

function spawnWalker(){
  let michael = new Walker(random(width), random(height));
  let someColor = color(random(255), random(255), random(255));
  michael.color = someColor;
  walkerArray.push(michael);

  
  


}
function keyPressed(){
  spawnWalker();
}