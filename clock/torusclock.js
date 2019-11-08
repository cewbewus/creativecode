var lastSecond;
var millRollover;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  angleMode(DEGREES);

}

function draw() {
  background(000);
  
  if (second() != lastSecond) {
    //rollover the millisecond counter    
    millRollover = millis();
  }

  // what is the current second?
  lastSecond = second();

  // subtract the last millisecond timestamp from the running millisecond total
  let actualMillisecond = floor(millis() - millRollover);

  //chaos rotations?
  //rotateY(millis() / 100)
  //rotateX(millis() / 100)
  //rotateZ(millis() / 100)

  //base ambient light level
  ambientLight(40);
  //pointed light rotates with time of day
  pointLight(130, 100, 200, -500, (-hour() * 15), -500);

  
  //multiplication by 15 converts 24-interval hour to degrees
  //hour torus
  push()
  //rotateX(-hour());
  rotateY((-hour() * 15));
  //rotateZ(-hour());
  specularMaterial(250); //emissiveMaterial(130, 230, 0);
  torus(525, 60);
  pop()

  //multiplication by 6 converts 60-interval units to degrees
  //minute torus
  push()
  //rotateX(-minute());
  rotateY(-minute() * 6);
  //rotateZ(-minute());
  specularMaterial(250);
  torus(375, 60);
  pop()

  //second torus  
  push()
  //rotateX(-second());
  rotateY(-second() * 6);
  //rotateZ(-second());
  specularMaterial(250);
  torus(225, 60);
  pop()

  //ms torus
  push()
  //rotateX(-actualMillisecond);
  rotateY(-actualMillisecond);
  //rotateZ(-actualMillisecond);
  specularMaterial(250);
  torus(75, 60);
  pop()
}