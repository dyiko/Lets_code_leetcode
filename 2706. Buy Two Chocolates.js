//2706. Buy Two Chocolates
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    let total= prices[0]+prices[1];
    let res;
    if (money>=total){
         res=money-total;
    }
    else{
        res=money;
    }
    return res;
};