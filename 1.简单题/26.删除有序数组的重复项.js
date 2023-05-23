/**
 * @param {number[]} nums
 * @return {number}
 */
/* var removeDuplicates = function (nums) {
  let len = nums.length;
  let newArr = [];
  for (let i = 0; i < len; i++) {
    let temp = nums[i];
    if (temp !== nums[i + 1]) {
      newArr.push(temp);
      temp = nums[i + 1];
      continue;
    }
  }
  return newArr;
}; */

var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len == 0) return 0;
  let fast = 1,
    slow = 1;
  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};
let nums = [1, 1, 1, 2, 3, 10];
console.log(removeDuplicates(nums));
