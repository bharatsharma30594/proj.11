var ship , ship_running, edges;
var seaImage;

function preload(){

  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")


}

  function setup(){     
  createCanvas(400,400);

  

  ship = createSprite(50,160,20,50);
  ship.addAnimation("running",ship_running);

  edges = createEdgeSprites();

  ship.scale = 0.5;
  ship.x = 50

  sea=createSprite(200,180,400,20);
  sea.x=sea.width/2
  sea.addImage("ground",seaImage);
  


}


function draw() {
  background("blue");

  sea.velocityX = -4
  if(sea.x<0){
    sea.x=sea.width/2
  }
 
  console.log(ship.y)

if(keyDown("space")){
  ship.velocityY = -10;
}

ship.velocityY = ship.velocityY + 0.5;

ship.collide(sea);
 drawSprites();
}








