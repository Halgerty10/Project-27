
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,350,25,25); 
	bob2 = new Bob(375,350,25,25);
	bob3 = new Bob(350,350,25,25);
	bob4 = new Bob(425,350,25,25);
	bob5 = new Bob(450,350,25,25);
	//ground = new Roof(400,650,1000,50);
	roof = new Roof(400,150,120,20);

	rope1 = new Rope(bob1.body,{x: 400, y: 150});
	rope2 = new Rope(bob2.body,{x: 375, y: 150});
	rope3 = new Rope(bob3.body,{x: 350, y: 150});
	rope4 = new Rope(bob4.body,{x: 425, y: 150});
	rope5 = new Rope(bob5.body,{x: 450, y: 150});
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("orange");

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	//ground.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();
 

}



