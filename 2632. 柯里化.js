/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    let args =[]
    return function curried() {
        args.push(...arguments)
        if(args.length<fn.length){
            return curried
        }else{
            return fn(...args)
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
const fn = function sum(a, b, c) { return a + b + c; }

const curriedSum = curry(fn);
console.log(curriedSum(1,2)(3))