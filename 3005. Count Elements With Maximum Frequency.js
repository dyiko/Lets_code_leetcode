//3005. Count Elements With Maximum Frequency
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freqCheck = new Array(101).fill(0);
    let track = new Array(100).fill(0);
    let top = -1;
    let maxFreq = 0;

    for (let num of nums) {
        if (freqCheck[num]++ === 0) {
            track[++top] = num;
        }
        if (freqCheck[num] > maxFreq) {
            maxFreq = freqCheck[num];
        }            
    }

    let count = 0;
    let i = 0;
    while (i <= top) {
        if (freqCheck[track[i++]] === maxFreq) {
            count++;
        }
    }

    return count * maxFreq;
};