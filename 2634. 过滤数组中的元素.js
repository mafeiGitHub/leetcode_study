/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i],i)){
            res.push(arr[i])
        }
    }
    return res
};
fn = function greaterThan10(n) { return n > 10; }
console.log(filter([0,10,20,30],fn))