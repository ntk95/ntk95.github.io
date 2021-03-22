//Bài 1
//Viết hàm getDateAgo(date, days) để hiển thị ngày trong tuần ở định dạng ngắn gọn: 
//‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.



//Bài 2:
//Tạo một hàm getDateAgo(date, days) để trả về ngày của tháng, ngày trước kể từ ngày.
//Ví dụ: nếu hôm nay là ngày 20, thì getDateAgo(new Date(), 1) 
//phải là 19 và getDateAgo(new Date(), 2) phải là 18.
//Nên hoạt động đúng trong days = 365 hoặc hơn:
//let date = new Date(2015, 0, 2);
//alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
//alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
//alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
let days = 13;
function getDateAgo(){
    var date = new Date();
    date.setDate(date.getDate() - days);
    return date;
}
console.log("Bài 2: 13 ngày trước là ngày: "+ getDateAgo());


//Bài 3:
//Viết một hàm getLastDayOfMonth(year, month) trả về ngày cuối cùng của tháng. 
//Đôi khi đó là ngày 30, 31 hoặc thậm chí 28/29 đối với tháng 2.
//Thông số:
//year – năm có bốn chữ số, ví dụ như năm 2012.
//year – tháng, từ 0 đến 11.
//Ví dụ: getLastDayOfMonth(2012, 1) = 29 (năm nhuận, tháng 2).

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log("Bài 3: Ngày cuối cùng của tháng 2/2020 là: "+ getLastDayOfMonth(2020, 1));  

//Bài 4
//Tạo một hàm getSecondsToTomorrow() trả về số giây cho đến ngày mai.
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
}
console.log("Bài 4: Còn " + getSecondsToTomorrow() + " giây nữa là đến ngày mai");


//Bài 5
//Viết một hàm formatDate(date) sẽ định dạng date như sau:
//Nếu kể từ ngày trôi qua dưới 1 giây, thì “ngay bây giờ”.
//Ngược lại, nếu kể từ ngày trôi qua dưới 1 phút, thì “n giây trước”.
//Ngược lại, nếu ít hơn một giờ, thì “m min. Ago”.
//Nếu không, ngày đầy đủ ở định dạng “DD.MM.YY HH: mm”. Đó là: “day.month.year hours: minutes”, 
//,tất cả đều ở định dạng 2 chữ số, ví dụ: 31.12.16 10:00.
//Ví dụ: 
//alert( formatDate(new Date(new Date - 1)) ); // "right now"
//alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
//alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
//  // yesterday's date like 31.12.16 20:00
//alert( formatDate(new Date(new Date - 86400 * 1000)) );



//Bài 6:
//Viết hàm tính toán chênh lệch giữa 2 ngày bất kỳ ở dạng ( dd/mm/yyy hoặc mm/dd/yyyy). 
//Check xem chênh lệch bao nhiêu ngày 
let date1 = new Date("03/02/2021"); 
let date2 = new Date("03/22/2021"); 

function chenh2ngay(date1, date2) {
    let tinhchenhtg = date2.getTime() - date1.getTime(); 
    let tinhchenhngay = tinhchenhtg  / (1000 * 3600 * 24); 
    return tinhchenhngay;
}
console.log("Bài 6: Chênh lệch 2 ngày giữa "
+ date1 + " và " 
+ date2 + " là:  " + chenh2ngay(date1, date2));