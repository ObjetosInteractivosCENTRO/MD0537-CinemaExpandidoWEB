/*
 *
 * Cinema Expandido WEB
 * Zoom Interactivo
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



var capture;
var video;
var tracker;

/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */
 
 function preload(){
   video = createVideo("assets/videos/fingers.mov")
 }
 
 
function setup() {
  createCanvas(displayWidth,displayHeight);
  initilizeCamera();
  initializeVideo();
  initializeTracker();
  
  
}

function draw() {
  drawCamera();
  drawVideo();
  drawTracker();
}

/*
 *****************************************
 *****************************************
 * CAMERA METHODS
 *****************************************
 *****************************************
 */
 
 function initilizeCamera(){
   capture = createCapture(VIDEO);
   capture.hide();
   
   imageMode(CENTER);
   
 }
 
 
 function drawCamera(){
   background(0);
   image(capture, mouseX, mouseY, 320, 240);
 }
 
 function initializeVideo(){
 video.hide();
 video.loop();
 }
 
 function drawVideo(){
   image(video,(windowWidth/2), (windowHeight/2));
 }
 
 
 /*
 *****************************************
 *****************************************
 * CAMERA METHODS
 *****************************************
 *****************************************
 */
 
  function initializeTracker(){
  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);
 }
 
 function drawTracker(){
   var positions = tracker.getCurrentPosition();
   if(positions.length > 0){
     
   for(var i = 0; i< positions.length; i++){
     ellipse(positions[i][0],positions[i][1],10,10);
   }
   }
   
 }
 
 
 
 
 