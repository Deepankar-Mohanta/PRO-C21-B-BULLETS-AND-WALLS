var bullet, bulletimg, wall;
var weight, speed, thickness;

function preload(){
  bulletimg=loadImage("bullet.png");
}

function setup() {
  createCanvas(800,400);
  bullet=createSprite(100, height/2, 30, 30);
  bullet.addImage("bullet", bulletimg);
  bullet.scale=0.1;


  wall=createSprite(700, 200, 0, height/2);
  wall.width=thickness;
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);
}

function draw() {
  background('black');
   
  bullet.velocityX=speed;
  
  if(wall.x-bullet.x<=(wall.width+bullet.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255, 0, 0);
    }
    if(damage<10){
      wall.shapeColor=color(0, 255, 0);
    }

  }

  drawSprites();
}