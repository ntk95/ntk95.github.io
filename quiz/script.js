function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];

            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    element.innerHTML = "Câu hỏi " + currentQuestionNumber + " trên " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Kết quả</h1>";
    gameOverHTML += "<h2 id='score'> Điểm số bạn đạt được: " + quiz.score + "/4</h2>";
    var element = document.getElementById('quiz');
    element.innerHTML = gameOverHTML;
}

var questions = [
    new Question("Ai đọc bản Tuyên ngôn Độc Lập khai sinh nước VNDCCH?", ["Lê Duẩn", "Võ Nguyên Giáp", "Hồ Chí Minh", "Trường Chinh"], "Hồ Chí Minh"),
    new Question("Nước Việt Nam Dân Chủ Cộng Hòa được khai sinh vào năm nào?", ["1944", "1943", "1946", "1945"], "1945"),
    new Question("Chiến thắng Điện Biên Phủ diễn ra vào năm nào?", ["1954", "1955", "1956", "1957"], "1954"),
    new Question("Nam - Bắc 2 miền Việt Nam thống nhất vào năm nào", ["1974", "1975", "1976", "1977"], "1975"),
];

var quiz = new Quiz(questions);

populate();