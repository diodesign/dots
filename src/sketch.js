var squareLength = 20;
var squareCount = 40;
var squares = [];
var bgColor = 0;
var shapeMode = 0;

class Square {
  constructor(x, y, l) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.c = color(noise(x * 0.001, y * 0.001) * 360, 80, bgColor == 0 ? 100 : 70);
  }
  
  draw(perc) {
    fill(this.c);
    
    switch (shapeMode) {
      case 0:
        push();
        translate(this.x + 0.5 * this.l, this.y + 0.5 * this.l);
        rotate(frameCount * 0.005);
        square(0, 0, this.l * perc);
        pop();
        break;

      case 1:
        push();
        translate(this.x + 0.5 * this.l, this.y + 0.5 * this.l);
        rotate(frameCount * 0.005);
        square(0, 0, this.l * perc);
        pop();
        break;
        
      case 2:
        rect(
          this.x + 0.5 * this.l,
          this.y + 0.5 * this.l,
          this.l * perc,
          this.l * perc);
        break;
        
      case 3:
        circle(this.x + 0.5 * this.l, this.y + 0.5 * this.l, this.l * perc);
    }
  }
}

function setup() {
  let l = squareLength * squareCount;
  createCanvas(l, l);
  strokeWeight(0);
  stroke(0);
  colorMode(HSB);
  rectMode(CENTER);
  
  if (round(random(0, 3)) == 2)
  {
    bgColor = 255;
  }
  
  shapeMode = round(random(0, 3.5));
  
  for (let i = 0; i < squareCount; i++) {
    for (let j = 0; j < squareCount; j++) {
      let square = new Square(i * squareLength, j * squareLength, squareLength);
      squares.push(square);
    }
  }
}

function draw() {
  background(bgColor);
  
  let a = 0.12;
  let b = 0.12;
  
  for (let i = 0; i < squareCount; i++) {
    for (let j = 0; j < squareCount; j++) {
      let n = cos(j * a + frameCount * 0.03) + cos(frameCount * 0.05) * 0.5;
      let m = sin(i * b + frameCount * 0.03) + sin(frameCount * 0.05) * 0.5;
      squares[j + i * squareCount].draw((n * 0.5) + (m * 0.5));
    }
  }
}