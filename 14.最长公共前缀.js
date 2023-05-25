/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = "";
  let minLength = Number.MAX_SAFE_INTEGER;
  strs.map((item) => {
    if (minLength > item.length) {
      minLength = item.length;
      prefix = item.substring(0, minLength); //将最小长度的字符串作为初始值
    }
  });

  for (const ch of strs) {//遍历数组
    for (let i = 0; i <= prefix.length; i++) {//遍历字符串，长度为最小的字符串
      if (ch[i] != prefix[i]) {//如果字符串的第i位不匹配prefix的第i位
        prefix = prefix.slice(0,i);//取子串
        break;
      }
    }
  }
  return prefix;
};
let strs = ["dsfasd",'dssss','dsss'];
console.log(longestCommonPrefix(strs));

