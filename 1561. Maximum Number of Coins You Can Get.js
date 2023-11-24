1561. Maximum Number of Coins You Can Get

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b)=>a-b);
    let j=0;
    let len =piles.length;
    let coins=0;
    for (let i=len-2;i>0;i-=2){
        coins = coins+piles[i];
        if (++j==len/3){
            return coins
        }
    }
};