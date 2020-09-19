let w = 1220;
let h = 450;
let bcolor = "#4b5d67"
let button;


function setup() {
  createCanvas(w, h);
  background(bcolor);

  button = createButton('CLICK');
  button.position(10,430);
  button.size(100);
  button.mousePressed(change);
  
}


function change() {
  let colors = ['#62760c', '#206a5d', '#cf1b1b'];
  let clr = random(colors);
  background(clr);
  noStroke();
  circle(100,100,20);
}

function draw() {
  //point(100,50);
  //strokeWeight(10);
  //to be continued




}