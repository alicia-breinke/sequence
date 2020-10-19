
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  ellipse(mouseX, mouseY, 150, 150);
}
function mouseMoved(){
    if (mouseX > 100){
    fill(204, 255, 0);
  } if (mouseX > 200){
    fill(255, 255, 0);
  } if (mouseX > 300) {
    fill(255, 0, 0);
  }
}
