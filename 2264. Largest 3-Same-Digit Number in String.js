//2264. Largest 3-Same-Digit Number in String
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let c=null;
    for (let i=1;i+1<num.length;i++){
        let c1=num.charAt(i-1);
        let c2=num.charAt(i);
        let c3=num.charAt(i+1);
        if (c1===c2 && c2===c3){
            if (c===null||c2>c){
                c=c2;
            }
        }
    }
    if (c===null){
        return "";
    }
    let sb = ""
    for (let i=0;i<3;i++){
        sb+=c;
    }
    return sb
};