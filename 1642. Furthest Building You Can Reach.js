//1642. Furthest Building You Can Reach
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let ljump=new Array( ladders).fill(0)
    let i;
    for(i=1;i<heights.length;i++){
        let jump=heights[i]-heights[i-1]
        if(jump>0){
            if(jump>ljump[0]){
                let j=ljump.length-1
                while(j>=0 && ljump[j]>jump){
                    j--
                }
               bricks-=ljump.shift()
                ljump.splice(j,0,jump)
            }else{
                bricks-=jump
            }
            if(bricks<0) return i-1
        }
    }
    return i-1
};