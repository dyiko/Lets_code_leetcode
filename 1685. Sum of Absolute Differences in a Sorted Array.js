//1685. Sum of Absolute Differences in a Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let sum = 0;
    for (let a of nums) {
        sum += a;
    }
    const ans = new Array(nums.length);
    let leftSum = 0;
    let leftNum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightSum = sum - leftSum - nums[i];
        let rightNum = nums.length - 1 - leftNum;

        ans[i] = (leftNum * nums[i] - leftSum) + (rightSum - rightNum * nums[i]);
        leftNum++;
        leftSum += nums[i];
    }

    return ans;
};

/*
# Intuition
In first accumulating the total sum of all elements in the `nums` array.Then determining the  Modified sums for each element based on the cumulative sum from the left side and the sum from the right side of the array and storing these modified sums in the `ans` array.

# Approach
1. Initializing`sum` as 0 to hold the sum of all elements.Iterating through each element `a` in the `nums` array.Adding each element `a` to the `sum`.
2. Then creating an empty array `ans` with the same length as `nums` to store the modified sums.
3. Then variables `leftSum` and `leftNum` to track cumulative sum and the count of elements encountered from the left side, respectively.
4. Iterating through the `nums` array using a `for` loop.Calculate `rightSum` by subtracting the current element (`nums[i]`) and the `leftSum` from the total `sum`.
5. Calculating `rightNum` by subtracting `leftNum` from the total length of `nums`.
6. Computing the modified sum for the `i`th element in `ans` based on the given formula involving `leftSum`, `leftNum`, `rightSum`, `rightNum`, and the current element (`nums[i]`).
7. Updating `leftSum` by adding the current element and increment `leftNum`.Store the computed value in the `ans` array at index `i`.
8. Returning the `ans` array containing the modified sums for each element based on the calculations performed inside the loop.

# Complexity
- Time complexity:
time complexity of O(n), where `nums.length` represents the number of elements in the input array `nums`.

- Space complexity:
The space complexity is O(n), attributable to the additional space used for variables and the resulting array `ans`. 
*/