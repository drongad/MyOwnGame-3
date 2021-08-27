var robot1
var robotImg, coin, coinImg, jungle
var waterPuddle, puddleImg, coinGroup, puddleGroup
var fuel, fuelImg, fuelGroup
var score = 0
var lives = 5
function preload(){
  robotImg = loadImage("robot.png")
  Bg_img = loadImage("background.jpg")
  coinImg = loadImage("coin.png")
  puddleImg= loadImage("waterPuddle.png")
  fuelImg = loadImage("fuel.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  robot1 = createSprite(height-400, width-200)
  robot1.addImage(robotImg)
  robot1.scale = 0.8
  
  
  coinGroup = createGroup()
  puddleGroup = createGroup()
  fuelGroup = createGroup()
  
}

function draw() {
  
  background("gray");  
 image(Bg_img, 0, -height * 5, width, height * 6);
  
  if(keyDown("up")){
    robot1.y-=5
    camera.position.y = robot1.position.y
    spawnCoins()
    spawnPuddles()
    spawnFuel()
    
  }
  if(keyDown("right")){
    robot1.x+=5
  }
  if(keyDown("left")){
    robot1.x-=5
  }
  if(robot1.isTouching(puddleGroup)){
    puddleGroup.destroyEach()
    score-=1
    lives-=1
  } if(robot1.isTouching(coinGroup)){
    coinGroup.destroyEach()
    score+=1
 
  }
  if(robot1.isTouching(fuelGroup)){
    fuelGroup.destroyEach()
    lives+=1
 
  }
 
  drawSprites();




}
function spawnCoins(){
  if(frameCount%120 === 0){
    coin = createSprite(random(height-100,height-400),random(robot1.y -800,robot1.y-500))
    coin.addImage(coinImg)
    coin.scale = 0.3
    coinGroup.add(coin)
  }
}
function spawnPuddles(){
  if(frameCount%77 === 0){
    waterPuddle = createSprite(random(height-100,height-400),random(robot1.y -800,robot1.y-500))
    waterPuddle.addImage(puddleImg)
    waterPuddle.scale = 0.3
    puddleGroup.add(waterPuddle)
  }
}
function spawnFuel(){
  if(frameCount%105 === 0){
    fuel = createSprite(random(height-100,height-400),random(robot1.y -800,robot1.y-500))
    fuel.addImage(fuelImg)
    fuel.scale = 0.03
    fuelGroup.add(fuel)
  }
}