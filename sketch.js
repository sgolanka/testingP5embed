//declare variables for 2 rectangles and 2 circles

let rect1X, rect2X, rect1Y, rect2Y, size1, size2;
let circle1X, circle2X, circle1Y, circle2Y, diam1, diam2;


//declare r,g,b variables for each shape

let rect1R, rect1G, rect1B, rect2R, rect2G, rect2B;
let circle1R, circle1G, circle1B, circle2R, circle2G, circle2B;



function setup() {
  createCanvas(600, 600);  //change the canvas size
  
  //initialize variables--use built in width/height variables to set shape variables
  rect1X = width/6;
  rect1Y = height/6;
  rect2X = width * 5/6;
  rect2Y = height * 5/6;
  size1 = width/20;
  size2 = width/30;
  
  circle1X = width * 5/6;
  circle1Y = height/6;
  circle2X = width/6;
  circle2Y = height * 5/6;
  diam1 = width/40;
  diam2 = width/60;
  
  rect1R = 0;
  rect1G = 255;
  rect1B = 0;
  
  rect2R = 255;
  rect2G = 0;
  rect2B = 255;
  
  circle1R = 0;
  circle1G = 255;
  circle1B = 255;
  
  circle2R = 255;
  circle2G = 255;
  circle2B = 0;
  
  background(25, 125, 225);
  
}

function draw() {
 // background(220); //move this to setup and change the value
  
  //draw the shapes (with the appropriate colors) using the variables

  fill(rect1R, rect1G, rect1B);
  rect(rect1X, rect1Y, size1, size1);
  
  fill(rect2R, rect2G, rect2B);
  rect(rect2X, rect2Y, size2, size2);
  
  fill(circle1R, circle1G, circle1B);
  ellipse(circle1X, circle1Y, diam1, diam1);
  
  fill(circle2R, circle2G, circle2B);
  ellipse(circle2X, circle2Y, diam2, diam2);
  
  //change the values for x and y for 2 shapes, and the size of the other 2 shapes
  
  rect1X += 1;
  rect1Y += 1;
  
  circle1X -=1;
  circle1Y +=1;
  
  size2 +=1;
  diam2 +=1;
  
  
  
}