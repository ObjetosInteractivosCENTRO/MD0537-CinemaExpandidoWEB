/*
 *
 * Cinema Expandido WEB
 * Pixel Array (11/Abril/2018)
 * Natalia González
 * 
 *
 * URL: https://natho30.github.io/PixelArrayVideo1-/
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
 
 //int-entero 
 //float -decimal
 
 //java intuye la variable. usamos var 
 
 var capture; 
 var video; 
 var tracker; 
 /*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
 
 function preload(){
   video =createVideo("assets/videos/fingers.mov")
 }

//set up solo corre una vez
function setup() {
  //createCanvas(1000,1000); //"lienzo"
  createCanvas(displayWidth,displayHeight); 
  initializeVideo();
  initializeCamera(); 
  initializeTracker(); 
}
//draw corre cada frame por segundo.
function draw() {
  background(0);
  drawVideo();
  drawCamera();
  drawTracker();
  print(frameRate); 
  
  //setup y draw simepre van juntas. 
}

 /*
 *****************************************
 *****************************************
 * CAMERA METHODS
 *****************************************
 *****************************************
 */
 
 function initializeCamera(){
  capture =createCapture(VIDEO); 
  capture.hide(); 
  capture.loop();  
 }
 
 function drawCamera(){
   //background(0); 
   image(capture,mouseX, mouseY, 400,400);
 }
 
 function initializeVideo(){
   video.hide();
   video.loop(); 
 }
 function drawVideo(){
   var positions2 = tracker.getCurrentPosition();

  if (positions2.length > 0) {
    var differenceW = (positions2[14][0]) - (positions2[0][0]);
    var differenceH = (positions2[7][1]) - (positions2[33][1]);
    var zomw = round(map(differenceW, 0, 200, 0, 800));
    
    image(video, zomw / 2, zomw / 2);
  }
}
 
 
  /*
 *****************************************
 *****************************************
 * TRacker METHODS
 *****************************************
 *****************************************
 */
 
 function initializeTracker(){
   tracker= new clm.tracker();
   tracker.init(pModel);
   tracker.start(capture.elt);
 }
 
 function drawTracker(){
   var positions=tracker.getCurrentPosition(); 
   noStroke(); 
   fill(0,255,10); 
   if (positions.length>0){
     for (var i=0; i<positions.length; i++){
     ellipse(positions[i][0],positions[i][1],10,10);
   }
  }
 }
 
