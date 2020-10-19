var movingR, stationaryR


function setup() {
  createCanvas(800,400);
 movingR = createSprite(200, 200, 50, 50);
 stationaryR = createSprite(200, 200, 50, 50);

 movingR.shapeColor = "blue"
 stationaryR.shapeColor = "blue"
}

function draw() {
  background("black");  
 
  movingR.x = mouseX
  movingR.y = mouseY

  if(movingR.x - stationaryR.x < movingR.width/2 + stationaryR.width/2 &&
    stationaryR.x - movingR.x  < movingR.width/2 + stationaryR.width/2 &&
    movingR.y - stationaryR.y < movingR.height/2 + stationaryR.height/2 &&
    stationaryR.y - movingR.y < movingR.height/2 + stationaryR.height/2 
    ){
      movingR.shapeColor = "green"
      stationaryR.shapeColor = "green"
    }

    else
    {
    movingR.shapeColor = "blue"
    stationaryR.shapeColor = "blue"
    }
 
  drawSprites();
}