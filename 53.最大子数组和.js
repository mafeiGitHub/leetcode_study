
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = 0, ans = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (dp < 0) dp = nums[i]
        else dp += nums[i]
        ans = Math.max(dp, ans)
    }
    return ans
};
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))