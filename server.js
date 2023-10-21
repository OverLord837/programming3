var express = require("express");
let random = require("./random");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
res.redirect("index.html");
});

server.listen(3000, function () {
console.log("Example is running on port 3000");
});


var Grass = require('./grass')
var Bomb = require('./bomb')
var Dopingovxot = require('./dopingovxot')
var GrassEat = require('./grasseater')
var Predator = require('./predator')
grassArr = [];
grassEatArr = [];
predatorArr = []
bombArr = []
dopingovxotArr=[]
side = 20;
matrix = []

function createMatrix() {
    for (let i = 0; i < 40; i++) {
        matrix.push([])
        for (let j = 0; j < 40; j++) {
        matrix[i].push(0)
        }
        }
        
        function character(char, qantity) {
        for (let i = 0; i < qantity; i++) {
        var x = Math.floor(random(40));
        var y = Math.floor(random(40))
        matrix[x][y] = char;
        }
        }
        
        character(1, 400);
        character(2, 150);
        character(3, 1);
        character(4, 2);

    for (let y = 0; y < 40; y++) {
        for (let x = 0; x < 40; x++) {
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

createMatrix()

function playGame(){
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
io.emit('MATRIX', matrix)
}


setInterval(function(){
    playGame()
},1000)

