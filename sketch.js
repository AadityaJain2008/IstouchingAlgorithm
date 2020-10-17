var fixedRect, movingRect,normalrect,corona;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  normalrect = createSprite(500,200,60,30);
  normalrect.shapeColor = "green";
  normalrect.debug = true;
  corona = createSprite(1000,400,89,37);
  corona.shapeColor = "green";
  corona.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
istouching(movingRect,fixedRect);
istouching(normalrect,movingRect);
istouching(corona,movingRect);

  drawSprites();
}
