var fixedrect, movingrect;

var ob1,ob2

function setup()
{
  createCanvas(1200,800);
  fixedrect=createSprite(400,100,80,50);
  fixedrect.shapeColor="green"
  fixedrect.debug=true

  movingrect=createSprite(400,800,50,50);
  movingrect.shapeColor="green"
  movingrect.debug=true

  movingrect.velocityY=-5
fixedrect.velocityY=+5

}

function draw()
{
  background(0);

  bounceoff(movingrect,fixedrect);
  drawSprites();
}

function bounceoff(ob1,ob2){
if (ob1.x-ob2.x<ob1.width/2+ob2.width/2 && ob2.x-ob1.x<ob1.width/2+ob2.width/2){
  ob1.velocityX= ob1.velocityX*(-1);
  ob2.velocityX= ob2.velocityX*(-1);
}
if (ob1.y-ob2.y<ob1.height/2+ob2.height/2 && ob2.y-ob1.y<ob1.height/2+ob2.height/2){
  ob1.velocityY= ob1.velocityY*(-1);
  ob2.velocityY= ob2.velocityY*(-1);
}
}