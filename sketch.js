
var trex ,trex_running;
function preload(){
trex_running  =loadAnimation("trex1.png", "trex3.png", "trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,180,40,60)
 trex.addAnimation("running",trex_running)
 trex.scale = 0.6;
}

function draw(){
  background("red")
  
drawSprites();
}
