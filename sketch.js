const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,a
var ground

function preload(){
bgimg=loadImage ("CityBackground.jpg")



}



function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bg.scale=0.5
  bg.addImage(bgimg)
  bg.velocityX=-2
 
SpeedRunner=createSprite(displayWidth/2,displayHeight-150,20,100)
SpeedRunner.shapeColor="red"
ig=createSprite(displayWidth/2,displayHeight-100,displayWidth,10)

}
function draw(){
background(0)
if (bg.x<850){
  bg.x=displayWidth/2



  
}
if(keyDown("space") ) {
  SpeedRunner.velocityY = -12;


  
}
  SpeedRunner.collide(ig)
SpeedRunner.velocityY = SpeedRunner.velocityY + 0.8

















drawSprites();
}