//bai 1
//Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function sphere_volume(r) {
    return 4.0 / 3.0 * Math.PI * Math.pow(r, 3);
}
let r = 5;
console.log('Bai 1: The tich hinh cau voi ban kinh ' + r +
    ' la: ' + sphere_volume(r));

//bai 2:
//Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
//Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
let arr = [6, 10];

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = 0;
    for (var i = min; i <= max; i++) {
        sum += i;
    }
    return sum1 = sum - arr[0] - arr[1];
}
console.log('Bai 2: Tong tat ca cac so nguyen nam giua ' + arr[0] + ' va ' + arr[1] + ' la: ' +
    sumAll(arr));

//bai 3:
//Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. 
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
let num = 17;
console.log('Bai 3: Kiem tra so ' + num +
    ' co phai la so nguyen to khong?: ' + isPrime(num));

//bai 4:
//Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
let number = 20;

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function sumPrimes(number) {
    var total = 0;
    var primes = [];
    for (var i = 2; i <= number; i++) {
        if (isPrime(i)) {
            total = total + i;
        }
    }
    return total;
}
console.log('Bai 4: Tong cac so nguyen to nho hon ' + number +
    ' la: ' + sumPrimes(number));

//bai 5
//Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
num1 = 12;

function sumDivisors(num1) {
    var sum = 0;
    for (var i = 1; i <= num1; i++) {
        if (!(num1 % i)) {
            sum += i;
        }
    }
    return sum;
}
console.log('Bai 5: Tong cac uoc so cua ' + num1 + ' la: ' +
    sumDivisors(num1));


//bai 6
//Viết hàm để lấy danh sách các key của object
let person = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

function key(person) {
    var a = Object.keys(person);
    for (let key of a) {}
    return a;
}
console.log('Bai 6: Danh sách các key của object: ' +
    key(person));

//bai 7
//Viết hàm để lấy danh sách các value của object
let person1 = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

function value(person1) {
    var b = Object.values(person1);
    for (let value of b) {}
    return b;
}
console.log('Bai 7: Danh sách các value của object: ' + value(person1));

//bai 8
//Viết hàm kiểm tra key có tồn tại trong Object không
let person2 = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

function checkKey(person2) {
    let bai8 = person2.hasOwnProperty('age');
    return bai8;
}
console.log('Bai 8: kiem tra key ton tai trong object : ' +
    checkKey(person2));

//bai 9
//Viết hàm kiểm tra Object có độ dài bao nhiêu

Object.getLengthObject = function(Myobj) {
    var osize = 0,
        key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

let person3 = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

let objsize = Object.getLengthObject(person3);
console.log('Bai 9: do dai cua chuoi la : ' + objsize);

//bai 10
//Viết function lấy ra những user có tuổi > 25 và isStatus = true
let person4 = {
    name: "dsfa",
    age: 24,
    isStatus: true
};

let person5 = {
    name: "dsdfa",
    age: 26,
    isStatus: true
};

let person6 = {
    name: "dsfsddfa",
    age: 28,
    isStatus: false
};

let person7 = {
    name: "dfsfdsa",
    age: 25,
    isStatus: true
};

let peoplelist = [person4, person5, person6, person7];

function checkAgeStatus(peoplelist) {
    let listAgeStatus = peoplelist.filter(peoplelist => peoplelist.age > 25 &&
        peoplelist.isStatus == true);
    return listAgeStatus;
}
console.log('Bai 10: User có tuoi > 25 và isStatus = true la: ');
console.log(checkAgeStatus(peoplelist));

//bai 11
//Viết function sắp xếp các user theo tuổi tăng dần
let person8 = {
    name: "dsfa",
    age: 24,
    email: 'sdf@gmail.com'
};

let person9 = {
    name: "dsdfa",
    age: 26,
    email: 'sdsdf@gmail.com'
};

let person10 = {
    name: "dsfsddfa",
    age: 28,
    email: 'sadfds@gmail.com'
};

let peoplearray = [person8, person9, person10];
let a, b;

peoplearray.sort((a, b) => {
    let keyA = a.age + a.name + a.email;
    let keyB = b.age + b.name + b.email;
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
});
console.log('Bai 11: Sap xep cac user theo tuoi tang dan: ');
console.log(peoplearray.sort((a, b)));