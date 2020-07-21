var car,wall;
var speed,weight;
var deform = 0;
function setup() {
  speed = random(55,90);
  weight = random(400,1500);
  createCanvas(1280,550);
  car = createSprite(50,275,50,50);
  wall = createSprite(1250,275,60,height/2);
  car.velocityX = speed;
  wall.shapeColor = (rgb = 80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(car.x - wall.x < car.width/2 + wall.width/2 &&
    wall.x - car.x < car.width/2 + wall.width/2 ){
    car.velocityX = 0;
    deform = 0.5*weight*speed*speed/22500;
    car.x = 50;
    
    if(deform < 100){
      car.shapeColor = "green";
    }else if(deform > 100 && deform < 180){
      car.shapeColor = "yellow";
    }else if(deform > 180){
      car.shapeColor = "red";
    }


  }
}