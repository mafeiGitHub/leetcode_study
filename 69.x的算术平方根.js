/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0 || x == 1) {
    return x;
  }
  for (let i = 1; i <= x / 2; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i;
    }
  }
};
let x = 1;
console.log(mySqrt(x));
