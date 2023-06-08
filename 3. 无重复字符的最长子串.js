/**
 * @param {string} s
 * @return {number}
 */
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function (s) {
    const set = new Set()
    let i = 0;//左边界
    let j = 0;//右边界
    let maxLength = 0;//最大长度
    if (s.length === 0) {
        return 0 //极端情况，s长度为0的情况
    }
    for (j; j < s.length; j++) {
        if (!set.has(s[j])) {//右边界不重复的话,添加这个元素
            set.add(s[j]);
            maxLength = Math.max(maxLength, set.size);//更新最大的长度

        } else {
            //set有重复的元素，让i不断++，知道滑动窗口没有重复元素为止
            while (set.has(s[j])) {//当右边检测到重复的元素的时候，删除左边边界
                set.delete(s[i]);
                i++;  //左边界++
            }
            set.add(s[j])
        }
    }
    return maxLength
};
s = "aabbcccvf"
console.log(lengthOfLongestSubstring(s))