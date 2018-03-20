/*
 *
 * Cinema Expandido Web
 * 1 (13.02.18)
 * Lalito Cabrera
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
 *LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
 
 function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
 }
 
function setup() {
  createCanvas(900,900);
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
   
   video = createVideo("assets/videos/video1.mov");
   video.loop();
   video.hide();
 }
 
  function drawVideo(){
    var correctionX = (windowWidth/2) - video.width/2;
    var correctionY = (windowHeight/2) - video.height/2;
    video.loadPixels();

    
      for(var y=0; y<video.height; y++){
        for(var x=0; x<video.width; x++){
          
          var index =((x+y*video.width)*4);
          video.pixels[index] = video.pixels[index];
          video.pixels[index+1] = video.pixels[index];
          video.pixels[index+2] = video.pixels[index];
          video.pixels[index+3] = video.pixels[index+3];
      }
      }
   
   
    video.updatePixels();
    
    
    image(video, correctionX, correctionY);
   
 }
 