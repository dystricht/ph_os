var r = 300;

function MenuSystem(){
  this.pos = createVector(width/2 , height/2);
  this.vel = createVector(0, 0);
  this.acc = createVector();

  this.maxspeed = 2;
  this.maxforce = 0.1;

  this.display = function() {

    push();
    translate(this.pos.x, this.pos.y);

    ellipse(0, 0, r);
    pop();
  }

  this.getCoords = function(){

    return this.pos;
  }

  this.getDiam = function(){

    return r;
  }

}
