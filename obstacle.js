class Obstacle {
 constructor() {
   this.r = 45
   this.x = width
   this.y = height - this.r;
 }
  
  move() {
    this.x -= 12;
  }
  
  show() {
    rect(this.x, this.y, this.r, this. r);
  }
  
}