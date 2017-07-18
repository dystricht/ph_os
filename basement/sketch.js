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

  ghostie = new Object(0, 0, 'assets/ghostie.png');
  dx = -0.03;

}

function draw() {
  background('#e6ded1');


  push();
  translate(width/2, height/2);

  //rotate(PI/3.0);
  rotate(PI*dx);

  scale(0.25);


  ghostie.meander();
  ghostie.display();
  pop();



  //ellipse(0, 0, 200, 200);

  dx+=0.001;


}

function preload() {
  console.log("loading image");
  img = loadImage('assets/ghostie.png');
}
