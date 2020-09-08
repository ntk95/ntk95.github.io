const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');
canvas.width = innerWidth * 0.9;
canvas.height = innerHeight * 0.9;
canvas.style.border = '15px solid blue'
const ctx = canvas.getContext('2d');
canvas.style.background = 'black';

var startMenu = document.getElementById('startMenu'),
    pauseMenu = document.getElementById('pauseMenu'),
    gameplay = document.getElementById('gameplay'),
    startBtn = document.getElementById('startBtn'),
    continueBtn = document.getElementById('continueBtn'),
    gamePaused = false,
    gameInProgress = false,
    gameInterval = window.setInterval(function() {});

window.addEventListener('resize', windowResize);
startBtn.addEventListener('click', startGame);
continueBtn.addEventListener('click', resumeGame);

startMenu.className = 'active';
pauseMenu.className = '';
gameplay.className = '';

window.onblur = function() {
    if (gameInProgress) pauseGame();
}

function startGame() {
    gameInProgress = true;
    gameplay.className = '';
    startMenu.className = '';
    pauseMenu.className = '';
    gamePaused = false;
    gameInterval = window.setInterval(function() {}, 1000 / fps);
}

function resetGame() {
    startGame();
}


function togglePause() {
    if (gamePaused) {
        resumeGame();
    } else {
        pauseGame();
    }
}

function pauseGame() {
    if (!gamePaused) {
        gamePaused = true;
        gameplay.className = '';
        pauseMenu.className = 'active';
        clearInterval(gameInterval);
    }
}

function resumeGame() {
    if (gamePaused) {
        gamePaused = false;
        gameplay.className = '';
        pauseMenu.className = '';
        startGame();
    }
}

function windowResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Ball {
    constructor(x, y, radius, color, startAngle = 0, endAngle = Math.PI * 1.3) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.point = 0;
        this.dx = 0;
        this.dy = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
        );
        ctx.fill();
        ctx.closePath();
    }
    drawBossName(name) {
        ctx.fillStyle = 'red';
        ctx.font = '20pt Arial';
        ctx.fillText(name, this.x - name.length / 2 * 18, this.y + 15)
    }

    drawPoints() {
        ctx.fillStyle = 'blue';
        ctx.font = '30pt Arial';
        ctx.fillText(this.point, 50, canvas.height - 50)
    }
    move() {
        if (this.x > canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height - this.radius) {
            this.dy = -this.dy;
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
    contact(ball) {
        let dist = Math.sqrt(Math.pow((this.x - ball.x), 2) + Math.pow((this.y - ball.y), 2));
        if (dist < this.radius + ball.radius) {
            // eat
            this.point++;
            if (this.point % 5 === 0) {
                this.radius += 5;
            }
            return true;
        }
        return false;
    }

}

function rgb() { //random màu sắc ngẫu nhiên cho bóng mới
    color = 'rgb(';
    for (var i = 0; i < 3; i++) {
        color += Math.floor(Math.random() * 255) + ',';
    }
    return color.replace(/\,$/, ')');
}


function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

// tao list point
function generateBall(N) {
    for (let i = 0; i < N; i++) {
        let radius = 20;
        let x = randomNumber(0 + radius, canvas.width - radius);
        let y = randomNumber(0 + radius, canvas.height - radius);
        let ball = new Ball(x, y, radius, rgb(), 0, Math.PI * 2);
        balls.push(ball);
    }
}

// ve list ball
function drawBall(balls) {
    balls.forEach(element => {
        element.draw();
    });
}

document.addEventListener("keydown", function(e) {
    let step = 2;

    switch (e.keyCode) {
        case 37:
            boss.dx = step * -1;
            boss.dy = 0;
            break;
        case 38:
            boss.dy = step * -1;
            boss.dx = 0;
            break;
        case 39:
            boss.dx = step;
            boss.dy = 0;
            break;
        case 40:
            boss.dy = step;
            boss.dx = 0;
            break;
        default:
            break;
    }
});

function eatBall(boss, balls) {
    balls.forEach((ele, index) => {
        if (boss.contact(ele)) {
            new Audio('http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Mouse%20Click%20Fast.wav-23232-Free-Loops.com.mp3').play();
            balls.splice(index, 1);
        }

    });
}

let balls = [];
generateBall(50);
// tao boss
let bossRadius = 50;
let boss = new Ball(bossRadius, bossRadius, bossRadius, 'orange');
boss.name = 'boss';

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
}

function update() {
    drawBall(balls);
    boss.draw();
    boss.drawPoints();
    boss.move();
    boss.drawBossName('Haha');
    eatBall(boss, balls);
}
animate();