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
var playing=false;

/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
function windowResized(){
  resizeCanvas(windowWidth/2, windowHeight/2);
}

function preload(){
   video= createVideo("assets/videos/video1.mov");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  initializeVideo();
}


function draw() {
  background(0);
  drawVideo4();
  toggleVideo();
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
 
 
 
 function drawVideo4(){ 
  // print(video.duration());
   print(video.time());
   video.volume(0.5);
   video.time(mouseX/windowWidth);
   var correctionX = (windowWidth/2 - video.width/2);
   var correctionY = (windowHeight/2 - video.height/2);
   
   video.loadPixels();
   push();
   //rotate(video.time());
   var stepSize= round(map(video.time(), 0, video.duration(), 8,60));
   
   for(var y=0; y<video.height; y+=stepSize){
    for(var x=0; x<video.width;x+= stepSize){
      
      var index = (x+(y*video.width))*4;
      
      var darkness= (2001-video.pixels[index])/255;
      
      var radio = stepSize * darkness;
      
      fill(video.pixels[index],video.pixels[index+1],video.pixels[index+2]);
      
      ellipse(x+correctionX,y+correctionY,radio,radio);
      
    }
   }
   
   pop();
   //video.updatePixels();
   
   //image(video,correctionX,correctionY);
 }
 
 function toggleVideo(){
    if(mouseY <= windowHeight/2){
      video.play();
    }
    else{
      video.pause();
    }
}
    

 
 