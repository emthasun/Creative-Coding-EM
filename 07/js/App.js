class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.img_file = "./asset/poster.png";
    this.pixelAm = 10;
    this.speed = 0.05;
    this.plusMinus = 1;
    this.warpVar = 1;
    // this.t = 0;
    this.setup();
  }

  setup() {

    this.img = new Image();
    this.img.onload = () => {
      this.detectPixels();
    };
    this.img.src = this.img_file;

  }

  detectPixels() {
    this.ctx.drawImage(this.img, 0, 0);
    this.imgData = this.ctx.getImageData(0, 0, this.img.width, this.img.height);
    this.pixels = this.imgData.data;
    this.step = Math.floor(this.img.width / 100);
    this.rgb = [];
    for (let y = 0; y < this.img.height*this.pixelRatio; y += this.step) {
      for (let x = 0; x < this.img.width*this.pixelRatio; x += this.step) {
        let index = (y * this.img.width*0.5 + x) * 4;
        this.rgb.push({
          r: this.pixels[index],
          g: this.pixels[index + 1],
          b: this.pixels[index + 2],
          a: this.pixels[index + 3],
        });
      }
    }

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // this.t += this.speed;
    // const ease = Easing.elasticIn(this.t);

    this.grid = [];
    let recRadius = this.pixelAm;
    let recSpace = recRadius;
    const grid_width = 1000 * this.pixelRatio;
    let amountRec = grid_width/recRadius;

    this.pixelAm = this.pixelAm + 1 * this.plusMinus *this.speed
    this.warpVar = this.warpVar + 0.003 * this.plusMinus * this.speed
    

        if (this.pixelAm < 11) {
      this.plusMinus = 1;
    } else if (this.pixelAm > 35) {
      this.plusMinus = -1;
    }
  



    console.log(this.pixelAm)


    const top_left = {
      x: (window.innerWidth / 2) * this.pixelRatio - grid_width / 2,
      y: (window.innerHeight / 2) * this.pixelRatio - grid_width / 2,
    };

    for (let j = 0; j < amountRec; j++) {
      for (let i = 0; i < amountRec; i++) {
        let dspx = 0.05 * this.warpVar;
        let dspy = 0.05 * this.warpVar;
        let speed = 2000;
        let fct = 1 * this.warpVar;
        // let waveX = 1;
        // let waveY = 1;
        let waveX = (Math.round(Math.sin(speed + (i * j) * dspx) * fct));
        let waveY = (Math.round(Math.sin(speed + (i * j) * dspy) * fct));
        this.grid.push(
          new Circle((top_left.x + i * recSpace)*waveX, (top_left.y + j * recSpace)*waveY, recRadius, this.ctx)
        );
      }
    }

    this.grid.forEach((circle, index) => {
      const color = this.rgb[index];
      circle.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
      circle.draw();
    });


    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  new App();
};
