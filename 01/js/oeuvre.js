// constante globale
// const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let ctx;
let speedBlack = 3;
let speedGreen = 1;
let speedOrange = 0.5;
let speedYellow = 2;
let blackPosX = 100;
let greenPosY = 100;
let orangePosY = 300;
let yellowPosX = 200;
let yellowPosY = 600;
let blackWayX;
let greenWayY;
let orangeWayY;
let yellowWayX;
let yellowWayY;




function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.style.backgroundColor = 'white'
  monCanvas.width = 600;
  monCanvas.height = 700;

  ctx = monCanvas.getContext("2d");
  // lancement de la fonction de dessin
  animate();

}

function animate() {
  ctx.clearRect(0, 0, monCanvas.width, monCanvas.height);


  //move black rec
  let blackReachedRight = blackPosX > 499
  let blackReachedLeft = blackPosX < 101

  if (blackReachedLeft) {
    blackWayX = 1
  } else if (blackReachedRight) {
    blackWayX = -1
  }
  blackPosX = blackPosX + speedBlack * blackWayX

  //move green rec
  let greenReachedTop = greenPosY < 1
  let greenReachedBottom = greenPosY > 99

  if (greenReachedTop) {
    greenWayY = 1
  } else if (greenReachedBottom) {
    greenWayY = -1
  }
  greenPosY = greenPosY + speedGreen * greenWayY

  //move orange rec
  let orangeReachedTop = orangePosY < 301
  let orangeReachedBottom = orangePosY > 399

  if (orangeReachedBottom) {
    orangeWayY = -1
  } else if (orangeReachedTop) {
    orangeWayY = 1
  }
  orangePosY = orangePosY + speedOrange * orangeWayY

  //move yellow rec
  let yellowTopRight = yellowPosX > 199 && yellowPosY < 301;
  let yellowTopLeft = yellowPosX < 151 && yellowPosY < 301;
  let yellowBottomLeft = yellowPosX < 151 && yellowPosY > 599;
  let yellowBottomRight = yellowPosX > 199 && yellowPosY >599;

  if (yellowBottomRight) {
    yellowWayY = -1
    yellowWayX = 0
  } else if (yellowTopRight) {
    yellowWayX = -1
    yellowWayY = 0
  } else if (yellowTopLeft) {
    yellowWayY = 1
    yellowWayX = 0
  } else if (yellowBottomLeft) {
    yellowWayX = 1
    yellowWayY = 0
  } 
  yellowPosX = yellowPosX + speedYellow * yellowWayX;
  yellowPosY = yellowPosY + speedYellow * yellowWayY;
  

  dessine();
  requestAnimationFrame(animate);
}

function dessine() {

  grid();
  function grid() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';

    ctx.fillRect(0, 0, 300, 100);
    ctx.strokeRect(0, 0, 300, 100);

    ctx.fillRect(300, 0, 100, 200);
    ctx.strokeRect(300, 0, 100, 200);

    ctx.fillRect(400, 0, 200, 200)
    ctx.strokeRect(400, 0, 200, 200);

    ctx.fillRect(0, 100, 150, 600);
    ctx.strokeRect(0, 100, 150, 600);

    ctx.fillRect(100, 100, 200, 100);
    ctx.strokeRect(100, 100, 200, 100);

    ctx.fillRect(100, 200, 500, 100);
    ctx.strokeRect(100, 200, 500, 100);

    ctx.fillRect(150, 300, 150, 400);
    ctx.strokeRect(150, 300, 150, 400);

    ctx.fillRect(300, 300, 300, 400);
    ctx.strokeRect(300, 300, 300, 400);
  }

  //black
  ctx.fillStyle = 'black'
  ctx.fillRect(blackPosX, 200, 100, 100)

  //green
  ctx.fillStyle = "#7CB247"
  ctx.fillRect(300, greenPosY, 100, 100)

  //orange
  ctx.fillStyle = '#E55A23'
  ctx.fillRect(300, orangePosY, 300, 300)

  //yellow
  ctx.fillStyle = "#F2F230"
  ctx.fillRect(yellowPosX, yellowPosY, 100, 100)

  //borders on top
  ctx.strokeRect(300, 0, 100, 200);
  ctx.strokeRect(300, 300, 300, 400);
  ctx.strokeRect(150, 300, 150, 400);
  ctx.strokeRect(1, 1, 598, 698);

}



window.onload = () => {
  start();
};
