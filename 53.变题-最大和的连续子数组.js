
/**
 * @param {number[]} nums
 * @return {number}
 */
// temp left right
var maxSubArray = function (nums) {
    let dp = 0
    let ans = 0
    let temp = 0
    let left = 0
    let right = 0
    for (let i=0;i<nums.length;i++){
        if(dp<0){
            dp=nums[i]
            temp = i
            dp = nums[i]
        }
        else dp += nums[i]
        if(dp<ans){
            left = temp
            ans = dp
            right = i
        }
        ans = Math.max(dp,ans)
    }
    let path = []
    for (let i = left; i < right; i++) {
        path.push(nums[i])

    }
    return path
};
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))