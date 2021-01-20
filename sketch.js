const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);    
    stone = new Stone(700,130,100,100);
    iron = new Iron(300,350);
    rubber = new Rubber(900,450,70);
    hammer = new Hammer(20,330);

	sand1 = new Sand(500,450,10);
    sand2 = new Sand(505,450,10);
    sand3 = new Sand(510,450,10);
    sand4 = new Sand(515,450,10);
    sand5 = new Sand(520,450,10);
    sand6 = new Sand(525,445,10);
    sand7 = new Sand(515,445,10);
    sand8 = new Sand(520,445,10);
}

function draw(){
    background('lightBlue');
    Engine.update(engine);

    stone.display();
    plane.display();
    iron.display();
    rubber.display();
    hammer.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
}