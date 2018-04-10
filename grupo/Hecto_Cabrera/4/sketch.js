/*
 *
 * Cinema Expandido WEB
 * Tarea 4
 * Lalito Cabrera
 * 
 *;
 
 * URL: 
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

// Video
var video;



/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {

  //Video
  video = createVideo("assets/videos/video1.mov");
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  //createCanvas(600, 400);
  createCanvas(displayWidth, displayHeight);
  initialize();



}

function draw() {
  background(255);


  drawVideo();


}


/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */


function initialize() {


  initializeVideo();
}


/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */


function initializeVideo() {

  video.loop();
  video.hide();
}



function drawVideo() {


  // Video centrado
  /*
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);
  image(video, correctionXS, correctionYS);
  */

  //Pixel
  /*
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);
  video.loadPixels();

  video.pixels[0] = 255;
  video.pixels[1] = 0;
  video.pixels[2] = 0;
  video.pixels[3] = 255;

  video.updatePixels();
  image(video, correctionXS, correctionYS);
  */

  //Pixels
  /*
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);
  video.loadPixels();

  for (var y = 0; y < video.height; y++) {

    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width) * 4;
      video.pixels[index] = 255;
      video.pixels[index + 1] = 0;
      video.pixels[index + 2] = 0;
      video.pixels[index + 3] = 255;

    }

  }
  video.updatePixels();
  image(video, correctionXS, correctionYS);
  */

  //Grano
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);

  noStroke();
  fill(0);
  video.loadPixels();


  var stepSize = round(map(mouseX, 0, windowWidth, 90, 64));
  
  //var stepSize = 10;

  for (var y = 0; y < video.height; y += stepSize*0.2) {

    for (var x = 0; x < video.width; x += stepSize*0.2) {
      
      var index = (x + y * video.width) * 4;
      var darkness = (255 - video.pixels[index]) / 255;
      rotate(index*millis)
      color(index)
      var radius = stepSize * darkness;
      rect(x + correctionXS, y + correctionYS, radius, radius);

    }

  }
  //video.updatePixels();
  //image(video, correctionXS, correctionYS);



}