/*      Simple D & D
1.0 roll dice
1.1 detect a natural 1 or a natrual 20
1.2 accept a modifier
1.3 accept enemy armor class
1.4 determine if hit, roll must be greater than armor class
1.5 accept weapon damage example: 2d6   3d4
1.6 split the version above into smaller version
1.7 display damage done
*/

var dice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var roll = dice.length;
var modifier = 5;

function rollDice(){
    for(var i = 0; i < roll; i++){
        const random = dice[Math.floor(Math.random()* 20)];
    }
    return random;
}
//console.log(rollDice());

function naturalNum(rollDice){ // looking for the natural numbers of 1 and 20
    console.log(rollDice);
    for(var j = 0; j < roll; j++){
        if(rollDice == 1){
            return true; // attack miss
        }

        if(rollDice == 20){
            return true; // attack hit
        }

        else{
            return false;
        }

    }
}
console.log(naturalNum(rollDice()));
