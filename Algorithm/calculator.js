/* String Calculator

- accept 1 parameter (Equation: str)
- the equation will be string representation of a mathmatical problem
- program should extract the numbers and operater and pperform the calculation

ex. in: "10 + 13"  out: 23s
in: "5*10"  out: 50

1.0 accept 2 numbers and 1 operater + = x / %

1.1 accept multipule numbers and operater pendas order of operation not required

1.2 apply the mdas order of operation

1.3 accpet a 2nd parameter (radix: int) limit: 2 - 36       interpret the number
    using the provided radix return the result in decimal form

1.4 determine if there is aways to convert the decimal result to the radix
*/


var str = "10 + 13";

var a = str.split(" ");
console.log(a); // [ '10', '+', '13' ]

if(isNaN(a[1])){
    console.log("not a number");
}

switch(){
    case '+':

}
