var bodies;
var mode;
var seek;


function Object(x, y, img) {
  this.pos = createVector(x, y);
  this.vel = createVector(1, -1);
  this.acc = createVector();
  this.pic = loadImage(img);
  this.maxspeed = 10;
  this.maxforce = 0.3;
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
      console.log("seeking mouse");
      seek = this.seek(createVector(mouseX, mouseY));
      this.applyForce(seek);
    }
    else {

      seek = this.seek(this.vel);
      //console.log(this.vel);


      this.applyForce(seek);
    }
  }

  this.seek = function(target) {
    console.log(target);
    var desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  this.assess = function() {
    var mouseDist = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    //console.log(mouseDist);
    if(mouseDist < 800){
      this.mode = 1;
    } else {
      this.mode = 0;
    }

  }
}
