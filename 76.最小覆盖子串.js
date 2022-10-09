/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (44.83%)
 * Likes:    2183
 * Dislikes: 0
 * Total Accepted:    353.5K
 * Total Submissions: 787.8K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) {
        return "";
    }
    let left = 0;
    let right = 0;
    let hash = getHash(t);
    let size = hash.size;
    let res = [];
    while (right < s.length) {
        while (size > 0 && right < s.length) {
            const char = s[right];
            if (hash.has(char)) {
                const remain = hash.get(char) - 1;
                if (remain === 0) {
                    size -= 1;
                }
                hash.set(char, remain);
            }
            if (size === 0) {
                break;
            }
            right++;
        }
        if (size > 0) {
            break;
        }
        while (size === 0) {
            const char = s[left];
            if (hash.has(char)) {
                const remain = hash.get(char) + 1;
                if (remain > 0) {
                    size++;
                }
                hash.set(char, remain);
            }
            if (size > 0) {
                break;
            }
            left++;
        }
        const curMinSubStr = s.substring(left, right + 1);
        res.push(curMinSubStr)
        if (right === s.length - 1) {
            break;
        }
        left++;
        right = left;
        hash = getHash(t);
        size = hash.size;
    }
    return res.sort((a, b) => { return a.length - b.length })[0] || '';
};

var getHash = function (t) {
    const hash = new Map();
    for (let char of t) {
        if (hash.has(char)) {
            hash.set(char, hash.get(char) + 1);
            continue;
        } else {
            hash.set(char, 1);
        }
    }
    return hash;
}
// @lc code=end

