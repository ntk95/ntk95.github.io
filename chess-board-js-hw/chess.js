function colorNormal(x, y, color) {
    var chessBoard = document.getElementById("chessBoardNormal");
    for (var i = 0; i < x; i++) {
        var row = chessBoard.appendChild(document.createElement("div"));
        for (var j = 0; j < y; j++) {
            var span = document.createElement('span');
            if (i & 1) { // odd
                if (j & 1) { // white

                } else { // black
                    span.style.backgroundColor = color;
                }
            } else { // even
                if (j & 1) { // black
                    span.style.backgroundColor = color;
                }
            }

            row.appendChild(span);
        }
    }
}

function colorRandom(x, y) {
    colorNormal(8, 8, Math.random() > .5 ? 'black' : '#CFD65C');
}

function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

colorNormal(8, 8, 'black');