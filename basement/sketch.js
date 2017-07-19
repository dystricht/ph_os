var canvas;
var img;
var dx;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  ghostie = new Object(width/2, height/2, 'assets/ghostie.png');
  dx = -0.03;

}

function draw() {
  background('#e6ded1');

  //ghostie.applyForce(0.05, 0.05);
  ghostie.assess();
  ghostie.behaviors();
  ghostie.update();
  ghostie.display();
  pop();

  dx+=0.001;

}

function preload() {
  console.log("loading image");
  img = loadImage('assets/ghostie.png');
}
