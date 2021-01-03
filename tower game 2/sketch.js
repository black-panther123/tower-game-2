const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var polygon;

var box1 ;
var platform1,platform2;
var  sling;
var block1,block2,block3,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
function preload() {
   

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(700, 250, 100, 10);
    platform2 = new Ground(500, 305, 100, 10);

    block1 = new block(700,320,20,70);
    block2 = new block(920,320,20,70);
   // pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);






    polygon1=new Polygon(50,200);

    block3 = new block(700,240,20,70);
    block4 = new block(920,240,20,70);
   // pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);

    block5 = new block(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

  //  bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
   sling = new SlingShot(this.polygon,{x:200, y:50});
    //polygon holder with slings
   
}

function draw(){
    background("brown");
    Engine.update(engine);
  //  strokeWeight(4);
    block1.display();
    block2.display();
    ground.display();
   // pig1.display();
   // log1.display();
polygon1.display();
    block3.display();
    block4.display();
  //  pig3.display();
    //log3.display();

    block5.display();
    //log4.display();
    //log5.display();

    //bird.display();
    platform1.display();
    platform2.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}




function keyPressed(){

  if(keyCode===32){
      slingshot.attach(polygon.body);

  }
}