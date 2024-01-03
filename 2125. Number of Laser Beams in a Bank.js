//2125. Number of Laser Beams in a Bank
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let ans = 0;
    let temp = 0;

    for (let i = 0; i < bank.length; i++) {
        let n = countOnesInString(bank[i]);
        if (n === 0) continue;
        ans += temp * n;
        temp = n;
    }

    return ans;
};
function countOnesInString(str) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[j] === '1') {
            count++;
        }
    }
    return count;
}