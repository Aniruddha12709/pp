var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples(){
  apple = createSprite(random(50,350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.5;
  apple.velocityx = 5;
  apple.velocityy = -3;
}

function orangeLeaf(){
  orangeLeaf = createSprite(random(50,350),40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.2;
  orangeLeaf.velocityx = 2;
  orangeLeaf.velocityy = -1;
}

var select_sprites = Math.round(random(1 , 2));
{

if(frameCount % 80 == 0){
  if(select_sprites == 1){
    // call createApple function
  }
  else{
    // call createLeaves function
  }
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();}
}