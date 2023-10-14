// var matrix = [
//     [1, 0, 0, 0],
//     [2, 0, 0, 0],
//     [1, 0, 0, 0],
//     [1, 0, 0, 0],
//     [1, 0, 0, 0],
//     [2, 0, 0, 0],
//     [1, 0, 0, 0]
// ];
let grassArr = [];
let grassEatArr = [];
let predatorArr = []
let bombArr = []
let dopingovxotArr=[]
var side = 10;
var matrix = []
function setup() {
    matrix = randommatrix(10,10,50, 20, 10,5,8)
    console.log( matrix)
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length *
        side);
    background('#acacac');


    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassobj = new Grass(x, y)
                grassArr.push(grassobj)
            } else if (matrix[y][x] == 2) {
                grassEatObj = new GrassEat(x, y)
                grassEatArr.push(grassEatObj)
            } else if (matrix[y][x] == 3) {
                predatorObj = new Predator(x, y)
                predatorArr.push(predatorObj)
            }else if (matrix[y][x] == 4) {
                bombObj = new Bomb(x,y)
            bombArr.push(bombObj)
            }else if (matrix[y][x] == 5) {
                dxObj = new Dopingovxot(x,y)
            dopingovxotArr.push(dxObj)
            }
            
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
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



    for (let a = 0; a < grassArr.length; a++) {
        grassArr[a].mull()
    }
    for (let a = 0; a < grassEatArr.length; a++) {
        grassEatArr[a].eat();
        
    }
    for (let a = 0; a < predatorArr.length; a++) {

        predatorArr[a].eat();
    }
    for (let a = 0; a<bombArr.length; a++) {
            bombArr[a].eat()
    }
    for (let a = 0; a<dopingovxotArr.length; a++) {
        dopingovxotArr[a].eat()
}

}



function randommatrix(Sx, Sy, G, GE, P,B,DX) {
    let arr = []
    for (let i = 0; i < Sx; i++) {
        arr.push([])
        for (let j = 0; j < Sy; j++) {
            arr[i].push(0)
        }
    }
    for (let j = 0; j < G; j++) {
        let x = Math.floor(Math.random() * Sx)
        let y = Math.floor(Math.random() * Sy)
        arr[y][x] = 1;

    }
    for (let j = 0; j < GE; j++) {
        let x = Math.floor(Math.random() * Sx)
        let y = Math.floor(Math.random() * Sy)
        arr[y][x] = 2;

    }
    for (let j = 0; j < P; j++) {
        let x = Math.floor(Math.random() * Sx)
        let y = Math.floor(Math.random() * Sy)
        arr[y][x] = 3;

    }
    for (let j = 0; j < B; j++) {
        let x = Math.floor(Math.random() * Sx)
        let y = Math.floor(Math.random() * Sy)
        arr[y][x] = 4;

    }
    for (let j = 0; j <= DX; j++) {
        let x = Math.floor(Math.random() * Sx)
        let y = Math.floor(Math.random() * Sy)
        arr[y][x] = 5;

    }

    return arr
}


// 2.1


