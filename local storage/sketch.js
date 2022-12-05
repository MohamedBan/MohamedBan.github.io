let numberofClicks = 0;
let highestEver = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  if(getItem("highscore") !== null){
    highestEver = getItem("highscore");
  }

}

function draw() {
  background(220);
  fill("black");
  textSize(100);
  text(numberofClicks, width/2, height/2);

  fill("red");
  text(highestEver, 50, height - 100);
}


function mousePressed(){
  numberofClicks++;
}