// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
    const res = []
    for (let i = 0; i < numRows; i++) {
        const row = []
        for (let j = 0; j <=i ; j++) {
            if (j===0||j===i){
                row.push(1)
            }else {
                row.push(res[i-1][j-1]+res[i-1][j])
            }
        }
        res.push(row)
    }
    return res

};


// 1. 创建一个空数组 `res` 来存储杨辉三角的每一行。
// 2. 循环 `numRows` 次，每次生成一行杨辉三角。
// 3. 在循环中，创建一个空数组 `row` 来存储当前行的数字。
// 4. 在当前行中，循环 `i+1` 次，即当前行的长度，对于每个位置 `j`，如果 `j` 是当前行的第一个或最后一个数字，将其设为 1，否则将其设为上一行中相邻两个数字之和。
// 5. 将当前行 `row` 加入到 `res` 中。
// 6. 循环结束后，返回整个杨辉三角 `res`。

console.log(generate(5))