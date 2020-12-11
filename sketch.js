var playerScore=0;
var compScore=0;
var gameState = "serve";
var goal1,goal2,striker,playermallet,computermallet,boundry1,boundry2,boundry3,boundry4,boundry5,boundry6,boundry7,boundry8,divider1,divider2;

function preload(){
    
}
function setup(){
createCanvas(800,800);
goal1=createSprite(200,28,100,20);
goal1.shapeColor="yellow";
goal2=createSprite(200,372,100,20);
goal2.shapeColor="yellow";
striker=createSprite(200,200,10,10);
striker.shapeColor="white";
playermallet=createSprite(200,50,50,10);
playermallet.shapeColor="black";
computermallet=createSprite(200,350,50,10);
computermallet.shapeColor="black";
boundry1 = createSprite(200, 5,1200,10);
boundry1.shapeColor="white";
boundry2 = createSprite(200,795,1200,10);
boundry2.shapeColor="pink";
boundry3 = createSprite(5, 200,10,1200);
boundry3.shapeColor="red";
boundry4 = createSprite(797, 300,10,1200);
boundry4.shapeColor="blue";
boundry5 = createSprite(200, 35,1200,10);
boundry5.shapeColor="yellow";
boundry6 = createSprite(200,380,400,5);
boundry6.shapeColor="cyan";
boundry7 = createSprite(20, 200,5,400);
boundry7.shapeColor="orange";
boundry8 = createSprite(380, 200,5,1200);
boundry8.shapeColor="black";
divider1=createSprite(200,150,400,5);
divider1.shapeColor="grey";
divider2=createSprite(200,250,400,5);
divider2.shapeColor="brown";
line(0, 200, 400, 200);

}


function draw() {
  background("green");
 for (var i = 0; i < 400; i=i+20) {
  line(i,200,i+10, 200)}
   textSize(18);
 text(playerScore, 33, 179);
  text(compScore, 33,224);
  stroke("white");
  fill("24");
 
  if (gameState === "serve") {
  textSize(20);
  stroke("white");
    text("Press Space to strike",100,180);
  }
  edges = createEdgeSprites();
  striker.bounceOff(edges);
  striker.bounceOff(boundry5);
  striker.bounceOff(boundry6);
  striker.bounceOff(boundry7);
  striker.bounceOff(boundry8);
  striker.bounceOff(playermallet);
   striker.bounceOff(computermallet);
   computermallet.bounceOff(boundry7);
   computermallet.bounceOff(boundry8);
 
   if (gameState === "end") {
  textSize(20);
  stroke("white");
    text("GAME OVER",100,180);
     text("PRESS 'R' TO RESTART",103,221);
  }
  

  if (keyDown("space") && gameState === "serve") {
    strike();
    gameState = "play";
  }
 if (compScore===5) {
  gameState="end";
  }
   
    if (playerScore===5) {
  gameState="end";
  }
 if (keyDown("r") && gameState === "end") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
    
 
 computermallet.x = striker.x;
  if (keyDown("right")) {
  playermallet.x=playermallet.x+16;
  }
   if (keyDown("left")) {
  playermallet.x=playermallet.x-16;
  }
if (striker.isTouching(goal1)) {
  reset();
  gameState="serve";
  compScore=compScore+1;
}
 if (striker.isTouching(goal1)&&gameState==="play") {
 striker .x=200;
 striker .y=200;
  compScore=compScore+1;
  gameState==="serve";
  reset(); 
}
drawSprites();

}
function strike() {
  striker.velocityX = 3;
  striker.velocityY = 4;
}
function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}
