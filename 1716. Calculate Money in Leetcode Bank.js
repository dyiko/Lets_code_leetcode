
//1716. Calculate Money in Leetcode Bank
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const count=Math.floor(n/7);
    const days=n%7;
    let total=((count*(count-1))/2)*7;
    total+=count*28
    total+=((days*(days+1))/2)+(count*days)
    return total
};