const ROWS = 20;
const COLS = 20;
let imageGrid;
let copyGrid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let family;
let colorFiLL = "black";

let colorObject = ["white", "red", "orange", "yellow", "green", "blue","purple", "brown", "black"];


function preload() {
  family = loadJSON("family.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width*0.45/COLS;
  cellHeight = height/ROWS;
  imageGrid = create2dArray(COLS, ROWS);
  copyGrid = create2dArray(COLS, ROWS);
  

}

function draw() {
  background(255);
  displayGrid1(family);
  displayGrid(copyGrid);
}

function keyPressed() {
  if (key === "e") {
    copyGrid = create2dArray(COLS, ROWS);
  }

  if (key === "a") {
    autoPlay = !autoPlay;
  }
  if (key === "f") {
    imageGrid = family;
  }
  if (!isNaN(key)) {
    colorFiLL = colorObject[Number(key)];
  }
  
  

}



function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (copyGrid[yPos][xPos] === 0) {
    copyGrid[yPos][xPos] = colorObject.indexOf(colorFiLL);
  }


 
  
  else if (copyGrid[yPos][xPos] !== 0) {
    copyGrid[yPos][xPos] = 0;
    
  }
}


function displayGrid1(imageGrid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      fill(colorObject[imageGrid[y][x]]);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function displayGrid(copyGrid){
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      fill(colorObject[copyGrid[y][x]]);
      rect(x*cellWidth + width*0.55, y*cellHeight, cellWidth, cellHeight);

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
