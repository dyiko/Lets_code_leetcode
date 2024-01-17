//1207. Unique Number of Occurrences
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b);
    let val = [];
    for (let i = 0; i < arr.length; i++) {
        let cnt = 1;
        while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            cnt++;
            i++;
        }
        val.push(cnt);
    }
    val.sort((a, b) => a - b);
    for (let i = 1; i < val.length; i++) {
        if (val[i] === val[i - 1]) {
            return false;
        }
    }
    return true;
};