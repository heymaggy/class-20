const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
function preload(){
  ballImage = loadImage("soccerball.png")
}
function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  world = myengine.world;
  

  ball = Bodies.circle(200,300,40,{restitution:1,frictionAir:0});
  World.add(world,ball);

  ground = Bodies.rectangle(200,380,400,20,{isStatic:true});
  World.add(world,ground);


  
 
  Engine.run(myengine);
  
}


function draw() 
{
  background(51);
 
  image(ballImage,ball.position.x,ball.position.y,40,40);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}