/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  const n = Math.floor(s.length / 2);
  for (let i = 0; i < n; i++) {
    if (s[i] != s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
