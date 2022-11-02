/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (54.78%)
 * Likes:    1039
 * Dislikes: 0
 * Total Accepted:    240.6K
 * Total Submissions: 438.9K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s2, s1) {
    const ans = [];
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
            ans.push(i);
        }
        i++;
    }
    return ans;
};

const getNewHash = function (s1) {
    const hash = new Map();
    for (let char of s1) {
        hash.set(char, (hash.get(char) || 0) + 1);
    }
    return hash;
}
// @lc code=end

