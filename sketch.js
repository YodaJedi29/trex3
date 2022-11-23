
var trex ,trex_running;
var fundo ,imagemdefundo;
var nuvem ,imagemdanuvem;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  imagemdefundo= loadImage("ground2.png");
  imagemdanuvem= loadImage("cloud.png");
  

}

function setup(){
  createCanvas(600,200)
  fundo=createSprite(50,158)
  trex = createSprite(100,150)
  trex.scale = 0.5;
  
  trex.addAnimation("correndo",trex_running);
  fundo.addAnimation("fundinho",imagemdefundo);
  fundo.velocityX = -5
  
}
trex.bouceOff.fundo
function draw(){
  background("white")
  if(fundo.x < 0){
    fundo.x = fundo.width/2
  };
  trex.collide(fundo);
  if(keyDown("space")){
    trex.velocity.Y = -10

  }else{
trex.velocityY = trex.velocityY + 0.8

  }

  spawnnuvem();
  drawSprites();
}





  function spawnnuvem(){

if(frameCount % 60 == 0 ){
  nuvem= createSprite(550,Math.round(random(0,200)));
  nuvem.velocityX = -2;
  nuvem.addAnimation("nuvenzinha",imagemdanuvem);
}



  
  }

