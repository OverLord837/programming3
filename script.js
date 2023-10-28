var socket = io();
var matrix = [];
var side = 20, n = 40, m = 40;
var b = document.getElementById("exanak");
    b.addEventListener("click", changeColors);
    var i = document.getElementById("iradardzutyun");
    i.addEventListener("click", iradardzutyun);
let colors = {
    green: "green",
    grey: "grey",
    yellow: "yellow",
    red: "red",
    black: "black",
    purple: "pink"
};

function setup() {
    createCanvas(n * side, m * side);
    background("grey");
}

function drawMatrix(matrix) {
    for (var y = 0; y < 40; y++) {
        for (var x = 0; x < 40; x++) {
            if (matrix[y][x] == 1) {
                fill(colors.green);
            } else if (matrix[y][x] == 0) {
                fill(colors.grey);
            } else if (matrix[y][x] == 2) {
                fill(colors.yellow);
            } else if (matrix[y][x] == 3) {
                fill(colors.red);
            } else if (matrix[y][x] == 4) {
                fill(colors.black);
            } else if (matrix[y][x] == 5) {
                fill(colors.purple);
            }
            rect(x * side, y * side, side, side);
        }
    }
}

function changeColors() {
    if (colors.green == "green") {
        colors = {
            green: "white",
            grey: "grey",
            yellow: "blue",
            red: "red",
            black: "black",
            purple: "purple"
        };
    } else {
        colors = {
            green: "green",
            grey: "grey",
            yellow: "yellow",
            red: "red",
            black: "black",
            purple: "pink"
        };
    }
    
}
function iradardzutyun(){
    
    socket.emit("alo")
}
socket.on('MATRIX', function (m) {
    drawMatrix(m);
});