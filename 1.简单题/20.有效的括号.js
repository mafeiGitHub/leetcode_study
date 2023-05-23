// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop(); //出栈
    } else {
      stk.push(ch);
    }
  }
  // console.log(stk.length);
  return !stk.length;
};

// repalce方法
/* var isValid = function (s) {
  while (true) {
    let l = s.length;
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
    if (s.length === l) {
      return l === 0;
    }
  }
}; */
let s = "()[]{}";
console.log(isValid(s));
