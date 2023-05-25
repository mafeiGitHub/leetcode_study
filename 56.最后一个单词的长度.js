/* 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

let s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));
