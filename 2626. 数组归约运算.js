/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let val = init
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }

    return val
};
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) {
    return accum + curr * curr;
}
init = 100

console.log(reduce(nums, fn, init))