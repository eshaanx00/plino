var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []

var particle;
var turn = 5;
var score=0;

var game="play"

var divisionHeight=300;
var Score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("Turns : "+turn,700,30)
  Engine.update(engine);
  
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>750){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null
        if(turn<=0)game="end"
      }
      
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>750){
      if(particle.body.position.x>300&&particle.body.position.x<600){
        score=score+100;
        particle=null
        if(turn<=0)game="end"
      }
      
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>750){
      if(particle.body.position.x>601&&particle.body.position.x<900){
        score=score+200;
        particle=null
        if(turn<0)game="end"
      }
      
    }
  }
 
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


   if (game==="end"){
    textSize(50)
    fill(random(0,255),random(0,255),random(0,255))
    text("Game Over",230,470)
  }
   
 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  textSize(20)
   text("500",25,500)
   text("500",105,500)
   text("500",185,500)
   text("500",265,500)
   text("100",345,500)
   text("100",425,500)
   text("100",505,500)
   text("200",585,500)
   text("200",665,500)
   text("200",745,500)
}
function mousePressed(){
  if(game!=="end"){
turn--;
particle=new Particle(mouseX,10,10,10)
  }
  
}
