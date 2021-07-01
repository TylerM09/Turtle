const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Turtle

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Turtle = new Bird(200, 200)

   

}

function draw(){
    background(0);
    Engine.update(engine);

    Turtle.display()

    drawSprites()



    
   
}