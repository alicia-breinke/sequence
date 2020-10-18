let x = 400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  x+=floor(movedX / 5);
  background(0);
  fill(255, 0, 0);
  ellipse(x,  200, 200);
}
function mouseClicked(){
  if (x > 200){
    x-=10;
  }
  else if (x < 200){
    x+=10;
  }
  x+=floor(movedX / 5);
  background(0);
  fill(255, 0, 0);
  ellipse(x, 200, 200);
}
