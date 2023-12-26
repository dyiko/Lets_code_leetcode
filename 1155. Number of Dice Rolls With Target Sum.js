//1155. Number of Dice Rolls With Target Sum
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */

const MOD = 1e9 + 7;
const N = 31;
const M = 1001;

function numRollsToTarget(n, k, target) {
  const answers = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => new Array(M).fill(-1))
  );

  function helper(die, k, target) {
    if (target > k * die) return 0;
    if (die === 1) {
      return target <= k ? 1 : 0;
    }
    if (answers[die][k][target] > -1) return answers[die][k][target];
    let ans = 0;
    for (let i = 0; i <= k && i <= target; i++) {
      ans += helper(die - 1, k, target - i);
      ans %= MOD;
    }

    return (answers[die][k][target] = ans % MOD);
  }

  if (n > target) return 0;
  return helper(n, k - 1, target - n);
};