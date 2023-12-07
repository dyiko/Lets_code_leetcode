//1903. Largest Odd Number in String
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let res = "";
    let len = num.length - 1
    for (let i = len; i >= 0; i--) {
        if (parseInt(num[i]) % 2 !== 0) {
            res = num.substring(0, i + 1);
            break;
        }
    }
    return res;
};