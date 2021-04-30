const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

  bg = loadImage("background.png");

}

function setup() {
  createCanvas(1700, 800);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(400, 450, 800, 10);
   hero = new Hero(300,350, 80);
   fly = new Fly(hero.body, {x: 300, y: 50});
   monster = new Monster(1200, 300, 150, 150);

   block1 = new Block(500, 400, 50, 50);
   block2 = new Block(550, 400, 50, 50);
   block3 = new Block(600, 400, 50, 50);
   block4 = new Block(650, 400, 50, 50);
   block5 = new Block(700, 400, 50, 50);
   block6 = new Block(500, 350, 50, 50);
   block7 = new Block(550, 350, 50, 50);
   block8 = new Block(600, 350, 50, 50);
   block9 = new Block(650, 350, 50, 50);
   block10 = new Block(700, 350, 50, 50);
   block11 = new Block(500, 300, 50, 50);
   block12 = new Block(550, 300, 50 ,50);
   block13 = new Block(600, 300, 50, 50);
   block14 = new Block(650, 300, 50 ,50);
   block15 = new Block(700, 300, 50 ,50);
   block16 = new Block(525, 250 ,50 ,50);
   block17 = new Block(575, 250 ,50 ,50);
   block18 = new Block(625, 250, 50 ,50);
   block19 = new Block(675 ,250, 50 ,50);
   block20 = new Block(550, 200 ,50 ,50);
   block21 = new Block(600, 200 ,50 ,50);
   block22 = new Block(650, 200, 50, 50);
   block23 = new Block(600, 150, 50 ,50);
   

}

function draw() {
  background(bg);

  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();
  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();


}

function mouseDragged(){

  Matter.Body.setPosition(hero.body, {x:mouseX, y: mouseY});
}

