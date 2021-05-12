
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(800,670,1600,20);
	paper1= new Paper(200,450,40);
    dustbin1= new Dustbin(700,550,10,100);
    dustbin2= new Dustbin(550,550,10,100);
	dustbin3= new Dustbin(625,590,140,10);
	Engine.run(engine);

	

  
}


function draw() {
  
  background(0);
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 ground1.display();
 paper1.display();
}


function keypressed() {

if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

}
 }