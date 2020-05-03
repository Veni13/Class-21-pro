const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var sun,earth;
var mercury;
var startx=200,starty=300,angle=0,increment=10,radius=100;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

 earth =  createSprite(startx,starty);
 earth.shapeColor = "blue";
 earth.setCollider("circle");
 earth.mirrorX(-1);
 earth.debug = true;
 earth.rotateToDirection=true;
 earth.velocityX=5;
 earth.scale=0.7;
 
 
 sun = createSprite(500,200,70,70);
 sun.shapeColor = "yellow";
 sun.setCollider("circle");
 sun.debug = true;

 mercury = createSprite(300,300,40,40);
 mercury.shapeColor = "orange";
 mercury.setCollider("circle");
 mercury.debug = true;


}

function draw() {
  background(0,0,0); 
  angle=angle+increment;
  earth.X=startx+radius*Math.cos(angle*Math.PI/360);
  earth.Y=starty+radius*Math.sin(angle*Math.PI/360);
  
  earth.rotation = 180-angle;
  mercury.x = World.mouseX;
  mercury.y = World.mouseY;
  
  drawSprites();
}