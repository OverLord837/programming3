class Dopingovxot {


    constructor(x, y) {
        this.x = x;

        this.y = y;

        this.directions = [];

        this.energy = 8;
        this.count = 8;
    }

    getNewCordinates() {
        this.directions = [

            [this.x - 1, this.y - 1],

            [this.x, this.y - 1],

            [this.x + 1, this.y - 1],

            [this.x - 1, this.y],

            [this.x + 1, this.y],

            [this.x - 1, this.y + 1],

            [this.x, this.y + 1],

            [this.x + 1, this.y + 1]

        ];
    }

    chooseCell(character) {
        this.getNewCordinates()
        var found = [];

        for (var i in this.directions) {

            var x = this.directions[i][0];

            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {

                    found.push(this.directions[i]);

                }

            }
        }

        return found;

    }
    eat() {
        let grassN = this.chooseCell(1)
        let grassEN = this.chooseCell(2)
        let predatorN = this.chooseCell(3)
        let bombN = this.chooseCell(4)
        let all = grassN.concat(grassEN.concat(predatorN.concat(bombN)))


        if (all) {

            if (this.count > 0) {
                matrix[this.y][this.x] = 0
                for (let y = 0; y < all.length; y++) {
                    for (let x = 0; x < all[y].length; x++) {
                        this.x = all[y][0]
                        this.y = all[y][1]
                        matrix[this.y][this.x] = 0
                    }
                }
                this.move()
            } else {
this.die()
            }
        }
    }
    move() {
this.count--
        let emptyCells = this.chooseCell(0)
        let oneemptyCells = random(emptyCells)
        if (oneemptyCells) {

            matrix[this.y][this.x] = 0
            this.x = oneemptyCells[0];
            this.y = oneemptyCells[1];
            matrix[this.y][this.x] = 5

        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in dopingovxotArr) {
            if (this.x == dopingovxotArr[i].x && this.y == dopingovxotArr[i].y) {
                dopingovxotArr.splice(i, 1);
                break;

            }
        }


    }

}