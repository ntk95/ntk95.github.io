//Bài 1: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
//sample([3, 7, 9, 11]) => 3
//sample([3, 7, 9, 11]) => 9
function ngaunhien(sample) {
    return sample[Math.floor(Math.random() * sample.length)];
}
const sample = [3, 7, 9, 11];
console.log('Bài 1: Lấy phần tử ngẫu nhiên của mảng [' + sample + '] la: ' + ngaunhien(sample));

//Bài 2: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function doichongaunhien(myArray) {
    var ctr = myArray.length,
        temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = myArray[ctr];
        myArray[ctr] = myArray[index];
        myArray[index] = temp;
    }
    return myArray;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Bài 2: Đổi chỗ ngẫu nhiên vị trí của mảng cũ[' + myArray + ']: sang mảng mới: [' +
    doichongaunhien(myArray) + ']');

//Bài 3: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
//similarity([1, 2, 3], [1, 2, 4]) => [1,2]
//chuong trinh chua dung
var arr = [1, 2, 3, 5];
var values = [1, 2, 4, 3];
const similarity = (arr, values) => arr.filter(v => values.includes(v));
console.log('Bài 3: Các phần tử xuất hiện trong cả 2 mảng: [' +
    similarity(arr, values) + ']');

//Bài 4: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
//symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 4];

function symmetricDifference(arr1, arr2) {
    var newArr = [];

    function locSoKhacBiet(first, second) {
        for (var i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }
    locSoKhacBiet(arr1, arr2);
    locSoKhacBiet(arr2, arr1);
    return newArr;
}
console.log('Bai 4: Phần tử không xuất hiện ở cả 2 mảng: [' + arr1 + '] và ' +
    '[' + arr2 + '] là: [' + symmetricDifference(arr1, arr2) + ']');

//Bài 5: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
//union([1, 2, 3], [4, 3, 2]) => [1,2,3,4]
//union([1, 2, 3], [1, 2, 3]) => [1, 2, 3]
var array_first = [1, 2, 3];
var array_second = [4, 3, 2];

function union(array_first, array_second) {
    var concat_array = [...array_first, ...array_second];
    var array_union = [...new Set(concat_array)];
    return array_union;
}
console.log('Bai 5: Các phần tử không trùng nhau trong cả 2 mảng: [' +
    array_first + '] và ' + '[' + array_second + '] là: [' +
    union(array_first, array_second) + ']');

//Bài 6: Viết chương trình JavaScript để tạo mã màu HEX ngẫu nhiên.
//random_hex_color_code()
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};
console.log('Bai 6: Mã màu HEX ngẫu nhiên: ' +
    random_hex_color_code())

//Bài 7: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
//sub_String("dog") => ["d","do","dog","o","og","g"]
let result = [];

function sub_String(str, curr = '', index = 0) {
    if (index == str.length) {
        result.push(curr);
        return result;
    }
    sub_String(str, curr, index + 1);
    sub_String(str, curr + str[index], index + 1);
}
sub_String("dog");
console.log('Bài 7: tập hợp con của chuỗi dog la: [' + result + ']');

//Bài 8: Kiểm tra mảng xem có phải mảng tăng dần hay không
var array = [2, 3, 4, 5, 6];

function isAscending(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] <= array[i]) {
            return false;
        }
    }
    return true;
}
console.log('Bai 8: Kiem tra chuoi [' + array + '] tang dan hay khong: ' +
    isAscending(array));

//Bài 9: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
var array1 = [9, 7, 5, 3, 1];

function isOddDecending(array1) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i + 1] < array1[i] && array1[i + 1] % 2 == 1) {
            return true;
        } else {
            return false;
        }
    }
}

console.log('Bai 9: Kiem tra chuoi [' + array1 +
    '] la mang so le giam dan hay khong: ' + isOddDecending(array1));


//Bai 10:
//Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó
//sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
//Ví dụ với tham số 53751 thì kết quả là 13557.
var so = 4561221;

function smallestPossibleNumber(so) {
    let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (so > 0) {
        let d = parseInt(so % 10);
        freq[d]++;
        so = parseInt(so / 10);
    }
    let result = 0;
    for (let i = 1; i <= 9; i++) {
        if (freq[i] != 0) {
            result = i;
            freq[i]--;
            break;
        }
    }
    for (let i = 0; i <= 9; i++) {
        while (freq[i]-- != 0) { result = result * 10 + i; }
    }
    return result;
}

console.log('Bai 10: Số nhỏ nhất có thể từ số ' + so + ' đã cho là: ' + smallestPossibleNumber(so));