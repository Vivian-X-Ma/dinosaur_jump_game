class Hero {
  constructor() {
    this.r = 55;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }

  show() {
    rect(this.x, this.y, this.r, this.r);
  }
  
  jump() {
    if (this.y == height - this.r) {
      this.vy = -30;
    }
  }
  
  move() {
    this.y += this.vy; 
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r); 
  }

  hits(obstacle) {
    return collideRectRect(this.x, this.y, this.r, this.r, obstacle.x, obstacle.y, obstacle.r, obstacle.r);   
  }
}