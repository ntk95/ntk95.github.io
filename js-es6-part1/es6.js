// Bài tập string
// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ: checkStringExist("i love you", "you") => true
// checkStringExist("i love you", "hate") => false
const checkStringExist = (str1 = 'iloveyou', subStr1 = 'you') => {
    return str1.includes(subStr1)
}
console.log(checkStringExist());

// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'
const shortenString = (str2 = 'Xin chào các bạn') => {
    if (typeof str2 !== "string") return false
    if (str2.length <= 8) return str
    return `${str2.substring(0, 8)}...`
}
console.log(shortenString());


// Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => Kết quả trả về là 'Chào Mừng Đến Với Techmaster'
const capitalizeString = (str3 = 'chÀo MừnG đẾn với techMaster') => {
    let strToArr = str3.split(' ')
    for (let i = 0; i < strToArr.length; i++) {
        strToArr[i] = `${strToArr[i].slice(0, 1).toUpperCase()}${strToArr[i].slice(1).toLowerCase()}`;
    }
    return strToArr.join(' ')
}
console.log(capitalizeString());

// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
const repeatStringTenTimes = (str4 = 'fsfsd') => {
    return str4.repeat(10)
}
console.log(repeatStringTenTimes());


// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
const repeatString = (str5 = 'a') => {
    let result = ""
    for (let i = 0; i < 10; i++) {
        result += `${str5}-`
    }
    return result.slice(0, result.length - 1)
}
console.log(repeatString());

// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'
const repeatStringNTimes = (str6 = 'a', n = 6) => {
    let result = str6
    for (let i = 0; i < (n - 1); i++) {
        result += `-${str6}`
    }
    return result
}
console.log(repeatStringNTimes());


// Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString('Hello') => Kết quả trả về là 'olleH'
const reverseString = (str7 = 'Hello') => {
    return str7.split('').reverse().join('')
}
console.log(reverseString());

// Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc
// false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
const ifEqual = (str8 = 'Race car') => {
    let removedSpacesText = str8.split(" ").join("").toLowerCase()
    return removedSpacesText === removedSpacesText.split("").reverse().join("")
}
console.log(ifEqual());

// Bài tập phần Array
// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1
const minNumbers = (arr1 = [2, 1, 3]) => {
    return Math.min(...arr1)
}
console.log(minNumbers());

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3
const max2Numbers = (arr2 = [2, 1, 3, 4]) => {
    let distinctArr = [...new Set(arr2)]
    return distinctArr.sort(function(a, b) {
        return b - a
    })[1]
}
console.log(max2Numbers());


// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
const sortStudents = (arr3 = ['Nam', 'Hoa', 'Tuấn']) => {
    return arr3.sort((a, b) => b.localeCompare(a));
}
console.log(sortStudents());

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
const sum = () => {
    let result = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            result += i
        }
    }
    return result
}
console.log(sum());

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
const modulo2 = (arr5 = [2, 7, 8, 9, 6, 4, 3, 5, 1, 0]) => {
    let result = []
    for (let i = 0; i < arr5.length; i++) {
        result.push(i % 2)
    }
    return result
}
console.log(modulo2());


// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
const maxLengthOfArr = (arr6 = ['aba', 'aa', 'ad', 'c', 'vcd']) => {
    let arrLength = arr6.map(ele => ele.length)
    let maxLength = Math.max(...arrLength)
    return arr6.filter(ele => ele.length == maxLength)
}
console.log(maxLengthOfArr());