var helicopterIMG, helicopterSprite, package,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	}

function setup() {
	createCanvas(800, 700);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//packageBody =new package();
	World.add(world, packageBody);
	
	Engine.run(engine);
  
}

function draw() {
  background(0);
  //package.x= packageBody.position.x ;
  //package.y= packageBody.position.y ;
  //helicopterSprite.display(); 

  //keyPressed();
  drawSprites();
  
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	package.velocityY =3;
  }
}



