class Circle {
  constructor(x, y, ctx, radius, posX) {
    this.position = { x: x, y: y };
    this.posX = posX;
    this.originPosX = posX;
    this.targetPosX = posX;
    this.targetRadius = radius;
    this.originRaius = radius;
    this.hue = Math.round(Math.random() * 360);
    this.originHue = this.hue;
    this.targetHue = this.hue;
    this.radius = radius;
    this.ctx = ctx;

    this.speed = 0.01;

    this.t = 0;
  }

  draw() {
 
    if (Math.abs(this.targetPosX - this.posX) > 0.01) this.scale();
    else this.posX = this.targetPosX; 

    if (Math.abs(this.targetRadius - this.radius) > 0.1) this.scale();
    else this.radius = this.targetRadius;


    this.ctx.fillStyle = `hsl(${this.hue},50%,50%)`;


    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.beginPath();
    this.ctx.rect(0-this.radius, 0-this.radius, this.radius*2, this.radius*2);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(-this.posX, 0)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();



    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(this.posX, 0)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();


    //Eyes
    this.ctx.fillStyle = `white`;
    this.strokeStyle = 'black';
    this.ctx.lineWidth = 3

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(-this.posX, 0)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius / 2, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(this.posX, 0)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius / 2, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    //BlackEyes

    this.ctx.fillStyle = `black`;

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(-this.posX, 0)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius / 2.5, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(this.posX, 0)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius / 2.5, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    //Reflectance
    this.ctx.fillStyle = `white`;

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(-this.posX, -50)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius / 6, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.translate(this.posX, -50)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius / 6, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

  }


  resetAndGo() {
    this.t = 0;
    this.originPosX = this.posX;
    if (this.posX == 300) {
      this.targetPosX = 0

    } else {
      this.targetPosX = 300;
    }
    this.originHue = this.hue;
    this.targetHue = this.hue + 50;
  }

  resetAndScale() {
    this.t = 0;
    this.originRadius = this.radius;
    if (this.radius == 300) {
      this.targetRadius = 200

    } else {
      this.targetRadius = 300;
    }
  }

  scale() {

    this.t += this.speed;
    const ease = Easing.backInOut(this.t);
    const growth = Easing.backInOut(this.t);


    // this.position.x = this.origin.x + (this.target.x - this.origin.x) * ease;
    // this.position.y = this.origin.y + (this.target.y - this.origin.y) * ease;
    this.posX = Math.abs(
      this.originPosX + (this.targetPosX - this.originPosX) * ease
    );
    this.radius = Math.abs(
      this.originRadius + (this.targetRadius - this.originRadius) * growth
    );
    this.hue = this.originHue + (this.targetHue - this.originHue) * ease;
  }


  distance(target, goal) {
    return Math.sqrt(
      Math.pow(target.x - goal.x, 2) + Math.pow(target.y - goal.y, 2)
    );
  }
}
