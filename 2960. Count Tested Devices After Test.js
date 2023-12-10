//2960. Count Tested Devices After TestOperations
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let k=0;
    for (let a of batteryPercentages){
        k+=a>k?1:0;
    }
    return k;
};