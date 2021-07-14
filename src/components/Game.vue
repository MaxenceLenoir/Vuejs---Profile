<template>
  <div class="container">
    <div class="container-game">
      <div class="text-game">{{ $t('game') }}</div>
      <div id="countdown" class="countdown"></div>
      <section class="button-play" @click="startGame" v-show="showStartButton">
        <button id='button-start'>
          <span class="text">Start Game</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </button>
      </section>
      <div><canvas id="myCanvas" width="800" height="320" v-show="showCanvas"></canvas></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Game',
    data() {
      return({
        showStartButton: true,
        showCanvas: false
      })
    },
    methods: {
      startGame() {
        this.showStartButton = false
        this.decrement(this.gameStarted);
      },
      gameStarted() {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
      
        const paddleHeight = 10;
        const paddleWidth = 75;
        let paddleX = (canvas.width-paddleWidth) / 2;
      
        let x = canvas.width/2;
        let y = canvas.height-30;
      
        let dx = 2;
        let dy = -2;
      
        let rightPressed = false;
        let leftPressed = false;
      
        const brickRowCount = 3;
        const brickColumnCount = 9;
        const brickWidth = 75;
        const brickHeight = 20;
        const brickPadding = 10;
        const brickOffsetTop = 30;
        const brickOffsetLeft = 30;
      
        const ballRadius = 10;

        this.showCanvas = true
      
        let score = 0;
        let lives = 3;
  
        const bricks = [];
        for(let c=0; c<brickColumnCount; c++) {
            bricks[c] = [];
            for(var r=0; r<brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
      
        const keyDownHandler = (e) => {
          if(e.key == "Right" || e.key == "ArrowRight") {
              rightPressed = true;
          }
          else if(e.key == "Left" || e.key == "ArrowLeft") {
              leftPressed = true;
          }
        }
        
        const keyUpHandler = (e) => {
          if(e.key == "Right" || e.key == "ArrowRight") {
              rightPressed = false;
          }
          else if(e.key == "Left" || e.key == "ArrowLeft") {
              leftPressed = false;
          }
        }
      
        const drawBall = () => {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#f18805";
          ctx.fill();
          ctx.closePath();
        }
      
        const drawPaddle = () => {
          ctx.beginPath();
          ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
          ctx.fillStyle = "#f18805";
          ctx.fill();
          ctx.closePath();
        }
      
        const drawBricks = () => {
          for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
              if(bricks[c][r].status == 1) {
                let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#f18805";
                ctx.fill();
                ctx.closePath();
              }
            }
          }
        }
      
        const collisionDetection = () => {
          for(let c=0; c<brickColumnCount; c++) {
            for(let r=0; r<brickRowCount; r++) {
              let b = bricks[c][r];
              if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                  dy = -dy;
                  b.status = 0;
                  score++;
                  if(score == brickRowCount*brickColumnCount) {
                    alert("YOU WIN, CONGRATULATIONS!");
                    clearInterval(interval);
                    this.showStartButton = true
                    this.showCanvas = false
                  }
                }
              }
            }
          }
        }
      
        const drawScore = () => {
          ctx.font = "16px Arial";
          ctx.fillStyle = "#f18805";
          ctx.fillText("Score: "+score, 8, 20);
        }
      
        const drawLives = () => {
          ctx.font = "16px Arial";
          ctx.fillStyle = "#f18805";
          ctx.fillText("Lives: "+lives, canvas.width-65, 20);
        }
      
        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawBall();
          drawPaddle();
          drawScore();
          drawLives();
          collisionDetection();
          drawBricks();
          
          if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
              dx = -dx;
          }
          if(y + dy < ballRadius) {
            dy = -dy;
          } else if(y + dy > canvas.height-ballRadius) {
              if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
              } else {
                lives--;
                if(!lives) {
                  alert("GAME OVER");
                  clearInterval(interval); // Needed for Chrome to end game
                  this.showStartButton = true
                  this.showCanvas = false
                } else {
                  x = canvas.width/2;
                  y = canvas.height-30;
                  dx = 2;
                  dy = -2;
                  paddleX = (canvas.width-paddleWidth)/2;
                }
              }
          }
          
          x += dx;
          y += dy;
      
          if(rightPressed) {
            paddleX += 7;
            if (paddleX + paddleWidth > canvas.width){
                paddleX = canvas.width - paddleWidth;
            }
          }
          else if(leftPressed) {
            paddleX -= 7;
            if (paddleX < 0){
                paddleX = 0;
            }
          }
        }
      
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
      
        let interval = setInterval(draw, 10);
        
      },
      decrement: (callback) => {
        const el = document.getElementById('countdown');
        setTimeout(() => {
          el.insertAdjacentHTML('afterbegin', `<div class='countdown-number animate__animated animate__zoomIn'>3</div>`);
          }, 300);
        
        setTimeout(() => {
          el.innerHTML = '';
        }, 900)
        timeLeft--;
        let timeLeft = 2;
        const myInt = setInterval(() => {
          if (timeLeft < 1) {
            clearInterval(myInt);
            callback();
          } else {
            el.insertAdjacentHTML('afterbegin', `<div class='countdown-number animate__animated animate__zoomIn'>${timeLeft}</div>`);
            setTimeout(() => {
              el.innerHTML = '';
            }, 900)
            timeLeft--;
            }
          }
        , 1000
        )
      }
    }
  }
</script>