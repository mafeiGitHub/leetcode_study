/* 输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length; //长度
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0) {
      return digits;
    }
  }
  //全为9的情况
  digits = [...Array(len + 1)].fill(0);
  digits[0] = 1;
  return digits;
};
let digits = [9, 9, 9];
console.log(plusOne(digits));
