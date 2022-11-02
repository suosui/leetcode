/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode.cn/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (44.18%)
 * Likes:    788
 * Dislikes: 0
 * Total Accepted:    229.3K
 * Total Submissions: 517.8K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 * 
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 方法1
var checkInclusion = function (s1, s2) {
    let hash = getNewHash(s1);
    const len = s2.length - s1.length + 1;
    let i = 0;
    while (i < len) {
        let char = s2[i];
        hash = getNewHash(s1);
        let j = i;
        let cnt = 0;
        while (hash.has(char)) {
            cnt++;
            let left = hash.get(char);
            left -= 1;
            if (left === 0) {
                hash.delete(char);
            } else {
                hash.set(char, left);
            }
            j++;
            char = s2[j];
        }
        if (cnt === s1.length) {
            return true;
        }
        i++;
    }
    return false;
};

const getNewHash = function (s1) {
    const hash = new Map();
    for (let char of s1) {
        hash.set(char, (hash.get(char) || 0) + 1);
    }
    return hash;
}

// 方法2
// var checkInclusion = function (s1, s2) {
//     const sorted = s1.split('').sort().join('');
//     const len = s2.length - s1.length + 1;
//     for (let i = 0; i <= len; i++) {
//         const char = s2[i];
//         if (s1.indexOf(char) > -1) {
//             const sliced = s2.slice(i, i + s1.length);
//             if (sliced.split('').sort().join('') === sorted) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };
// @lc code=end

