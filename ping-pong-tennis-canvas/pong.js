const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');
canvas.width = innerWidth * 0.9;
canvas.height = innerHeight * 0.9;
canvas.style.border = '15px solid red'
const ctx = canvas.getContext('2d');


addEventListener("resize", () => {
    canvas.width = innerWidth * 0.9;
    canvas.height = innerWidth * 0.9;
});

/* khai báo các biến */
const racketWidth = 10;
const racketHeight = 150;

let upArrowPressed = false;
let downArrowPressed = false;


// khai báo vợt của 2 người chơi
const user = {
    x: 10,
    y: canvas.height / 2 - racketHeight / 2,
    width: racketWidth,
    height: racketHeight,
    color: 'purple',
    score: 0
};

const ai = {
    x: canvas.width - (racketWidth + 10),
    y: canvas.height / 2 - racketHeight / 2,
    width: racketWidth,
    height: racketHeight,
    color: 'orange',
    score: 0
};

// khai báo bóng
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 7,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: 'pink'
};


let centerx = canvas.width / 2;
let centery = canvas.height / 2;

//vẽ 2 đường trung tuyến
function drawMidPoint() {
    ctx.beginPath();
    ctx.moveTo(centerx, 0);
    ctx.lineTo(centerx, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.setLineDash([5, 5, 5]);
    ctx.lineCap = 'square';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, centery);
    ctx.lineTo(canvas.width, centery);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.setLineDash([5, 5, 5]);
    ctx.lineCap = 'square';
    ctx.stroke();
}

// vẽ các điểm
function drawUserScore(x, y, score) {
    ctx.fillStyle = 'violet';
    ctx.font = '100px sans-serif ';
    ctx.fillText(score, x, y);
}

function drawAIScore(x, y, score) {
    ctx.fillStyle = 'orange';
    ctx.font = '100px sans-serif ';
    ctx.fillText(score, x, y);
}

// vẽ vợt của các người chơi
function drawRacket(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

// vẽ bóng
function drawBall(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

// thêm eventListener vào cửa sổ trình duyệt
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

// bấm phím lên xuống để di chuyển vợt của người chơi
// bấm và giữ các phím
function keyDownHandler(event) {
    switch (event.keyCode) {
        case 38:
            upArrowPressed = true;
            break;
        case 40:
            downArrowPressed = true;
            break;
    }
}

// nhả tay các phím lên xuống để ngừng di chuyển vợt
function keyUpHandler(event) {
    switch (event.keyCode) {
        case 38:
            upArrowPressed = false;
            break;
        case 40:
            downArrowPressed = false;
            break;
    }
}


// tải lại bóng
function reset() {
    // đặt lại giá trị của bóng về các giá trị cũ hơn
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = 7;

    // thay đổi hướng của quả bóng
    ball.velocityX = -ball.velocityX;
    ball.velocityY = -ball.velocityY;
}

// Chức năng phát hiện va chạm
function collisionDetect(player, ball) {
    // trả về true hoặc false
    player.top = player.y;
    player.right = player.x + player.width;
    player.bottom = player.y + player.height;
    player.left = player.x;

    ball.top = ball.y - ball.radius;
    ball.right = ball.x + ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;

    return ball.left < player.right && ball.top < player.bottom && ball.right > player.left && ball.bottom > player.top;
}

//chức năng cập nhật, để cập nhật vị trí mọi thứ
function update() {
    // di chuyển vợt
    if (upArrowPressed && user.y > 0) {
        user.y -= 8;
    } else if (downArrowPressed && (user.y < canvas.height - user.height)) {
        user.y += 8;
    }

    // kiểm tra xem bóng chạm vào tường trên hay dưới
    if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
        ball.velocityY = -ball.velocityY;
    }

    // nếu bóng đập vào tường bên phải
    if (ball.x + ball.radius >= canvas.width) {
        // người chơi ghi được 1 điểm
        user.score += 1;
        reset();
    }

    // nếu bóng đập vào tường bên trái
    if (ball.x - ball.radius <= 0) {
        // AI sẽ ghi được 1 điểm
        ai.score += 1;
        reset();
    }

    // di chuyển quả bóng
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Chuyển động từ vợt của AI
    ai.y += ((ball.y - (ai.y + ai.height / 2))) * 0.09;

    // phát hiện va chạm của quả bóng đến các vợt
    let player = (ball.x < canvas.width / 2) ? user : ai;

    if (collisionDetect(player, ball)) {
        // góc mặc định là 0deg tính bằng Radian
        let angle = 0;
        if (ball.y < (player.y + player.height / 2)) {
            // nếu bóng chạm đỉnh vợt
            angle = -1 * Math.PI / 4;
        } else if (ball.y > (player.y + player.height / 2)) {
            // nếu bóng chạm đáy của vợt
            // thì góc sẽ là Math.PI / 4 = 45deg
            angle = Math.PI / 4;
        }

        /* thay đổi vận tốc của quả bóng tùy theo vị trí vợt mà quả bóng đâm vào */
        ball.velocityX = (player === user ? 1 : -1) * ball.speed * Math.cos(angle);
        ball.velocityY = ball.speed * Math.sin(angle);

        // tăng tốc độ bóng
        ball.speed += 0.2;
    }
}

// chức năng kết xuất vẽ mọi thứ trên canvas
function render() {
    // nền đen
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //ve cac trung tuyen
    drawMidPoint();
    // vẽ điểm người chơi
    drawUserScore(canvas.width / 4, canvas.height / 6, user.score);
    // vẽ điểm AI
    drawAIScore(3 * canvas.width / 4, canvas.height / 6, ai.score);
    // vẽ vợt của người chơi
    drawRacket(user.x, user.y, user.width, user.height, user.color);
    // vẽ vợt của AI
    drawRacket(ai.x, ai.y, ai.width, ai.height, ai.color);
    // vẽ bóng
    drawBall(ball.x, ball.y, ball.radius, ball.color);
}

function gameLoop() {
    update();
    render();
}

// gọi hàm gameLoop () 60 lần mỗi giây
setInterval(gameLoop, 1000 / 60);