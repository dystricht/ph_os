var canvas;
var img;
var menu;
var ghostie;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  menu = new MenuSystem();
  ghostie = new Ghostie(200, 200, 'assets/ghostie.png');

  ghostie.addOrbit(menu);
}

function draw() {
  background('#e6ded1');
  this.menu.display();

  this.updateGhostie();
  //ghostie.applyForce(0.05, 0.05);
  //ghostie.addOrbit(menu.pos);

}

function preload() {
  console.log("loading image");
  img = loadImage('assets/ghostie.png');
}

function updateGhostie(){
  ghostie.assess();
  //ghost.findCoords(menu.getCoords);

  ghostie.behaviors();
  ghostie.update();
  ghostie.display();
}
