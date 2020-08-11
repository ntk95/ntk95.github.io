//string- bai 1
//Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
//Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
var str1 = "i love you";

function checkchuoi(str1) {
    var bai1 = str1.includes("you");
    return bai1;
}
console.log(checkchuoi(str1));


//string - bai 2
//Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
var str2 = 'Xin chào các bạn';

function checkStringExist(str2) {
    var str2cut = str2.slice(0, 8);
    var bai2 = str2cut.concat("...");
    return bai2;
}
console.log(checkStringExist(str2));


//string - bai 3
//Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
var str3 = "chÀo MừnG đẾn với techMaster";

function capitalizeString(str3) {
    var str3Result;
    str3 = str3.toLocaleLowerCase();
    // tách chuỗi
    var arrStr3 = str3.split(" ");
    for (let i = 0; i < arrStr3.length; i++) {
        var firstLetter = arrStr3[i].charAt(0).toUpperCase();;
        arrStr3[i] = firstLetter + arrStr3[i].substring(1, arrStr3[i].length);
    }
    str3Result = arrStr3.join(" ");
    return str3Result;
}
console.log(capitalizeString(str3));


//string - bai 4
//Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function lapchuoi10lan() {
    var bai4 = 'a'.repeat(10);
    return bai4;
}
console.log(lapchuoi10lan());


//string - bai 5
//Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
var chuoi = 'a '.repeat(10);

function lapchuoi10langachngang() {
    var chuoigach = chuoi.replace(/ /g, "-");
    var bai5 = chuoigach.slice(0, 19);
    return bai5;
}
console.log(lapchuoi10langachngang());


//string - bai 6
//Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
var n = 5;

function lapchuoi_nlan() {
    var chuoi = 'a '.repeat(n);
    var chuoigach = chuoi.replace(/ /g, "-");
    var bai5 = chuoigach.slice(0, 9);
    return bai5;
}
console.log(lapchuoi_nlan());


//string - bai 7
//Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
var bai7 = reverseString("Hello");
console.log(bai7);


//string - bai 8
//Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
var bai8 = palindrome("race car");
console.log(bai8);


//array - bai 9
//Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
const array1 = [2, 1, 3];

function minNumber() {
    var array1new = Math.min(...array1);
    return array1new;
}
console.log(minNumber());

//array - bai 10
//Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
var arr = [2, 1, 3, 4];

function max2Number() {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr[1];
}
console.log(max2Number());


//array - bai 11
//Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
var ten = [
    'Nam', 'Hoa', 'Tuấn'
];

function sortStudents() {
    ten.sort(); // sap xep theo thu tu alphabet
    ten.sort(function(a, b) { //dao nguoc thu tu alphabet
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
    return ten;
}
console.log(sortStudents());


//array - bai 12
//Tính tổng các số chia hết cho 5 từ 0 -> 100
function tongcacsochiahet5() {
    var array = [];
    for (i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            array.push(i);
        }
    }
    var sum = array.reduce(function(a, b) { return a + b; }, 0);
    //print sum total
    console.log(sum);
}
tongcacsochiahet5(100);

//array - bai 13
//Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function modArrByX(arr, x) {
    var arrResult = [];
    arr.forEach(element => {
        arrResult.push(element % x);
    });
    return arrResult;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(modArrByX(arr, 2));



//array - bai 14
//Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
}
console.log(longest_string(['aba', 'aa', 'ad',
    'c', 'vcd'
]));
