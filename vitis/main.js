$(document).ready(function() {
    let isResponShow = false;
    $(".respon-button").click(function() {
        let display = isResponShow ? 'none' : 'block';
        isResponShow = !isResponShow;
        $(".respon-menu").css("display", display);
    });
});