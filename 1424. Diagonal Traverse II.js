1424. Diagonal Traverse II

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let ans=[];
    let m = new Map();
    let maxi=0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[i].length;j++){
            if (!m.has(i+j)){
                m.set(i+j,[]);
            }
            m.get(i+j).push(nums[i][j]);
            maxi=Math.max(maxi,i+j);
        }
    }
    for (let i=0;i<=maxi;i++){
        if (m.has(i)){
            let values=m.get(i);
            for (let x=values.length-1;x>=0;x--){
                ans.push(values[x]);
            }
        }
    }
    return ans;
};