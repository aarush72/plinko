const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world

function preload() {
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

  ball = new Plinko(240,200,20);
  ball2 = new Plinko(260,220,20);
  ball3 = new Plinko(280,240,20);
  ball4 = new Plinko(300,260,20);
  ball5 = new Plinko(320,280,20);
  ball6 = new Plinko(340,300,20);
  ball7 = new Plinko(360,320,20);
  ball8 = new Plinko(380,340,20);
  ball9 = new Plinko(400,360,20);
  ball10= new Plinko(420,380,20);
  ball11 = new Plinko(440,400,20);
  ball12 = new Plinko(460,420,20);
  ball13 = new Plinko(480,440,20);
  ball14 = new Plinko(500,460,20);
  ball15 = new Plinko(220,480,20);
  ball16 = new Plinko(200,480,20);
  ball17 = new Plinko(180,480,20);
  ball18 = new Plinko(160,480,20);
  ball19 = new Plinko(140,480,20);
  ball20 = new Plinko(120,480,20);
  ball21= new Plinko(100,480,20);
  ball22 = new Plinko(80,480,20);
  ball23 = new Plinko(60,480,20);

  ball24= new Plinko(240,200,20);
  ball25= new Plinko(260,220,20);
  ball26= new Plinko(280,240,20);
  ball27= new Plinko(300,260,20);
  ball28= new Plinko(320,280,20);
  ball29= new Plinko(340,300,20);
  ball30= new Plinko(360,320,20);
  ball31= new Plinko(380,340,20);
  ball32= new Plinko(400,360,20);
  ball33= new Plinko(420,380,20);
  ball34 = new Plinko(440,400,20);
  ball35 = new Plinko(460,420,20);
  ball36 = new Plinko(480,440,20);
  ball37 = new Plinko(500,460,20);
  ball38 = new Plinko(220,480,20);
  ball39 = new Plinko(200,480,20);
  ball40 = new Plinko(180,480,20);
  ball41 = new Plinko(160,480,20);
  ball42 = new Plinko(140,480,20);
  ball43 = new Plinko(120,480,20);
  ball44= new Plinko(100,480,20);
  ball45 = new Plinko(80,480,20);
  ball46 = new Plinko(60,480,20);
  
  ground = new Ground(240,780,600,10);

  division1 = new Division(50,630,10,300);
  division2 = new Division(100,630,10,300);
  division3 = new Division(150,630,10,300);
  division4 = new Division(200,630,10,300);
  division5 = new Division(250,630,10,300);
  division6 = new Division(300,630,10,300);
  division7 = new Division(350,630,10,300);
  division8 = new Division(400,630,10,300);
  division9 = new Division(450,630,10,300);

  dot1 = new Dots(50,400,20)
  dot2 = new Dots(100,400,20)
  dot3 = new Dots(150,400,20)
  dot4 = new Dots(200,400,20)
  dot5 = new Dots(250,400,20)
  dot6 = new Dots(300,400,20)
  dot7 = new Dots(350,400,20)
  dot8 = new Dots(400,400,20)
  dot9 = new Dots(450,400,20)


  dot10 = new Dots(50,450,20)
  dot11 = new Dots(100,450,20)
  dot12 = new Dots(150,450,20)
  dot13 = new Dots(200,450,20)
  dot14 = new Dots(250,450,20)
  dot15 = new Dots(300,450,20)
  dot16 = new Dots(350,450,20)
  dot17 = new Dots(400,450,20)
  dot18 = new Dots(450,450,20)


  dot19 = new Dots(50,350,20)
  dot20 = new Dots(100,350,20)
  dot21 = new Dots(150,350,20)
  dot22 = new Dots(200,350,20)
  dot23 = new Dots(250,350,20)
  dot24 = new Dots(300,350,20)
  dot25 = new Dots(350,350,20)
  dot26 = new Dots(400,350,20)
  dot27 = new Dots(450,350,20)
  
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();
  ball15.display();
  ball16.display();
  ball17.display();
  ball18.display();
  ball19.display();
  ball20.display();
  ball21.display();
  ball22.display();
  ball23.display();


  ball24.display();
  ball25.display();
  ball26.display();
  ball27.display();
  ball28.display();
  ball29.display();
  ball30.display();
  ball31.display();
  ball32.display();
  ball33.display();
  ball34.display();
  ball35.display();
  ball36.display();
  ball37.display();
  ball38.display();
  ball39.display();
  ball40.display();
  ball41.display();
  ball42.display();
  ball43.display();
  ball44.display();
  ball45.display();
  ball46.display();
  
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();

  dot1.display();
  dot2.display();
  dot3.display();
  dot4.display();
  dot5.display();
  dot6.display();
  dot7.display();
  dot8.display();
  dot9.display();

  dot10.display();
  dot11.display();
  dot12.display();
  dot13.display();
  dot14.display();
  dot15.display();
  dot16.display();
  dot17.display();
  dot18.display();

  dot19.display();
  dot20.display();
  dot21.display();
  dot22.display();
  dot23.display();
  dot24.display();
  dot25.display();
  dot26.display();
  dot26.display();
  dot27.display();

  


  Engine.update(engine);

}
