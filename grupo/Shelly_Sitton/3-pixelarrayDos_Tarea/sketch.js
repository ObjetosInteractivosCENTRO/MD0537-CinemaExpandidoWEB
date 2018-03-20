/*
 *
 * CINEMA EXPANDIDO WEB
 * PIXEL ARRAY TAREA (13-03-18)
 * SHELLY SITTON
 * 
 *
 * URL:  
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
  resizeCanvas(windowWidth,windowHeight);
  
}
function preload(){
 video=createVideo("assets/videos/h.mov"); 
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  initializeVideo()
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
  
  video.loop();
  video.hide();
   
 }
 

  
function drawVideo(){
   
   var correctionX = (windowWidth/2)- video.width/2;
   var correctionY = (windowHeight/2)- video.height/2;
   
   video.loadPixels();
   
   var stepSize =round(map(mouseX,0,windowWidth, 3,20));
  
   
   for(var y=0; y<video.height; y += stepSize ){
     for(var x=0; x<video.width; x += stepSize){
       var index= (x+(y * video.width))*4;
       
       var darkness = (255 - video.pixels[index])/255;
       
       var radio= stepSize * darkness;
       noStroke();
       fill(video.pixels[index]*4,video.pixels[index+1],video.pixels[index+2]);
       
           rect(x+correctionX,y+correctionY,radio,radio);
       
      
     
     }
     
     }
   }
   
   
   
  