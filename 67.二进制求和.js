/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var a = "0b" + a;
  var b = "0b" + b;
  var sum = BigInt(a) + BigInt(b);
  return sum.toString(2);
};
let a = "11",
  b = "1";
console.log(addBinary(a, b));
