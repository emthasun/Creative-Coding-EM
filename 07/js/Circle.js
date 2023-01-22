class Circle {
  constructor(x, y, radius, ctx) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
    this.color = "rgb(255,255,255)";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.beginPath();
    this.ctx.rect(0,0,this.radius, this.radius)
    // this.ctx.arc(0, 0, this.radius/2, 0, 2 * Math.PI);    
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
}
