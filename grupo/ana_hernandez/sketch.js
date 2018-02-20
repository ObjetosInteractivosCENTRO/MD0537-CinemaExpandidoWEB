/*
 *
 * Cinema Expandido WEB
 * Mi primer video (10 de febrero de 2018)
 * Ana Hernández Villalobos
 *
 */

/*
 *
 * VARIABLES
 *
 */

var video;

/*
 *
 * METHODS
 *
 */

function setup() {
  createCanvas(500, 500);
  video = createVideo("assets/videos/roots500.mp4");
  video.loop();
}

function draw() {
  background(255, 0, 0);
  image(video, 0, 0);
}