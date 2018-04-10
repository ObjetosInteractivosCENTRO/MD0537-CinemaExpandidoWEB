/*
 *
 * cinema_Expandido_Web
 * PIXEL_ARRAY (MAR-20-18)
 * DANIELA LEVY ESSES
 * Tarea II
 * 
 *
 * URL: https://github.com/esdanylevy/tarea_videoPixel.git
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var video;

/*
 *****************************************
 *****************************************
 LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  //video
  video = createVideo("assets/videos/raul2.mp4");
}

function setup() {
  createCanvas(displayWidth, windowHeight);
  initializeVideo();
}

function draw() {
  background(0);
  //drawVideo();
  drawVideoNose();
  //toggleVideo();
}

/*
 *****************************************
 *****************************************
 *VIDEO METHODS
 *****************************************
 *****************************************
 */

function initializeVideo() {

  video.loop();
  video.hide();
}

function drawVideo() {
  var correctionX = (windowWidth / 2) - video.width / 2;
  var correctionY = (windowHeight / 2) - video.height / 2;

  video.loadPixels(); //lo convierte en un array 

  /*
  video.pixels[0] = 255;
  video.pixels[1] = 0;
  video.pixels[2] = 0;
  video.pixels[3] = 255;
  */

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + (y * video.width)) * 4;

      video.pixels[index] = 0, 0, 155; // aqui tengo los rojos 
      video.pixels[index + 1 * 30] = video.pixels[index + 2 * 10];
      video.pixels[index + 2 * 60] = video.pixels[index + 1 * 5];
      video.pixels[index + 3 * 80] = video.pixels[index + 3 * 26];
    }
  }

  video.updatePixels();


  image(video, correctionX, correctionY);
}

function drawVideoLuz() {
  var correctionX = (windowWidth / 2) - video.width / 2;
  var correctionY = (windowHeight / 2) - video.height / 2;

  video.loadPixels(); //lo convierte en un array 

  /*
  video.pixels[0] = 255;
  video.pixels[1] = 0;
  video.pixels[2] = 0;
  video.pixels[3] = 255;
  */

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + (y * video.width)) * 4;

      if (index % 30 == 0) { // operacion modulo me regresa cuanto me sobra -- es múltiplo de 20

        video.pixels[index] = 155, 0, 0; // aqui tengo los rojos 
        video.pixels[index + 1 * 30] = video.pixels[index + 2 * 10];
        video.pixels[index + 2 * 60] = video.pixels[index + 1 * 5];
        video.pixels[index + 3 * 80] = video.pixels[index + 3 * 26];
      }
    }
  }

  video.updatePixels();


  image(video, correctionX, correctionY);
}

function drawVideoNose() {
  var correctionX = (windowWidth / 2) - video.width / 2;
  var correctionY = (windowHeight / 2) - video.height / 2;

  video.loadPixels(); //lo convierte en un array 
  var stepSize = round(map(mouseX, 0, windowWidth, 2, 10)); // varia dependiendo al mouse

  for (var y = 0; y < video.height; y += stepSize) {
    for (var x = 0; x < video.width; x += stepSize) {
      var index = (x + (y * video.width)) * 4;

      var darkness = (255 - video.pixels[index]) / 55; // restar lo que mide mi pixel en ese rojo en su brightness

      var radio = stepSize * darkness;
      video.pixels[index] = 155, 0, 0;
      
      fill(video.pixels[index], video.pixels[index + 1*5], video.pixels[index + 1]);
      rect(x + correctionX,y + correctionY, radio, radio); 
      rotate(video.time()*0.005);

      /*if (index % 20 == 0) { // operacion modulo me regresa cuanto me sobra -- es múltiplo de 20
        var index = (x + (y * video.width)) * 4;
        fill(0, 0, 255);
        ellipse(x, y, 10, 10)
      }*/

    }
  }
  
  //video.updatePixels();


  //image(video, correctionX, correctionY);
} 

function toggleVideo() {
  if (mouseY <= windowHeight / 2) {
    video.loop();
  } else {
    video.pause();
  }
}

