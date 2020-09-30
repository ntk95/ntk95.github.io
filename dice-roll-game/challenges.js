// Khai báo các biến trò chơi cơ bản
var scores, roundScore, activePlayer, prevDiceRoll, gamePlaying;

// Khởi tạo trò chơi
init();

// Thêm lắng nghe sự kiện vào nút làm cho xúc xắc quay (sử dụng chức năng ẩn danh)
document.querySelector('.btn-roll').addEventListener('click', function() {

    // Kiểm tra xem trò chơi có đang được chơi không
    if (gamePlaying) {

        // Create two random numbers for the dices
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // Hiển thị kết quả
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';
        document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice2').src = 'dice-' + dice2 + '.png';

        // Kiểm tra xem người chơi có quay 6 hai lần liên tiếp hay không
        if (dice1 === 6 && prevDiceRoll === 6) {
            // Người chơi mất toàn bộ số điểm của mình
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
            // Cập nhật điểm của vòng nếu lần lắc không phải là 1
        } else if (dice1 !== 1 && dice2 !== 1) {
            // Cộng điểm nếu số xúc xắc khác 1
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Đến lượt người chơi khác  
            nextPlayer();
        }

        // Lưu lần tung xúc xắc trước đó trên một biến
        prevDiceRoll = dice1;

    }

});

// Chức năng cho phép tích lũy điểm 
document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {

        // Thêm điểm số hiện tại vào điểm số tổng
        scores[activePlayer] += roundScore;

        // Cập nhật UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Kiểm tra xem điểm số chiến thắng có được xác định trước là 100 hay người dùng đã đặt mục tiêu cụ thể hay không
        // Lưu đầu vào điểm cuối cùng trong một biến
        var input = document.getElementById('winningScore').value;
        var winningScore;

        // Không xác định, 0, null hoặc "" bị ép buộc thành sai, bất kỳ thứ gì khác bị buộc thành đúng
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Kiểm tra xem người chơi có thắng trò chơi không
        if (scores[activePlayer] >= winningScore) {

            // Thay đổi tên của người chơi thành 'Bạn đã thắng!'
            document.querySelector('#name-' + activePlayer).textContent = 'Bạn đã thắng!';

            // Ẩn giấu xúc xắc
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';

            // Thêm lớp 'Bạn đã thắng!' vào người chơi
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            // Xóa trạng thái người chơi đang hoạt động khỏi người chiến thắng
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            // Thay đổi biến 'gamePlaying' thành 'false'
            gamePlaying = false;

        } else {
            // Nếu người chơi thắng trò chơi, thì đến lượt người chơi tiếp theo
            nextPlayer();
        }
    }
});

// Khởi động lại trò chơi sau khi nhấp vào nút 'Game mới'
document.querySelector('.btn-new').addEventListener('click', init);

// Hàm khởi chạy trò chơi
function init() {

    // Đặt biến 'gamePlaying' thành 'true'
    gamePlaying = true;

    // Đặt cả hai điểm trở lại 0
    scores = [0, 0];

    // Đặt activePlayer trở lại thành 'Người chơi 1'
    activePlayer = 0;

    // Đặt roundScore trở lại 0
    roundScore = 0;

    // Ẩn xúc xắc ngay từ đầu trò chơi
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';

    // Đặt điểm số thành 0 theo mặc định (sử dụng phương pháp 'getElementById')
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Xóa 'trạng thái người chiến thắng' khỏi người chơi chiến thắng
    document.getElementById('name-0').textContent = 'Người chơi 1';
    document.getElementById('name-1').textContent = 'Người chơi 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Xóa 'trạng thái hoạt động' khỏi người chơi chiến thắng
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // Đảm bảo rằng 'trạng thái hoạt động' từ 'Người chơi 2' được xóa và chuyển cho 'Người chơi 1'
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

// Chức năng nhường lượt cho người chơi tiếp theo
function nextPlayer() {

    // Đến lượt người chơi tiếp theo nếu số xúc xắc là 1 (sử dụng toán tử bậc ba)
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Đặt roundScore trở lại 0
    roundScore = 0;

    // Đặt lại số điểm hiện tại về 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Thêm lớp đang hoạt động cho người chơi hiện có lượt
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Ẩn xúc xắc sau khi người chơi đang hoạt động thay đổi
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';

}