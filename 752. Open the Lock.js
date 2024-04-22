//752. Open the Lock
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let que=[target];
    let mem={

    }
    mem[target]=0;
    let getNextPositions=function(pos){
        let dir=[-1,1];
        let arr=pos.split("");
        let positions=[];
        let i,j;
    
    for (j=0;j<2;j++){
        let next ='';
        for (i=0;i<4;i++){
            let n=(10+parseInt(arr[i],10)+dir[j])%10;
            let next =[...arr]
            next[i]=n;
            positions.push(next.join(''));

        }
    }
    return positions;
    }   
    while (que.length) {
        let pos = que.shift();
        if (pos === '0000') {
            return mem[pos];
        } else {
            let next = getNextPositions(pos);
            next.forEach(function(n) {
                if (mem[n] === undefined && !deadends.includes(n)) {
                        mem[n] = mem[pos] + 1; 
                        que.push(n);
                }
            }) 
        }  
    }
    return -1;
}
