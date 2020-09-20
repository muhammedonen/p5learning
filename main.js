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
  
  

  
}

function draw() {
  background(bcolor)
let hr = hour();
let mnt = minute();
let scnd = second();

fill('#ff414d');
noStroke();
textSize(50);
text( hr + ':' + mnt + ':' + scnd , 610, 50);




}