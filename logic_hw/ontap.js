//Bài 1: Cho 1 mảng number, sắp xếp mảng theo thứ tự giảm dần ( gồm cả số âm và số dương )
let scores = [9, 80, 10, 20, 5, 70];
scores.sort((a, b) => b - a);
console.log(scores);


//Bài 2: Cho 1 mảng number, sắp xếp tất cả số chẵn bên trái, lẻ bên phải
const arr = [2, 5, 2, 6, 7, 1, 8, 9];
const isEven = num => num % 2 === 0;
const sorter = ((a, b) => {
    if (isEven(a) && !isEven(b)) {
        return -1;
    };
    if (!isEven(a) && isEven(b)) {
        return 1;
    };
    return a - b;
});
const oddEvenSort = arr => {
    arr.sort(sorter);
};
oddEvenSort(arr);
console.log(arr);


//Bài 3: Cho 1 mảng bất kỳ, tìm vị trí object đầu tiên trong mảng
const array = [1, 2, 3, 4, 5];

var first = [...array].shift();
console.log(first);

//Bài 4: Viết hàm đếm ngược thời gian đến tết dương lịch
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
console.log('Bài 9: Đếm ngược thời gian đến Tết Dương Lịch 2021: ');
var demNguoc = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ");

    if (distance < 0) {
        clearInterval(x);
        console.log("EXPIRED");
    }
}, 1000);