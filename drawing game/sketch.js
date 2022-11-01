const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let gosperGun;
let colorFiLL = "black";

function preload() {
  gosperGun = loadJSON("gosper.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }

  if (key === "a") {
    autoPlay = !autoPlay;
  }
  if (key === "g") {
    grid = gosperGun;
  }
  if (key === "1") {
    colorFiLL = "red";
  }
  if (key === "2") {
    colorFiLL = "orange";
  }
  if (key === "3") {
    colorFiLL = "yellow";
  }
  if (key === "4") {
    colorFiLL = "green";
  }
  if (key === "5") {
    colorFiLL = "blue";
  }
  if (key === "6") {
    colorFiLL = "purple";
  }
  if (key === "7") {
    colorFiLL = "brown";
  }
  if (key === "8") {
    colorFiLL = "black";
  }
  
  

}



function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;

    
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill(colorFiLL);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

