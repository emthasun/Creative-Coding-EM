class Tile {
  constructor(x, y, size, color, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = false;
    this.angle = Math.round(Math.random()) * (Math.PI / 2);
    this.ctx = ctx;
    this.bgColor = color;
    this.lineColor = "white"
    // this.r = Math.round(Math.random() * 255);
    // this.g = Math.round(Math.random() * 255);
    // this.b = Math.round(Math.random() * 255);
  }

  updateAngle() {
    this.angle += Math.PI / 2;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    // if (this.rotation) {
    //   this.angle += 1;
    // }
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = this.bgColor;
    this.ctx.beginPath();
    this.ctx.rect(0 - this.size / 2,
     0 - this.size / 2,
      this.size,
       this.size);
    this.ctx.fill();
    // this.ctx.stroke();
    this.ctx.closePath();
    //
    // this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5;

    //beginning of flower shape
    this.ctx.beginPath();

    // this.ctx.beginPath();
    // this.ctx.rect(
    //   0 - this.size / 2,
    //   0 - this.size / 2,
    //   (this.size * 3) / 8 + 1,
    //   (this.size * 3) / 8 + 1,
    // );
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    // this.ctx.stroke();
    // this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 - this.size / 2,
      0 - this.size / 8,
      this.size / 8,
      0,
      Math.PI / 2,
      false
    );
    // this.ctx.lineTo(0 - this.size / 2, 0 - this.size / 8)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 - this.size / 4,
      0 - this.size / 8,
      this.size / 8,
      Math.PI / 2,
      Math.PI,
      false
    );
    // this.ctx.lineTo(0 - this.size / 2 + this.size / 4, 0 - this.size / 8)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 - this.size / 4,
      0 - this.size / 4,
      this.size / 4,
      0,
      Math.PI / 2,
      false
    );
    // this.ctx.lineTo(0 - this.size / 4, 0 - this.size / 4)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 - this.size / 8,
      0 - this.size / 4,
      this.size / 8,
      0,
      (Math.PI * 3) / 2,
      true
    );
    // this.ctx.lineTo(0 - this.size / 8, 0 - this.size / 8)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    // this.ctx.lineTo(0 - this.size / 2, 0 - this.size / 2);
    this.ctx.arc(
      0 - this.size / 8,
      0 - this.size / 2,
      this.size / 8,
      0,
      Math.PI / 2,
      false
    );
    // this.ctx.lineTo(0 - this.size / 8, 0 - this.size / 2)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    ctx.fillStyle = "white"
    //end of white flower shape
    this.ctx.closePath();

   

    //
    //beginning of 2ndwhite flower shape
    this.ctx.beginPath();

    // this.ctx.beginPath();
    // this.ctx.rect(
    //   0 + this.size / 8,
    //   0 + this.size / 8,
    //   (this.size * 3) / 8 ,
    //   (this.size * 3) / 8 ,
    // );
    // this.ctx.fillStyle = "white"
    // this.ctx.stroke();
    // this.ctx.fill();
    // this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 + this.size / 2,
      0 + this.size / 8,
      this.size / 8,
      Math.PI,
      Math.PI/2,
      false
    );
    // this.ctx.lineTo(0 + this.size / 2, 0 + this.size / 8)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 + this.size / 4,
      0 + this.size / 8,
      this.size / 8,
      0,
      (Math.PI*3)/2,
      true
    );
    // this.ctx.lineTo(0 + this.size / 2 - this.size / 4, 0 + this.size / 8)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 + this.size / 4,
      0 + this.size / 4,
      this.size / 4,
      Math.PI,
      (Math.PI*3)/2,
      false
    );
    // this.ctx.lineTo(0 + this.size / 4, 0 + this.size / 4)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 + this.size / 8,
      0 + this.size / 4,
      this.size / 8,
      Math.PI / 2,
      Math.PI,
      false
    );
    // this.ctx.lineTo(0 + this.size / 8, 0 + this.size / 8)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      0 + this.size / 8,
      0 + this.size / 2,
      this.size / 8,
      (Math.PI*3)/ 2,
      Math.PI,
      true
    );
    // this.ctx.lineTo(0 + this.size / 8, 0 + this.size / 2)
    // this.ctx.fillStyle = "white"
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    //end of 2nd white flower shape
    this.ctx.closePath();

    
    this.ctx.closePath();
    this.ctx.restore();
  }
}