var bodies;

function Object(x, y, img) {
  this.pic = loadImage(img);
  this.x = x;
  this.y = y;

  this.display = function() {
    //draw image with center at this.x, this.y
    image(this.pic, this.x - this.pic.width/2, this.y - this.pic.height/2);

    }

  this.meander = function() {

    this.y -= 4;
  }

  this.propel = function() {

  }

  this.setPos = function(x, y) {

    this.x = x;
    this.y = y;
  }
}
