console.log('Hello Javascript');

//canvas is the entire screen
function setup() { 
  createCanvas(windowWidth, windowHeight);
}

//resized canvas on smaller screens
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){

  //generate random blue fill colours 
 fill(0, 0, random(80, 256)); 
  //noStroke();
let xPos = random(width); // Generate random number between 0 and width
let yPos = random(height); // Generate random number between 0 and height
let size = random(75, 210); // Generate random number between 75 and 210
 
circle(xPos, yPos, size);


// noLoop();
// save('blue_circles.png');
}