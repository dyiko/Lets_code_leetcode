//402. Remove K Digits
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let st = [];
    for(let i = 0;i<num.length;i++){
        while(k && st.length && st[st.length-1] > num[i]){
            st.pop();
            k--;
        }
        st.push(num[i]);
    }
    while(k){
        st.pop();
        k--;
    }
    st = st.join('');
    st = st.replace(/^0+/, '') || "0";
    return st;
};