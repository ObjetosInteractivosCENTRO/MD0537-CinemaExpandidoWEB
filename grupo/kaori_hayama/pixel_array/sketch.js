/*
 *
 * Cinema Expandido Web
 * Pixel Array (13/feb/18)
 * Kaori Hayama
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
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  initializeVideo();
}


function draw() {
  background(0);
  drawVideo();
}

/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */
 
 function initializeVideo(){
   video= createVideo("assets/videos/video1.mp4");
   video.loop();
   video.hide();
 }
 
 function drawVideo(){ 
   var correctionX = (windowWidth/2 - video.width/2);
   var correctionY = (windowHeight/2 - video.height/2);
   
   video.loadPixels();
   
   for(var y=0; y<video.height; y++){
    for(var x=0; x<video.width;x++){
      var index = (x+(y*video.width))*4;
      
      video.pixels[index] = 111; //aqui tengo los rojos
      video.pixels[index + 1] = video.pixels[index + 2]; //aqui tengo los verdes
      video.pixels[index + 2] = video.pixels[index]; //aqui tengo los azules
      video.pixels[index + 3] = video.pixels[index + 3]; //aqui tengo el alpha
    }
   }
   
   
   video.updatePixels();
   
   image(video,correctionX,correctionY);
   
   
 }