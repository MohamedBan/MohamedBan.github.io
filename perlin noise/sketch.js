// Project Title

let allCircles = [];

function keyPressed() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000),
  };
  allCircles.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background("black");
  for (let i=0; i < allCircles.length; i++){
    fill("white");
    allCircles[i].x = noise(allCicles[i].time) * width;
    allCircles[i].y = noise(allCircles[i].time + 5) * height;

    allCicles[i].time += 0.01;
    circle(allCircles[i].x, allCircles[i].y, allCircles[i]);
    
  }

}
