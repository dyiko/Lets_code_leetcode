//1608. Special Array With X Elements Greater Than or Equal X
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for (let x = 0; x < (nums.length + 1); x++) {
        let count = 0;
        for (const n of nums)
            if (n >= x)
                count++;

        if (count === x)
            return count;
    }

    return -1;
};