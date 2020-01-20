
let a;

let Ball1Y;
let BallSpeed = 10;

const BallSize = {
  w: 20,
  h: 20
};

class Ball {
  constructor({
    x,
    y,
    w,
    h,
    speed
  }) {
    this.x = x || 0;
    this.y = y || 0;
    this.h = h || 10;
    this.w = w || 10;
    this.speed = speed || 10;
  }

  update(dSpeed) {
    this.speed -= dSpeed;
    this.y = this.y + dSpeed;

    if (this.y > height) {
      this.y = 0;
    }
  }

  draw() {
    ellipse(
      this.x,
      this.y,
      this.w
    );
  }
}

let Ball1 = new Ball({
  x: 10,
  y: 10
});

function setup() {
  createCanvas(720, 400);
  stroke(255);
  a = height / 2;
  Ball1Y = BallSize.h;
}

function draw() {
  background(51);
  Ball1.draw();
  Ball1.update(2);
  ellipse(
    (width - BallSize.w)/2,
    Ball1Y,
    BallSize.w
  );
  if (BallSpeed > 0) {
    BallSpeed -= 0.15;
  }
  Ball1Y += BallSpeed;


  if (Ball1Y > height - BallSize.h) {
    Ball1Y = BallSize.h;
    BallSpeed = 10;
  }
}
