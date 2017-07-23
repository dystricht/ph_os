var mode;
var seek;
var target;
var targetPos;


function Ghostie(x, y, img) {
  this.pos = createVector(x, y);
  this.vel = createVector(1, -1);
  this.acc = createVector();
  this.pic = loadImage(img);
  this.maxspeed = 15;
  this.maxforce = 0.8;
  this.mode = 0;

  this.display = function() {
    //draw image with center at this.x, this.y
    push();
    translate(this.pos.x, this.pos.y);
    scale(0.0625);
    rotate(this.vel.heading() + PI/2);
    //center image on pos.x and pos.y
    image(this.pic, -this.pic.width/2, -this.pic.height/2);
    pop();
    }

  this.meander = function() {

    this.pos.y -= 4;
  }

  this.propel = function() {

  }

  this.setPos = function(x, y) {

    this.pos.x = x;
    this.pos.y = y;
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.behaviors = function(){

    if(this.mode == 1){
      //console.log("seeking mouse");
      seek = this.seek(createVector(mouseX, mouseY));
      this.applyForce(seek);
    }
    else {
      //console.log("going into orbit");
      this.orbit(this.target);
    }

    //map
  }

  this.seek = function(target) {
    //console.log(target);
    var desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  this.assess = function() {
    var mouseDist = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    //console.log(mouseDist);
    // if(mouseDist < 800){
    //   this.mode = 1;
    // } else {
    //   this.mode = 0;
    // }

    this.mode = 0;
  }

  this.addOrbit = function(target) {

    this.target = target;
    //console.log("target: " + target.getCoords());
  }

  this.orbit = function(orbitTarget) {
    distFromTarget = dist(this.pos.x, this.pos.y, orbitTarget.pos.x, orbitTarget.pos.y);
    //console.log("dist from target" + distFromTarget + " diam: " + orbitTarget.getDiam());
    line(this.pos.x, this.pos.y, orbitTarget.pos.x, orbitTarget.pos.y);

    if(distFromTarget < orbitTarget.getDiam() + 200){
      //console.log("should be in orbit");

    }
    else {
      seek = this.seek(orbitTarget.pos);
      this.applyForce(seek);
      //console.log("seeking orbit");
    }
  }

  this.findCoords = function(targetPos){

    this.targetPos = targetPos;
  }
}
