var mode;
var seek;
var target;


function Object(x, y, img) {
  this.pos = createVector(x, y);
  this.vel = createVector(1, -1);
  this.acc = createVector();
  this.pic = loadImage(img);
  this.maxspeed = 15;
  this.maxforce = 0.8;
  this.mode = 0;


}
