const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionheight = 300;

function setup() {
  
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 790, 500, 20);

  //################### Array definition ####################
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new plinko(j, 100));
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new plinko(j, 250));
  }


//########################Particles###########################




    for (var j = 0; j < particles.length;j++) {
      particles[j].display();
    }



//########################Divisions###########################
    for (var d = 0; d <= width; d = d + 80) {
      divisions.push(new Division(d, 630, 10, divisionheight));
    }



  //#########  ALL DISPLAY #################



}

function draw() {
  background(0);
  drawSprites();
  ground.display();



  for (var j = 0; j <= plinkos.length-1; j++) {
    plinkos[j].display();
  }
  for (var j = 0; j < particles.length-1; j++) {
    particles[j].display();
  }
  for (var r = 0; r <= divisions.length-1; r++) {
    divisions[r].display();
  }
  push();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2+10,width/2+10),10,10));
 }
 pop();

  

}




