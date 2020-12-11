var boy,boyi,mother,motheri,groundi,ground,roomimage1,roomimage2,roomimage3, room,  roomimage1,  roomimage2,  roomimage3,bg;
var edges,hearti,heart;
var gameState="play"
var lives=0;
function preload(){
motheri=loadAnimation("1-removebg-preview (1).png","2-removebg-preview.png","3-removebg-preview.png","4-removebg-preview.png","5-removebg-preview.png","6-removebg-preview.png")
bg=loadImage("Room1.jpg")  
roomimage1= loadImage("Room1.jpg");
roomimage2 = loadImage("Room2.jpg");
roomimage3 = loadImage("Room3.jpg");
boyi=loadImage("klipartz.com.png");
  hearti=loadImage("images.png");
  roomimage=loadImage
  
}

function setup() {
  createCanvas(windowWidth-20, windowHeight-80);
  
  edges=createEdgeSprites()
 roomimage2.scale=3
 mother=createSprite(100,100,10,10);
 mother.addAnimation("running",motheri);
 mother.scale=0.5
 boy=createSprite(200,300,10,10);
boy.addImage("boy",boyi)
boy.scale= 0.1;
mother.velocityX=5
mother.velocityY=5
boy.debug= true
mother.debug=true
mother.setCollider("circle",0,0,50)
}

function draw() {

  background(255);

//mother.x=Math.round(random(50,windowWidth-10))
//mother.y=Math.round(random(50,windowHeight-10))
if (gameState==="play"){
  mother.velocityX=mother.velocityX+Math.random(2,20)
mother.velocityY=mother.velocityY+Math.random(2,20)
}

//roomImage();
if (keyDown("w")){
  boy.y= boy.y-7;
}
if (keyDown("s")){
  boy.y= boy.y+7;
}
if (keyDown("a")){
  boy.x= boy.x-7;
}
if (keyDown("d")){
  boy.x= boy.x+7;
}

mother.bounceOff(edges)

if(boy.isTouching(mother)){
textSize(50)
fill("red")
  text("You are caught.. don't be naughty", windowWidth/2,windowHeight/2)
  lives++
}
if (lives===3){

  gameState="Over"
  text("YOU LOST",windowWidth,windowHeight)
}
}
   drawSprites();
}


function roomImage(){
if(frameCount%500===0){
room=createSprite(600,400,windowWidth,windowHeight)
room.addImage(roomimage1)
var rand=Math.round(random(1,3))
switch(rand){
  case 1 : room.addImage(roomimage1);
  break;
  case 2 : room.addImage(roomimage2);
  break;
  case 3: room.addImage(roomimage3);
  break;
 
}
room.scale=(0.25)
//  console.log(rand)
}
console.log(rand)
}