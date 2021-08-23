const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
   polygon_img=loadImage("polygon.png");
  //backgroundImg=loadImage("bg.png");
}

function setup() {

engine=Engine.create();
world = engine.world;

  createCanvas(900,400);
  
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
ball=Bodies.circle(50,200,20);
World.add(world,ball)
slingShot = new SlingShot(this.ball,{x:200,y:200});
  

}
function draw() {

  //background(backgroundImg)
  background("white");
engine.update (engine);
 
  strokeWeight(2);
  stroke(15);


  stand1.display();
  stand2.display();
  
  
  stroke(15);
  fill("black");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  text("drag the line and releaseto hit the crazy boxes",600,250)
//imageMode(CENTER);
//ball = loadImage(polygon_img,ball.positionx-50,ball.position.y-80,40,40);
//ellipseMode(RADIUS);

ellipse(ball.position.x,ball.position.y,20);
slingShot.display();

}


function mouseDragged() {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased () {
  slingShot.fly();
}



