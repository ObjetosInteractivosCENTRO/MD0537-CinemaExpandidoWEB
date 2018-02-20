/*
 *
 * Cinema Expandido Web
 * PixelArray 2/13/2018
 * Arturo Alejandro Robles García
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
 
 function windowsResize(){
   resizeCanvas(windowWidth,windowHeight);
   
 }
 
function setup() {
  createCanvas(displayWidth,displayHeight);
  initilizeVideo();
}

function draw() {
  background(255);
  drawVideo();
}

 /*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */
 
 function initilizeVideo(){
  video = createVideo("assets/videos/video2.mp4");
  video.loop();
  video.hide();
 }
 
 function drawVideo(){
   var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
   
   video.loadPixels();
   
   for(var y = 0; y < video.height; y++){
     for(var x = 0; x < video.width; x++){
       var index = (x + (y * video.width)) * 4;
       
       video.pixels[index] = 112; //aqui tengo los rojos
       video.pixels[index + 1] = video.pixels[index + 1]; //aqui tengo los verdes
       video.pixels[index + 2] = video.pixels[index + 2]; //aqui tengo los azul
       video.pixels[index + 3] = video.pixels[index + 3]; //aqui tengo el alpha
       
       
     }
   }
   
   video.updatePixels();
   
   image(video,correctionX,correctionY);
   
 }