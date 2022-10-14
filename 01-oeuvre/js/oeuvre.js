// constante globale
// const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let ctx;



function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.style.backgroundColor = 'white'
  monCanvas.width = 600;
  monCanvas.height = 700;

  ctx = monCanvas.getContext("2d");
  // lancement de la fonction de dessin
  draw();

  clearInterval(draw());
  setInterval(draw(),3000);
  clearInterval(draw());
}

function draw() {

  grid();
  function grid() {
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';

  ctx.fillRect(0,0,300,100);
  ctx.strokeRect(0,0,300,100);

  ctx.fillRect(300,0,100,200);
  ctx.strokeRect(300,0,100,200);

  ctx.fillRect(400,0,200,200)
  ctx.strokeRect(400,0,200,200);

  ctx.fillRect(0,100,150,600);
  ctx.strokeRect(0,100,150,600);

  ctx.fillRect(100,100,200,100);
  ctx.strokeRect(100,100,200,100);

  ctx.fillRect(100,200,500,100);
  ctx.strokeRect(100,200,500,100);

  ctx.fillRect(150,300,150,400);
  ctx.strokeRect(150,300,150,400);

  ctx.fillRect(300,300,300,400);
  ctx.strokeRect(300,300,300,400);
  }



  // essai pour animer le cube noir:

  // let start = Date.now(); // remember start time



  let cubeWidth = 100
  let max_X = 600;
  for (x=100; x < (max_X-cubeWidth); x++) {
    ctx.clearRect(x,200,cubeWidth,100)
    ctx.fillStyle = "black"
    ctx.fillRect(x,200,cubeWidth,100)
  }

  //   let timer = setInterval(function())  {

  //   // how much time passed from the start?

  //   let timePassed = Date.now() - start;

 

  //   if (timePassed >= 2000) {

  //     clearInterval(timer); // finish the animation after 2 seconds

  //    return;
  //   }
  // }
  // }

  //black
  ctx.fillStyle = 'black'
  ctx.fillRect(100,200,100,100)

  //green
  ctx.fillStyle = "#7CB247"
  ctx.fillRect(300,100,100,100)

  //orange
  ctx.fillStyle = '#E55A23'
  ctx.fillRect(300,300,300,300)

  //yellow
  ctx.fillStyle = "#F2F230"
  ctx.fillRect(200,600,100,100)

 //borders on top
  ctx.strokeRect(300,0,100,200);
  ctx.strokeRect(300,300,300,400);
  ctx.strokeRect(150,300,150,400);
  ctx.strokeRect(1,1,598,698);
  

  // outils.strokeStyle = "black";
  //   outils.fillStyle = 'white';

  //   outils.beginPath();
  //   outils.strokeRect(0,0)
  //   outils.fillRect(0, 0, 300, 100);
  //   outils.strokeStyle = "black";
  //   outils.fillStyle = 'white';
  //   outils.stroke();
  //   outils.closePath();

    

    requestAnimationFrame(draw);
  }



window.onload = () => {
  start();
};
