let x = 400;
function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
}

function draw() {
  if (x > 200){
    x-=2;
  }
  else if (x < 200){
    x+=2;
  }
  x+=floor(movedX / 5);
  background(0);
  fill(255, 0, 0);
  ellipse(200, 200, 200, 200);
}
