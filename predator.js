let random = require("./random");
var LivingCreature = require('./LivingCreature')
module.exports=class Predator  extends LivingCreature{
    
    constructor(x, y) {
        super(x,y)
        this.count = 8;
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
        let grassN = this.chooseCell(1)
        let grassEN = this.chooseCell(2)
        let all = grassN.concat(grassEN)
        let oneN =random(all)
        
        if (oneN) {
            this.count--;
            matrix[this.y][this.x] = 0
            this.x = oneN[0];
            this.y = oneN[1];
            
            matrix[this.y][this.x] = 3;
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEatArr) {
                if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
                    grassEatArr.splice(i, 1);
                    break;
                }
            }
        }else{
            this.move()
        }

        if(this.count<=0){
            this.die()
        }
    }
    
    die(){
        
       
        matrix[this.y][this.x] = 0
        
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            
            }
        }
    }
    move(){
        let emptyCells = this.chooseCell(0)
        let oneemptyCells =random(emptyCells)
        if(oneemptyCells){
            matrix[this.y][this.x] = 0
            this.x = oneemptyCells[0];
            this.y = oneemptyCells[1];
            matrix[this.y][this.x] = 3
        }
    }
}