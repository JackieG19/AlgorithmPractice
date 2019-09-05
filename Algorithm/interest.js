/*      Interest
*1.0 Create a function that takes
    *- a balance
    *- time in year
    *- monthly interest gained
    *- return the new balance with the interest only
    *- affecting each year

1.1 Update so the interest earned is calculated each month

1.2 Add new parameter deposit
    - deposits are applied post
    - interest return new balance

1.3 Add new parameter deposit
    - how many months between each deposit occurance
    - 1 = each months
    - 2 = every other months

1.4 Add new parameter withdrawal and withdrawl occurance
    - withdrawals are applied pre interest return new balance

2.0 Objectify this problem
*/


var balance = 213975;
console.log("Your current balance is: ", balance);

var startDate = new Date("2017-10-01");
var endDate = new Date("2019-8-01");

var interest = 5.7;

// var balWithInt = balance * interest;
// console.log(balWithInt);

// var round = Math.round(balWithInt)
// console.log(round);

function monthsBtwn(dtFrom, dtTo){
    var getMonths = dtTo.getMonth() - dtFrom.getMonth() + 12 * (dtTo.getFullYear() - dtFrom.getFullYear());
    console.log("Total months between 10/1/2017 - 8/1/2019:", getMonths);
}
console.log(monthsBtwn(startDate, endDate));
