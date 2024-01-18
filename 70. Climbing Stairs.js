//70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let w = 1;
        for (let i = 1; i <= n / 2; i++) {
            let sum = 1;
            for (let j = i; j < 2 * i; j++) {
                sum *= (n - j) / (j - i + 1);
            }
            w +=sum;
        }
        return w;
};