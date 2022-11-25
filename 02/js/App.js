// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;
let angleH = 40 ;
let angleV = 40 ;
let isAnimated = true;
let rayonH = 100;
let rayonV = 100;
let rayonDynamique = 0;
let vitesse1 = 1; //enlève les *2 pour regarder ce que ça donne
let vitesse2 =  1;
function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  angleH = 100;
  angleV = 100;

  document.addEventListener("click", (e) => {
    isAnimated = !isAnimated;
  });

  mesOutils.fillStyle = "black";
  mesOutils.fillRect(0, 0, monCanvas.width, monCanvas.height);

  // lancement de la fonction de dessin
  animate();
}

function animate() {
  //   mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);
  dessine();

  if (isAnimated) {
    angleH += vitesse1;
    angleV += vitesse2;
    rayonDynamique = Math.abs(Math.cos(angleV * (Math.PI / 360)) * 100);
  }
  requestAnimationFrame(animate);
}

function dessine() {

  mesOutils.fillStyle = "rgba(0, 0, 0, 0.05)";
  mesOutils.fillRect(0, 0, monCanvas.width, monCanvas.height);
  
  let centrex = monCanvas.width / 2.3;
  let centrey = monCanvas.height / 2;

  let x1 = Math.cos(angleH * (Math.PI / 180)) * rayonH * pixelRatio + centrex;
  let y1 = Math.sin(angleV * (Math.PI / 180)) * rayonV * pixelRatio + centrey;

  //   lissajou
  let conducteurX = x1;
  let conducteurY = y1;
  let slavex = conducteurX;
  let slavey = conducteurY;

  mesOutils.lineWidth = 0.9;
  mesOutils.strokeStyle = `white`;
  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio,
    0,
    180 * (Math.PI / 180),
    true
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 25,
    0,
    180 * (Math.PI / 180),
    false
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 50,
    0,
    180 * (Math.PI / 180),
    true
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 75,
    0,
    180 * (Math.PI / 180),
    false
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 100,
    0,
    180 * (Math.PI / 180),
    true
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 125,
    0,
  180 * (Math.PI / 180),
    false
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 150,
    0,
    180 * (Math.PI / 180),
    true
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 175,
    0,
    180 * (Math.PI / 180),
    false
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 200,
    0,
    180 * (Math.PI / 180),
    true
  );
  mesOutils.stroke();
  mesOutils.closePath();
  
  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 225,
    0,
    180 * (Math.PI / 180),
    false
  );
  mesOutils.stroke();
  mesOutils.closePath();

  mesOutils.beginPath();
  mesOutils.arc(
    slavex,
    slavey,
    rayonDynamique * pixelRatio + 250,
    0,
    180 * (Math.PI / 180),
    true
  );
  mesOutils.stroke();
  mesOutils.closePath();
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};