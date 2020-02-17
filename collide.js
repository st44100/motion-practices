const CANVAS_W = 720;
const CANVAS_H = 320;


class Ball {
  constructor({
    x,
    y,
    w,
    h,
    velocity,
  }) {
    // use p5.Vector
    this.position = createVector(x, y);
    this.h = h || 10;
    this.w = w || 10;

    // store direction as vector
    this.vector = createVector(0.2, 1);
    this.velocity = velocity;
  }

  update() {
    // const y = this.position.y;

    // if (this.velocity < 0) {
    //   this.velocity = 0;
    // }
    // y + this.velocity * this.direction;

    // this.position.set(
    //   this.position.x,
    //   y + this.velocity * this.direction
    // );

    const delta = this.vector.add(this.vector.mult(this.velocity / 20));
    console.log(this.velocity / 20);

    this.position.add(delta);

  }

  draw() {
    ellipse(
      this.position.x,
      this.position.y,
      this.w
    );
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  toggleDirection() {
    this.vector.set(this.vector.mult(-1));
  }

  getPos() {
    return {
      x: this.position.x,
      y: this.position.y,
      w: this.w,
      h: this.h
    }
  }
}

let Ball1 = null;
let Ball2 = null;
let Ball3 = null;

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
  stroke(255);
  Ball1 = new Ball({
    x: (CANVAS_W + 20)/2,
    y: 20,
    h: 20,
    w: 20,
    velocity: 10
  });

  Ball2 = new Ball({
    x: (CANVAS_W + 20)/2,
    y: 200,
    h: 20,
    w: 20,
    velocity: 0
  });
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
    Ball1.toggleDirection();
    Ball1.setVelocity(10);
    Ball2.setVelocity(10);
  }
  Ball1.update();
  Ball2.update();

  Ball1.draw();
  Ball2.draw();
}
