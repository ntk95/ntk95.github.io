//Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
//Lưu ý: Truyền dấu phân tách làm đối số.
//getCurrentDate("/") => 17/08/2020
var today = new Date();

function getCurrentDate(today) {
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    return date;
}
console.log('Bai 1: Hôm nay là ngày: ' +
    getCurrentDate(today));

//Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
//getDaysInMonth(8, 2020) => 31
var getDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
};
console.log('Bài 2: Số ngày trong tháng đã cho là: ' +
    getDaysInMonth(8, 2020));


//Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
var is_weekend = function(date1) {
    var dt = new Date(date1);
    if (dt.getDay() == 6 || dt.getDay() == 0) {
        return "weekend";
    } else {
        return "not weekend"
    }
}
console.log('Bài 3: Kiểm tra ngày đã cho có phải là cuối tuần không?: ' +
    is_weekend('Aug 30, 2020'));

//Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
var CurrentTime = new Date();

function getCurrentTime(today) {
    var time = today.getHours() + ":" + today.getMinutes();
    return time;
}
console.log('Bài 4: Thời gian bây giờ là: ' +
    getCurrentTime(today));


//Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
Date.prototype.soNgayTroiQua = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - onejan) / 86400000);
}
var today = new Date();
var daynum = today.soNgayTroiQua();
console.log('Bài 5: Số ngày đã trôi qua kể từ đầu năm: ' + daynum);

//Bài 6: Viết chương trình JavaScript để tính tuổi.
//calculate_age(new Date(1982, 11, 4))
var ngaysinh = new Date(1995, 2, 17);

function calculate_age(ngaysinh) {
    var diff_ms = Date.now() - ngaysinh.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
console.log('Bai 6: Tuổi của mình là: ' + calculate_age(ngaysinh));


//Bai 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
//let dt = new Date();
//startOfWeek(dt)
function startOfWeek(date) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
}
dt = new Date();
console.log('Bai 7: Ngày bắt đầu của tuần này là: ' + startOfWeek(dt).toString());

//Bai 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
//dt = new Date();
//endOfMonth(dt);
date = new Date(2020, 1, 15);

function getLstDayOfMonFnc(date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
}
console.log('Bai 8: Ngày kết thúc tháng đã cho là: ' +
    getLstDayOfMonFnc(date));

//Bài 10: Viết hàm có 2 tham số, 
//tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'',
//tham số thứ 2 là 1 số x <= 1000.
//Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
//Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''
var t = new Date("August 22, 2020 9:20:56");
var x = 7;

function BamGio(t) {
    t.setSeconds(t.getSeconds() + x);
    return t;
}
console.log('Bai 10: thời gian sau x giây kể từ thời điểm t đã cho: ' +
    BamGio(t));

//Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
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