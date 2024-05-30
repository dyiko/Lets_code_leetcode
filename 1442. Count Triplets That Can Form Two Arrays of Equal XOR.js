//1442. Count Triplets That Can Form Two Arrays of Equal XOR
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let count = 0;
    let ln = arr.length;
    for (let i = 0; i < ln - 1; i++) {
        let a = 0;
        for (let j = i + 1; j < ln; j++) {
            a ^= arr[j - 1];
            let b = 0;
            for (let k = j; k < ln; k++) {
                b ^= arr[k];
                if (a === b) {
                    count++;
                }
            }
        }
    }
    return count;
};