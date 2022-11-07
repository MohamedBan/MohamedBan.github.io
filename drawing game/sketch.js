const ROWS = 20;
const COLS = 20;
let grid;
let grid2;
let cellWidth;
let cellHeight;
let autoPlay = false;
let family;
let colorFiLL = "black";

function preload() {
  family = loadJSON("family.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/2/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  grid2 = create2dArray(COLS, ROWS);
  

}

function draw() {
  background(220);
  displayGrid1(grid);
  displayGrid(grid2);
}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }

  if (key === "a") {
    autoPlay = !autoPlay;
  }
  if (key === "f") {
    grid = family;
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
  else if (grid[yPos][xPos] !== 0) {
    grid[yPos][xPos] = 0;
    
  }
}

let colorObject = ["white", "red", "orange", "yellow", "green", "blue","purple", "brown", "black"];

function displayGrid1(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      fill(colorObject[grid[y][x]]);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function displayGrid(){
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      rect(x*cellWidth +width/2, y*cellHeight, cellWidth, cellHeight);

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
