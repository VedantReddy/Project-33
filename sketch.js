const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImage;
var sprite1, sprite2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  backgroundImage = loadImage("snow3.jpg");

  sprite1 = createSprite(100,100,10,40);

  snow1 = new Snow(200,200,20,20);
}

function draw() {
  Engine.update(engine);
  background(backgroundImage); 
  background.scale = 2;
  drawSprites();
}