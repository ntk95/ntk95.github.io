//1. khởi tạo biến và điều kiện
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var mouse = false;
ctx.lineJoin = "round";
ctx.lineCap = "round";
var positionX, positionY;

//Truy xuất phần tử
var brush = document.getElementById("brush"); //Bút vẽ
var eraser = document.getElementById("erase"); //Tẩy 
var color = document.getElementById("myColor"); //Màu
var size = document.getElementById("myRange"); //Cỡ bút
var reset = document.getElementById("reset"); //reset

//Đặt điều kiện màu ban đầu 
var myColor = color.value;
ctx.strokeStyle = myColor;

//Đặt điều kiện kích thước ban đầu
var mySize = size.value;
ctx.lineWidth = mySize;

brush.style.border = "2px solid red";
canvas.style.cursor = "pointer";

canvas.addEventListener("mousedown", brushDown, false);
canvas.addEventListener("mousemove", brushMove, false);
canvas.addEventListener("mouseup", brushUp, false);

//Điều kiện thay đổi màu sắc
function colorChange() {
    myColor = color.value;
    ctx.strokeStyle = myColor;
}

//Điều kiện thay đổi kích thước
function sizeChange() {
    mySize = size.value;
    ctx.lineWidth = mySize;
}

//làm cho bút vẽ hoạt động
function getCoordinates(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function brushDraw(canvas, positionX, positionY) {
    if (mouse) {
        ctx.lineTo(positionX, positionY);
        ctx.stroke();
        canvas.style.cursor = "pointer";
    }
}

function brushDown(e) {
    mouse = true;
    var coordinates = getCoordinates(canvas, e);
    canvas.style.cursor = "pointer";
    positionX = coordinates.x;
    positionY = coordinates.y;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
}

function brushMove(e) {
    var coordinates = getCoordinates(canvas, e);
    positionX = coordinates.x;
    positionY = coordinates.y;
    brushDraw(canvas, positionX, positionY);
}

function brushUp() {
    mouse = false;
    canvas.style.cursor = "default";
}

function brushClick() {
    var brushColor = document.getElementById("myColor");
    ctx.strokeStyle = brushColor.value;
    brush.style.border = "2px solid red";
    eraser.style.border = "none";

    canvas.addEventListener("mousedown", brushDown, false); //bubble phase
    canvas.addEventListener("mousemove", brushMove, false);
    canvas.addEventListener("mouseup", brushUp, false);
}

//Làm cho tẩy hoạt động
function eraserClick() {
    ctx.strokeStyle = "white";
    eraser.style.border = "2px solid red";
    brush.style.border = "none";

    canvas.addEventListener("mousedown", brushDown, false);
    canvas.addEventListener("mousemove", brushMove, false);
    canvas.addEventListener("mouseup", brushUp, false);
}

//Làm cho nút reset hoạt động
function resetClick() {
    window.location.reload();
}


//Trình nghe sự kiện cho các công cụ
brush.addEventListener("click", brushClick); //Sự kiện bấm nút bút vẽ 
eraser.addEventListener("click", eraserClick); //Sự kiện bấm nút tẩy
color.addEventListener("change", colorChange); //Sự kiện bấm nút đổi màu 
size.addEventListener("change", sizeChange); //Sự kiện thay đổi cỡ bút
reset.addEventListener("click", resetClick); //Sự kiện bấm nút reset