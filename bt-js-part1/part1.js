//string- bai 1
var str = "i love you";
var bai1 = str.includes("you");
console.log(bai1);


//string - bai 2
var str2 = 'Xin chào các bạn';
var str2cut = str2.slice(0, 8);
var bai2 = str2cut.concat("...");
console.log(bai2);


//string - bai 3
var str3 = "chÀo MừnG đẾn với techMaster";
function capitalizeString(str3) {
    var str3Result;
    console.log("Current String: " + str);
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
var bai4 = 'a'.repeat(10);
console.log(bai4);


//string - bai 5
var chuoi = 'a '.repeat(10);
var chuoigach = chuoi.replace(/ /g, "-");
var bai5 = chuoigach.slice(0, 19);
console.log(bai5);


//string - bai 6
var n = 5;
var chuoi = 'a '.repeat(n);
var chuoigach = chuoi.replace(/ /g, "-");
var bai5 = chuoigach.slice(0, 9);
console.log(bai5);


//string - bai 7
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
var bai7 = reverseString("Hello");
console.log(bai7);


//string - bai 8
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
const array1 = [2, 1, 3];
console.log(Math.min(...array1));


//array - bai 10
var arr = [2, 1, 3, 4];
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr[1]);


//array - bai 11
var ten = [
    'Nam', 'Hoa', 'Tuấn'
];
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
console.log(ten);


//array - bai 12
function tongcacsochiahet5() {
    var array = [];
    for (i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            array.push(i);
        }
    }
    console.log(array);
    var sum = array.reduce(function(a, b) { return a + b; }, 0);
    //print sum total
    console.log(sum);
}
tongcacsochiahet5(100);

//array - bai 13
function modArrByX(arr, x) {
    var arrResult = [];
    arr.forEach(element => {
        arrResult.push(element % x);
    });
    return arrResult;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("EX13");
console.log(modArrByX(arr, 2));



//array - bai 14
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
}
console.log(longest_string(['aba', 'aa', 'ad',
    'c', 'vcd'
]));