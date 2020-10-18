let x = 400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  x+=floor(movedX / 5);
  background(0);
  fill(255, 0, 0);
  ellipse(x,  200, 200);
  if (x > 200){
    x-=2;
  }
  else if (x < 200){
    x+=2;
  }
  x+=floor(movedX / 5);
  background(0);
  fill(255, 0, 0);
  ellipse(x, 200, 200);
}
function keyTyped() {
  if (key === 'y'){
    fill(255, 255, 0);
  } else if (key === 'g') {
    fill(204, 255, 0);
  } else if (key === 'd') {
    fill(255, 0, 0);
  }
}
