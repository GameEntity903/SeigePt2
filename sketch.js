const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand,standd;
var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var blocc8,blocc9,blocc10,blocc11,blocc12,blocc13,blocc14,blocc15,blocc16;
var slingshot,polygon;

function setup() {
  createCanvas(1300,650);
  engine = Engine.create();
  world = engine.world;
  
  polygon = Bodies.circle(200,200,20,{density: 1});
  World.add(world,polygon);

  stand = new Ground(390,290,240,8);
  standd = new Ground(890,250,200,8);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  blocc8 = new Block(830,235,30,40);
  blocc9 = new Block(860,235,30,40);
  blocc10 = new Block(890,235,30,40);
  blocc11 = new Block(920,235,30,40);
  blocc12 = new Block(950,235,30,40);
  blocc13 = new Block(860,195,30,40);
  blocc14 = new Block(890,195,30,40);
  blocc15 = new Block(920,195,30,40);
  blocc16 = new Block(890,155,30,40);

  slingshot = new SlingShot(polygon,{x:100,y:200})
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  
  stand.display();
  standd.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  blocc8.display();
  blocc9.display();
  blocc10.display();
  blocc11.display();
  blocc12.display();
  blocc13.display();
  blocc14.display();
  blocc15.display();
  blocc16.display();
  slingshot.display();
  ellipse(polygon.position.x,polygon.position.y,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(polygon);
  }
}