const CANVAS_W = 720;
const CANVAS_H = 320;
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
    this.speed = speed || 0;
  }

  update(dSpeed) {
    this.speed -= dSpeed;
    if (this.speed < 0) {
      this.speed = 0;
    }
    this.y = this.y + this.speed;

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

  setSpeed(speed) {
    this.speed = speed;
  }

  getPos() {
    return {
      x: this.x,
      y: this.y,
      w: this.w,
      h: this.h
    }
  }
}

let Ball1 = new Ball({
  x: (CANVAS_W + 20)/2,
  y: 20,
  h: 20,
  w: 20,
  speed: 10
});

let Ball2 = new Ball({
  x: (CANVAS_W + 20)/2,
  y: 200,
  h: 20,
  w: 20,
  speed: 0
});

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
  stroke(255);
}

function draw() {
  background(51);

  const posBall1 = Ball1.getPos();
  const posBall2 = Ball2.getPos();

  if (
    posBall1.x >= posBall2.x &&
    (posBall1.x + posBall1.w) <= (posBall2.x + posBall2.w) &&
    posBall1.y + posBall1.h >= posBall2.y
  ) {
    Ball2.setSpeed(5);
    Ball1.setSpeed(0);
  } else {
    Ball2.update(0);
  }
  Ball1.update(0.2);
  Ball2.update(0.2);

  Ball1.draw();
  Ball2.draw();
}
