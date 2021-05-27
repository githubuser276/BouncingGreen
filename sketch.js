var movingRect, fixedRect;
var a, b;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(200, 200, 40, 60);
  movingRect.shapeColor  = "red";

  fixedRect = createSprite(340, 200, 40, 60);
  fixedRect.shapeColor = "red";

  a = createSprite(20, 400, 40, 60);
  a.shapeColor = "green";
  a.velocityX = 3;

  b = createSprite(600, 400, 40, 60);
  b.shapeColor = "green";
  b.velocityX = -3;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.height/2 + fixedRect.height/2);

  if(isTouching(movingRect,fixedRect)) {

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  }
  else {

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }

  bounceOff(a,b);


  drawSprites();
}