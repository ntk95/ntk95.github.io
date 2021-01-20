//Bài 1. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự "-".
//Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123".

let str = '123';

function lapchuoi10langachngang() {
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += `${str}-`
    }
    return result.slice(0, result.length - 1)
}
console.log(lapchuoi10langachngang());


//Bài 2. Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!)
//Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.
let num = 5;

function giaithua(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(giaithua(5));



//Bài 3: Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
//Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh".
//Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.
let text = "Hello"

function daoChuoi(text) {
    var splitString = text.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(daoChuoi(text));


//Bài 4:Cho 1 mảng các số. 
//Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2.
//Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
function laySoDuMang(arr, x) {
    var arrResult = [];
    arr.forEach(element => {
        arrResult.push(element % x);
    });
    return arrResult;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(laySoDuMang(arr, 2));


//Bài 5: Chỉ dùng vòng lặp for hoặc while, cho 1 mảng bất kỳ,
//Viết function trả về 1 mảng mới sao cho tất cả số chẵn nằm trước, các số lẻ nằm sau
let numbers = [1, 2, 3, 4, 5, 6]

function SapXepSoChanLe(numbers) {
    let SoLe = [];
    let SoChan = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            SoChan.push(numbers[i]);
        } else {
            SoLe.push(numbers[i]);
        }
    }

    // create an object with the odd and even array in it
    const traketqua = {
        SoChan,
        SoLe,
    };

    return traketqua;
}
console.log(SapXepSoChanLe(numbers));