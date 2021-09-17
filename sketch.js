
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
bg_img=loadImage("parking.png")
carImg=loadImage("carImg.png")
car2Img=loadImage("car2.png")	
car3Img=loadImage("truck.png")
car4Img=loadImage("car4.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
   car = createSprite(1290,150,10,10);
   car.addImage(carImg);
   car.scale=.35;

   car2 = createSprite(220,150,10,10);
   car2.addImage(car2Img);
   car2.scale=.28;


   car3 = createSprite(220,450,10,10);
   car3.addImage(car3Img);
   car3.scale=.31;

   car4 = createSprite(440,450,10,10);
   car4.addImage(car4Img);
   car4.scale=.25;





	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(bg_img,1200,550);
  if (keyDown("RIGHT_ARROW")) {
	  car.x=car.x+5;
  }
  if (keyDown("LEFT_ARROW")) {
	car.x=car.x-5;
}
if (keyDown("UP_ARROW")) {
	car.y=car.y-5;
}
if (keyDown("DOWN_ARROW")) {
  car.y=car.y+5;
}
  
  drawSprites();
  textSize(20);
  fill("black")
  text("PARK HERE", 490,50);
}



