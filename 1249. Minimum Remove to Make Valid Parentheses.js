//1249. Minimum Remove to Make Valid Parentheses
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = []; 
    s = s.split(''); 
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') stack.push(i);
        if (s[i] == ')') {
            if (stack.length) stack.pop();
            else s[i] = '';
        }   
    }
    
    for (let i of stack) {
        s[i] = '';
    }
    return s.join('');
};