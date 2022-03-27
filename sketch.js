var column1= [];
var column2= [];
var img1, img2, img3, img4, img5
function preload(){
  img1= loadImage("img/flower1.jpeg")
  img2= loadImage("img/flower2.jpeg")
  img3= loadImage("img/flower3.jpeg")
  img4= loadImage("img/flower4.jpeg")
  img5= loadImage("img/backgroundflower.jpeg")
}
function setup() {
  createCanvas(800,1200);
  for (var i=0; i<800; i= i+200){
    fill("blue")
    var tile= createSprite(100, 100+i, 100, 100)
    tile.addAnimation("flower" + 1, img5)
    column1.push(tile);

  
  }

}

function draw() 
{
  background(30);
  for (var i=0; i<4; i++){
    if (mousePressedOver(column1[i])){
      var Rand = Math.round(random(1,4))
      column1[i].changeAnimation('flower1',img1)
      console.log(column1[i])
    }
  }
  drawSprites();

}
function columnA(){
  for (var i=0; i<800; i= i+200){
    fill("blue")
    var tile= createSprite(100, 100+i, 100, 100)
    tile.addAnimation("flower" + 1, img5)
    column1.push(tile);

  
  }
  

}
 

