//create a design of concentric circles using a loop
//the center of the circles must be the center of the canvas
//the smallest circle should have a diameter of 10
//the largest circle should touch the edge of the canvas
//the circles must be darker in the middle, fading to white at the edge
//
//you must make this twice--once with a while loop, once with a for loop (this can be 2 separate programs, or one program with one of the loops commented out)
//use variables for the circles - location, size, and color
//use one variable that you declare (diameter); other variables are built-in

let diameter; //declare diameter variable

function setup() {
  createCanvas(400, 400);
  background(255);
  diameter = width; //set diameter to the size of the canvas
}

function draw() {
  //while loop version

  while (diameter >= 10) {
    //keep drawing circles until diameter is 10
    fill(diameter); //smaller diameter is darker color
    ellipse(width / 2, height / 2, diameter, diameter);
    diameter -= 20; //reduce diameter for next circle
  }

  //for loop version

  // for(diam = width; diam >= 10; diam -=20){
  //   fill(diam);
  //   ellipse(width/2, height/2, diam, diam);
  // }
}
