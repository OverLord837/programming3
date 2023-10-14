class GrassEat  extends LivingCreature{

    constructor(x, y) {
        super(x,y)
        this.energy = 8;
        this.directions = [];

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
       return super.chooseCell(character)

    }
    eat() {
        let grassesN = this.chooseCell(1)
        let oneGrassN = random(grassesN)


        if (oneGrassN) {
            this.energy++;
            matrix[this.y][this.x] = 0
            this.x = oneGrassN[0];
            this.y = oneGrassN[1];
            matrix[this.y][this.x] = 2
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move()
        }
        if (this.energy > 12) {
            this.mull()
        }


    }


    move() {

        let emptyCells = this.chooseCell(0)
        let oneemptyCells = random(emptyCells)
        if (oneemptyCells) {
            this.energy--;
            if (this.energy > 0) {

                matrix[this.y][this.x] = 0
                this.x = oneemptyCells[0];
                this.y = oneemptyCells[1];
                matrix[this.y][this.x] = 2
            } else {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in grassEatArr) {
            if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
                grassEatArr.splice(i, 1);
                break;

            }
        }
       

    }
    mull() {
        var newCell = random(this.chooseCell(0));

        if (newCell) {

            var grassEatObj = new GrassEat(newCell[0], newCell[1]);

            grassEatArr.push(grassEatObj);

            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = this.energy / 2



        }

    }
}