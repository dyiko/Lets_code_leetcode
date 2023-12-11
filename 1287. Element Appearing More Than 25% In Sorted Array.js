//1287. Element Appearing More Than 25% In Sorted Array
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const len =arr.length;
    const p=Math.floor(len/4);
    for (let i=0;i<len-p;i++){
        if (arr[i]===arr[i+p]){
            return arr[i];
        }
    }
};