class Circle {
  constructor(x, y, radius, ctx) {
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };
    this.radius = radius;
    this.ctx = ctx;
    this.color = "rgb(255,255,255)";
    this.replacement_color = "rgb(255,255,255)";
  }

  draw() {
    const luminosity_percentage = this.detectLuminance();

    if (luminosity_percentage > 0.8 ) {
      this.color = "rgb("+255 * Math.random()+ 100+",255,150)"
    } else if (luminosity_percentage < 0.4) {
      this.color = "rgb("+100 * Math.random()+","+100 * Math.random()+",150)"
    } else if (luminosity_percentage > 0.4 && luminosity_percentage < 0.6){
      this.color = "rgb("+200 * Math.random()+","+200 * Math.random()+",255)"
    } else if (luminosity_percentage > 0.6 && luminosity_percentage < 0.8){
      this.color = "rgb(255,"+255 * Math.random()+ 100+",255)"
    }


    this.ctx.fillStyle = this.color;
    this.ctx.save();
    this.ctx.fill();
    this.ctx.translate(this.x, this.y);
    this.ctx.beginPath();
    this.ctx.rect(0,0, this.radius/1.5 * luminosity_percentage, this.radius/1.5 * luminosity_percentage)

    this.ctx.closePath();
    this.ctx.restore();
  }

  detectLuminance() {
    const rgb = this.color.replace(/[^\d,]/g, "").split(",");
    const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    return luminance / 255;
  }
}
