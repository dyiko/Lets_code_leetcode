//1235. Maximum Profit in Job Scheduling

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    let jobs=startTime.map((start,i)=>[start,endTime[i],profit[i]]);
    jobs.sort((a,b)=>a[1]-b[1]);
    let dp = new Array(jobs.length);
    dp[0] = jobs[0][2];
    for (let i = 1; i < jobs.length; i++) {
        let Prof = jobs[i][2];
        let l = binarySearch(jobs, i);
        if (l != -1) {
            Prof += dp[l];
        }
        dp[i] = Math.max(Prof, dp[i - 1]);
    }

    return dp[jobs.length - 1];

};
function binarySearch(jobs, i) {
    let start = 0, end = i - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (jobs[mid][1] <= jobs[i][0]) {
            if (jobs[mid + 1][1] <= jobs[i][0]) {
                start = mid + 1;
            } else {
                return mid;
            }
        } else {
            end = mid - 1;
        }
    }
    return -1;
}