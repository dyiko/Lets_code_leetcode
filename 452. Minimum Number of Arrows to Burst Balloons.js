//452. Minimum Number of Arrows to Burst Balloons
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let arr = 1;
    let end = points[0][1];
    let len = points.length

    for (let i = 1; i <len ; i++) {
        if (points[i][0] > end) {
            arr++;
            end = points[i][1];
        } else {
            end = Math.min(end, points[i][1]);
        }
    }

    return arr;
};