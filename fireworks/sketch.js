// FireWorks


class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.diamater = 4;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
    this.color = (this.r, this.g, this.b, this.aplha);

  }

  update(){
    this.x += this.dx;
    this.y += this.y;
    this.aplha --;
    this.color = (this.r, this.g, this.b, this.aplha);

  
  }

  display(){
    fill(this.color);
    circle(this.x, this.y, this.diamater);
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let i =0; i< theFireworks.length; i++){
    theFireworks[i].update();
    theFireworks[i].display();
  }
}


function mousePressed(){
  for (let i =0; i< 100; i++){
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}