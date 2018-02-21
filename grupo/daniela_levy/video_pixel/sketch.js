/*
 *
 * cinema_Expandido_Web
 * PIXEL_ARRAY (13-FEB-18)
 * DANIELA LEVY ESSES
 * 
 *
 * URL
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

function setup() {
  createCanvas(displayWidth, windowHeight);
  initializeVideo();
}

function draw() {
  background(0);
  drawVideo();
}

/*
 *****************************************
 *****************************************
 *VIDEO METHODS
 *****************************************
 *****************************************
 */

function initializeVideo() {
  video = createVideo("assets/videos/floraTeaser.mp4");
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

      video.pixels[index] = 0,0,155; // aqui tengo los rojos 
      video.pixels[index + 1] = video.pixels[index + 1];
      video.pixels[index + 2] = video.pixels[index + 2];
      video.pixels[index + 3] = video.pixels[index + 3];
    }
  }

  video.updatePixels();


  image(video, correctionX, correctionY);
}