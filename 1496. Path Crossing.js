//1496. Path Crossing
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let x=0,y=0;
    let set = new Set();
    set.add("0,0");
    for (let direction of path) {
        if (direction === 'E') {
            x++;
        } else if (direction === 'W') {
            x--;
        } else if (direction === 'N') {
            y++;
        } else if (direction === 'S') {
            y--;
        }
        let posi=`${x},${y}`
        if (set.has(posi)){
            return true;
        }
        set.add(posi);
    }
    return false;
};