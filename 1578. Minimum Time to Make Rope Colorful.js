//1578. Minimum Time to Make Rope Colorful
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time =0
    let i=0
    let j=0
    let len= neededTime.length
    while (i<len&& j<len ){
        let theTime=0
        let theTimeMax=0
        while (j<len && colors[i]===colors[j]){
            theTime+=neededTime[j];
            theTimeMax=Math.max(theTimeMax,neededTime[j])
            j++
        }
        time+=theTime - theTimeMax
        i=j;
    }
    return time;
};