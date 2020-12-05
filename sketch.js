
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(450,150,750,20)

	bobObject1 = new Bob(150,600,150)
	bobObject2 = new Bob(300,600,150)
	bobObject3 = new Bob(450,600,150)
	bobObject4 = new Bob(600,600,150)
	bobObject5 = new Bob(750,600,150)

	rope1 = new Rope(bobObject1.body,roof.body,-300,10)
	rope2 = new Rope(bobObject2.body,roof.body,-150,10)
	rope3 = new Rope(bobObject3.body,roof.body,0,10)
	rope4 = new Rope(bobObject4.body,roof.body,150,10)
	rope5 = new Rope(bobObject5.body,roof.body,300,10)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange")


  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-600,y:-600})

}

}


