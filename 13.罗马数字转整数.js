/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolValues = new Map()
    symbolValues.set('I',1)
    symbolValues.set('V',5)
    symbolValues.set('X',10)
    symbolValues.set('L',50)
    symbolValues.set('C',100)
    symbolValues.set('D',500)
    symbolValues.set('M',1000)
    let ans = 0;
    let len = s.length;
    for(let i = 0;i<len;i++){
        const value = symbolValues.get(s[i])//当前值
        if(i<len-1 && value<symbolValues.get(s[i+1])){  //value 小于 右边的值 
            ans -= value
        }else{
            ans += value
        }
    }
    return ans

};
let s = "VXIII";
console.log(romanToInt(s));