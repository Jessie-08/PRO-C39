var PLAY = 1;
var END = 0;
var gameState = PLAY;

var gameover, game_over,  restartImg;
var canvas, backgroundImage;
var track, sand;
var trex, trexImage;
var obs1,obs2, obs3, obs4, obs5, obstaclesGroup,obstacles;

function preload(){
track = loadImage("bg.jpeg");
sand = loadImage("sand.png")
 trexImage = loadImage("trex.png");
 obs1 = loadImage("tre1.png");
 obs2 = loadImage("tre2.png");
 obs3 = loadImage("tre3.png");
 obs4 = loadImage("tre4.png");
 obs5 = loadImage("rock.png");
 game_over = loadImage("gameover.png");
 restartImg = loadImage("restart.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-20);

  trex=createSprite(displayWidth/2,displayHeight/2);
  trex.addImage("running",trexImage);

  obstaclesGroup = new Group();

  gameover = createSprite(camera.position.x-100,camera.position.y+100);
  gameover.addImage("go",game_over);
  gameover.scale = 0.5
  gameover.visible = false;

  score = 0;
}

function draw(){
  background(sand)

  if(gameState === PLAY){
   play();
 }
 else if(gameState === END){
  end();
 }
  textSize(25);
   fill("white")
   text("Score: "+ score, camera.x-600, camera.y-300); 
   text("*Make sure the T-rex doesn't touch any trees or stones*",camera.x-310, camera.y-350); 
  trex.display();

drawSprites();
}

function play(){

gameover.visible = false;

score = 0;

  spawnObstacles();

      image(track,0, -displayWidth, displayHeight*50, displayWidth*3);

            camera.position.x = trex.x;
          camera.position.y = displayHeight/2;

          if(keyIsDown(UP_ARROW)){
            trex.y = trex.y-10;
          }
          if(keyIsDown(DOWN_ARROW)){
            trex.y = trex.y+10;
          }
          if(keyIsDown(RIGHT_ARROW)){
            trex.x = trex.x+10;
            score = score + Math.round(getFrameRate()/60);
          }
         
        if(trex.isTouching(obstaclesGroup)){
          gameState = END;
        }
        }
        
        function end(){
          gameover.visible = true
          gameover.x = camera.position.x;
          gameover.y = camera.position.y;

          obstaclesGroup.setVelocityXEach(0);

          trex.velocityX=0;
          trex.velocityY=0;
        }

        function spawnObstacles() {
          if(frameCount % 70 === 0) {
            var obstacle = createSprite(camera.x+700,displayHeight/2,10,10);
            obstacle.y=Math.round(random(camera.y-300,camera.y+250));
            obstacle.velocityX = -6
            
            //generate random obstacles
            var rand = Math.round(random(1,5));
            switch(rand) {
              case 1: obstacle.addImage(obs1);
                      break;
              case 2: obstacle.addImage(obs2);
                      break;
              case 3: obstacle.addImage(obs3);
              obs3.scale = 0.75;
                      break;
              case 4: obstacle.addImage(obs4);
                      break;
              case 5: obstacle.addImage(obs5);
              obs5.scale = 0.5;
                      break;
            }
            obstaclesGroup.add(obstacle)
          }
        }