// Drawing Game
// Mohamed Banigesh
// 11/15/2022
//
// Extra for Experts:
// - Used a mouse Dragged Function to help draw faster

//set variables
const ROWS = 20;
const COLS = 20;
let imageGrid;
let copyGrid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let family;
let colorFiLL = "white";
let locked = true;
let colorObject = ["white", "red", "orange", "yellow", "green", "blue","purple", "brown", "black"];

//loads json file
function preload() {
  family = loadJSON("family.json");
}


//seperates the two grids
function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width*0.45/COLS;
  cellHeight = height/ROWS;
  imageGrid = create2dArray(COLS, ROWS);
  copyGrid = create2dArray(COLS, ROWS);
  
}

function draw() {
  background(255);
  displayGrid1(imageGrid);
  displayGrid(family);
}


//buttons to make game easier
function keyPressed() {
  if (key === "e") {
    imageGrid = create2dArray(COLS, ROWS);
  }
  if (key === "f") {
    imageGrid = family;
  }
  if (key === "r") {
    checkWin();
  }

  if (key === "a") {
    autoPlay = !autoPlay;
  }
  
  if (!isNaN(key)) {
    if (Number(key) < 9){
      colorFiLL = colorObject[Number(key)];
    }

  }
  
  

}


//adds color when you drag mouse
function mouseDragged() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);
  if (locked) {
    if (imageGrid[yPos][xPos] === 0) {
      imageGrid[yPos][xPos] = colorObject.indexOf(colorFiLL);
    }
  }
  
}


//adds color where you press
function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (imageGrid[yPos][xPos] === 0) {
    imageGrid[yPos][xPos] = colorObject.indexOf(colorFiLL);
  }


 
  
  else if (imageGrid[yPos][xPos] !== 0) {
    imageGrid[yPos][xPos] = 0;
    
  }
}

//shows first grid
function displayGrid1(imageGrid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      fill(colorObject[imageGrid[y][x]]);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


//shows second grid
function displayGrid(copyGrid){
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      fill(colorObject[copyGrid[y][x]]);
      rect(x*cellWidth + width*0.55, y*cellHeight, cellWidth, cellHeight);

    }
  }
}


//creates Array
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


//checks Win
function checkWin(){
  for(let i = 0; i < ROWS; i++){
    for (let j = 0; j< COLS; j++){
      if (family[i][j] !== imageGrid[i][j]) {
        return; 
      }
    }
  }

  alert("you win"); 
}


