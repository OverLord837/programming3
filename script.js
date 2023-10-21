var socket= io()
  let random = require("./random");
  var matrix =[];
  var side = 20,n=40,m=40;

function setup() {
    
    console.log( matrix)
    frameRate(10);
    createCanvas(n* side, m*side);
    background('#acacac');


    
}


function draw(m) {
    matrix=m;
    for (var y = 0; y < 40; y++) {
        for (var x = 0; x < 40; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);


            } else if (matrix[y][x] == 5) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }

        }
    }



    
}

socket.on('MATRIX',(m)=>{
matrix=m;
})

socket.on('MATRIX',(m)=>{
draw(m)
    })


// 2.1


