Frequency of the Most Frequent Element-

var maxFrequency = function(nums, k) {
   //intializing sum,start,end and res
   let sum = 0, start=0, end=0, res = 0;
   //sorting in ascending order
   nums.sort((a,b) => a - b); 
   //iterating the array element untill it reach the frequencey
    while(end < nums.length){
        sum += nums[end] 
        if(nums[end] * (end-start+1) > sum + k){ 
            sum -= nums[start++]
        }
        res = Math.max(res, end-start+1) 
        end++
    }
    return res

};