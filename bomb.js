class Bomb {

    constructor(x, y) {
        this.x = x;

        this.y = y;
        this.min=4
        this.max = 20
        this.count = Math.floor(Math.random() *(this.max-this.min+1) )+this.min;
        this.directions = [];

    }

    getNewCordinates() {


        this.directions = [

            [this.x, this.y - 1],

            [this.x, this.y + 1],

            [this.x + 1, this.y],

            [this.x - 1, this.y],
            [this.x, this.y - 2],

            [this.x, this.y + 2],

            [this.x + 2, this.y],

            [this.x - 2, this.y],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y - 1]


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
        let all = grassN.concat(grassEN)
        
        if (all) {
            this.count--
            if (this.count == 0) {
                matrix[this.y][this.x] = 0
                for (let y = 0; y < all.length; y++) {
                    for (let x = 0; x < all[y].length; x++) {
                        this.x=all[y][0]
                        this.y=all[y][1]
                        matrix[this.y][this.x] = 0
                    }
                }
            }
        }



    }

}


