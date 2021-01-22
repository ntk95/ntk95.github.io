//Co ban:
//Bài 1. 
//In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm.
//Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:
// var now = new Date();   // Lấy thời gian hiện tại
//var date = now.getDate(); // Lấy ngày từ thời gian hiện tại
//var month = now.getMonth() + 1; // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
//var year = now.getFullYear(); // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại
var today = new Date();

function getCurrentDate(today) {
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    return date;
}

function season(today) {
    day = new Date(today);
    days = day.getTime();

    const SPRING_START = new Date(day.getFullYear(), 2, (day.getFullYear() % 4 === 1) ? 19 : 20).getTime();
    const SUMMER_START = new Date(day.getFullYear(), 5, (day.getFullYear() % 4 === 1) ? 20 : 21).getTime();
    const AUTUMN_START = new Date(day.getFullYear(), 8, (day.getFullYear() % 4 === 1) ? 22 : 23).getTime();
    const AUTUMN_END = new Date(day.getFullYear(), 11, (day.getFullYear() % 4 === 1) ? 20 : 21).getTime();

    const s = [SPRING_START, SUMMER_START, AUTUMN_START, AUTUMN_END];
    const S_NAME = ["Mùa Xuân", "Mùa Hè", "Mùa Thu", "Mùa Đông"];

    for (i = 0; i < s.length - 1; i++) {
        if (days >= s[i] && days < s[i + 1]) {
            season = S_NAME[i];
            break;
        }
        season = S_NAME[3];
    }
    return season;
}

console.log('Bai 1: Hôm nay là ngày: ' +
    getCurrentDate(today), season(today));


//Bài 2
//Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10).
//Hãy chuyển điểm số sang dạng chữ với điều kiện sau:
// Từ 8.5 đến 10: Điểm A
// Từ 7 đến dưới 8.5: Điểm B
// Từ 5.5 đến dưới 7: Điểm C
// Từ 4 đến dưới 5.5: Điểm D
// Từ 0 đến dưới 4: Điểm F


function diemso(diem) {

    var diemchu = "";

    if (diem < 4) {
        diemchu = "Hạng F";
    } else if (diem >= 4 && diem < 5.5) {
        diemchu = "Hạng D";
    } else if (diem >= 5.5 && diem < 7) {
        diemchu = "Hạng C";
    } else if (diem >= 7 && diem < 8.5) {
        diemchu = "Hạng B";
    } else if (diem >= 8.5 && diem <= 10) {
        diemchu = "Hạng A";
    }

    console.log("Bài 2:", diemchu);
}
diemso(6.75);



//Bài 3:
//Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn)
//với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.
let countryCode;

function translate(countryCode) {
    let a = "hello"
    switch (countryCode) {
        case 33:
            a = "bonjour";
            break;
        case 81:
            a = "konnichiwa"
            break;
        case 86:
            a = "ni hao";
            break;
        case 7:
            a = "Zdravstvuyte";
            break;
        default:
            a = "xin chao"
    }
    return a;
}
console.log(translate(countryCode));


//Bài 4:
//Cho 1 mảng chỉ gồm các giá trị true và false (kiểu boolean)
//Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào. ( sử dụng typeof === 'boolean')
const myObj = { called: false, invited: true, interviewed: false, offer: false };

const getTrueKey = obj => {
    for (const key in obj) {
        if (obj[key]) return key;
    };
    return undefined;
};

console.log(getTrueKey(myObj));



//Nâng cao
//Bài 1: Viết funciton printTriangle(height), với height là số integer > 2, 
//in ra màn hình 1 hình tam giác vuông cân có chiều cao height.
// Ví dụ
// Với n = 4
// *
// * *
// * * *
// * * * *
let height;

function printTriangle(height) {
    for (i = 1; i <= height; i++) {

        for (j = 1; j <= i; j++) {
            document.write(' * ');
        }
        document.write('<br/>');
    }
    document.write('-------------<br>');
}
printTriangle(4);




//Bài 2: Viết function printEmptyRectangle(width, height), với width và height là 2 số integer > 3,
//in ra một hình chữ nhật rỗng có kích thước width x height. Ví dụ:
// Với a = 5, b = 3
// * * * * *
// *       *
// * * * * *
let width2, height2;

function printEmptyRectangle(width2, height2) {
    for (i = 1; i <= height2; i++) {
        for (j = 1; j <= width2; j++) {
            if (i == 1 || i == height2 ||
                j == 1 || j == width2)
                document.write("*");
            else
                document.write("&nbsp; ");
        }
        document.write("<br/>");
    }
    document.write('-------------<br>');
}
printEmptyRectangle(6, 4);




//Bài 3: Viết function printSpecialTriangle(height), với height là số integer > 1,
//in ra hình tam giác cân ngược với chiều cao bằng height. Ví dụ:
// Với n = 3
// * * * * *
//   * * *
//     *
let height3;

function printSpecialTriangle(height3) {
    for (var j = height3; j > 0; j--) {
        for (var a = height3; a > j; a--) {
            document.write("&nbsp; ");
        }
        for (var i = 0; i < (2 * j - 1); i++) {
            document.write(" * ");
        }

        document.write("<br/>");
    }
    document.write('-------------<br>');
}
printSpecialTriangle(3);



// Bài 4. Viết function printX(height), với height là số integer > 4 và là số lẻ
// in ra hình chữ X có chiều cao bằng height. Ví dụ:
// Với n = 5
// *       *
//   *   *
//     *
//   *   *
// *       *
let height4;

function printX(height4) {
    for (i = 1; i <= (height4 * 2 + 1); i++) {
        for (j = 0; j <= (height4 * 2 + 1); j++) {
            if (i == j) {
                document.write("*");
            } else if (i + j == (height4 * 2 + 2)) {
                document.write("*");
            } else {
                document.write("&nbsp; ");
            }
        }
        document.write("<br/>");
    }
    document.write('-------------<br>');
}
printX(5);


// Bài 5: Viết function printButterfly(height), với height là số integer > 4 và là số lẻ,
// in ra hình con bướm có chiều cao bằng height. Ví dụ:
// Với n = 5
// *       *
// * *   * *
// * * * * *
// * *   * *
// *       *
let heightup, heightbottom;

function printButterfly(heightup, heightbottom) {
    for (i = 1; i <= heightup; i++) {
        for (j = 1; j <= i; j++) {
            document.write("*");
        }
        for (k = 1; k <= 2 * (heightup - i); k++) {
            document.write("&nbsp; ");
        }
        for (j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br/>");
    }
    for (i = 1; i <= heightbottom; i++) {
        for (j = 1; j <= heightbottom - i + 1; j++) {
            document.write("*");
        }
        for (k = 1; k <= 2 * i; k++) {
            document.write("&nbsp; ");
        }
        for (j = 1; j <= heightbottom - i + 1; j++) {
            document.write("*");
        }
        document.write("<br/>");
    }
    document.write('-------------<br>');
}

printButterfly(5, 4);