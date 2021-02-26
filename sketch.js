const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log1 = new Log(810,260,300,PI/2);
    pig1 = new Pig(810, 350)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log2 = new Log(810,220,300,PI/2);
    pig2 = new Pig(810, 250)

    box5 = new Box(810,160,70,70);
    //box4 = new Box(920,220,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    

    bird = new Bird(200, 50)
    //log4 = new Log(810, 250)

    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    log1.display();
    pig1.display();

    box3.display();
    box4.display();
    log2.display();
    pig2.display();

    box5.display()
    log3.display()
    log4.display()

    box3.display();
    box4.display();

    bird.display()
    //box5.display();
    
}