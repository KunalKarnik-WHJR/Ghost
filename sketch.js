var ball, wall1, wall2, wall3

function setup(){
  ball = createSprite(200,200,10,10);
  ball.velocityX = 2;
  ball.velocityY = 3;

  ball.shapeColor = 'blue';

  wall1 = createSprite(10,50,20,100);
  wall1.shapeColor = 'red';

  wall2 = createSprite(50,50,20,100);
  wall2.shapeColor = 'green';

  wall3 = createSprite(50,130,100,20);
  wall3.shapeColor = 'brown';
}

function draw() {
  background("white");
    
    if(ball.isTouching(wall1) || ball.isTouching(wall2) || ball.isTouching(wall3)){
      ball.x = 200;
      ball.y = 200;
    }
    
    
    if(keyIsDown(UP_ARROW)){
      console.log("Hello");
      ball.velocityX = 0;
      ball.velocityY = -2;
    }
    
    if(keyIsDown(DOWN_ARROW)){
      ball.velocityX = 0;
      ball.velocityY = 2;
    }
    
    if(keyIsDown(LEFT_ARROW)){
      ball.velocityX = -2;
      ball.velocityY = 0;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      ball.velocityX = 2;
      ball.velocityY = 0;
    }
    drawSprites();
}
