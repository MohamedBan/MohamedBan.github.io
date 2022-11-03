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
    if (colorFiLL === "red"){
      grid[yPos][xPos] = 1;
    }
    if (colorFiLL === "orange"){
      grid[yPos][xPos] = 2;
    }
    if (colorFiLL === "yellow"){
      grid[yPos][xPos] = 3;
    }
    if (colorFiLL === "green"){
      grid[yPos][xPos] = 4;
    }
    if (colorFiLL === "blue"){
      grid[yPos][xPos] = 5;
    }
    if (colorFiLL === "purple"){
      grid[yPos][xPos] = 6;
    }
    if (colorFiLL === "brown"){
      grid[yPos][xPos] = 7;
    }
    if (colorFiLL === "black"){
      grid[yPos][xPos] = 8;
    }

    
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
    
  }
}

let colorObject = ["white", "red", "orange", "yellow", "green", "blue","purple", "brown", "black"  ];

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("red");
      }
      else if (grid[y][x] === 2) {
        fill("orange");
      }
      else if (grid[y][x] === 4) {
        fill("yellow");
      }
      else if (grid[y][x] === 5) {
        fill("green");
      }
      else if (grid[y][x] === 6) {
        fill("blue");
      }
      else if (grid[y][x] === 7) {
        fill("purple");
      }
      else if (grid[y][x] === 8) {
        fill("black");
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

