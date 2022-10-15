/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode.cn/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (49.78%)
 * Likes:    533
 * Dislikes: 0
 * Total Accepted:    174.3K
 * Total Submissions: 350.4K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 
 * 
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：s = "egg", t = "add"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "foo", t = "bar"
 * 输出：false
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "paper", t = "title"
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 
 * 
 * 1 <= s.length <= 5 * 10^4
 * t.length == s.length
 * s 和 t 由任意有效的 ASCII 字符组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const hashS = new Map();
    const sameCharsS = {};
    const hashT = new Map();
    const sameCharsT = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hashS.has(char)) {
            const value = hashS.get(char);
            hashS.set(char, [...value, i]); // 把坐标存储起来
            sameCharsS[char] = [...value, i];
        } else {
            hashS.set(char, [i]); // 把坐标存储起来
        }
    }
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (hashT.has(char)) {
            const value = hashT.get(char);
            hashT.set(char, [...value, i]); // 把坐标存储起来
            sameCharsT[char] = [...value, i];
        } else {
            hashT.set(char, [i]); // 把坐标存储起来
        }
    }
    let patternS = "";
    let patternT = "";
    for (let key in sameCharsS) {
        patternS += sameCharsS[key].join(',');
    }
    for (let key in sameCharsT) {
        patternT += sameCharsT[key].join(',');
    }
    if (patternS === patternT) {
        return true;
    }
    return false;
};
// @lc code=end

