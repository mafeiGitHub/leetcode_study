/* 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString().split('')
    let len = y.length; 
    for(let i=0;i<Math.ceil(len/2);i++){
        if(y[i]!=y[len-1-i]){
            return false
        }
    
        
    }
    return true
};
var x = 1000021;
console.log(isPalindrome(x));