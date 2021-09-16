const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling"
var score = 0;
function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log2 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        textSize(35)
        text("score:"+score, 10,30);
    }
    
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();   
    
    
}

function mouseDragged(){
    if(gameState!== "launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
     }
}


function mouseReleased(){
    slingshot.fly();
    gamesState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
      bird.trajectory = [];
      Matter.Body.setPosition(bird.body,{x:200, y:50});
      
      slingshot.attach(bird.body);
    }
}
 async function getTime(){
    var tempo = await fetch("https://worldtimeapi.org/api/timezone/America/Manaus");
    var tempoJSON = await tempo.json();
    var datetime = tempoJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 06 && hour <= 19){
        ImgBackGround = ("sprites/bg.png");
    }
    else{
        ImgBackGround = ("sprites/bg2.jpg");
    }
    backgroundImg = loadImage(ImgBackGround);
}
