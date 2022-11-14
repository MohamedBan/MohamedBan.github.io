class Dawg {
  constructor(name){
    this.name = name;
    this.loyalty = 0;

  }

  betrayal() {
    console.log("snake moves from " + this.name);
  }
}

let myDawg = new Dawg("Abde");
let yourDawg = new Dawg("Karar");


function setup() {
  createCanvas(windowWidth, windowHeight);
  myDawg.betrayal();
  yourDawg.betrayal();
}

function draw() {
  background(220);
}
