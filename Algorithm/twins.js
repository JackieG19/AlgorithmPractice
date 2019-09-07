/* Given array of random integers -1000 to 1000, Find the pair that = 0 (ex. -1 + 1 = 0)
*1.0 Random number generator to create array of x int
1.1 Find first pair of numbers to equal 0
1.2 Find all possible pairs
1.3 Create an array of 10,000 integer
*/

var min = -1000;
var max = 1000;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
console.log(random);

