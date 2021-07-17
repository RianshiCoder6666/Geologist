const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron,gold,copper;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(350,200,50);
    stone = new Stone(700,300,60,60);
    iron = new Iron(200,300,40,70);
    gold = new Gold(950,300,50,50);
    copper = new Copper(500,200,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    gold.display();
    copper.display();
}