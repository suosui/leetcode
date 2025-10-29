/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (45.02%)
 * Likes:    3413
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 3.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 如果非空，则仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let common = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i];
        let newCommon = '';
        for (let j = 0; j < str.length; j++) {
            if (str[j] !== common[j]) {
                common = newCommon;
            } else {
                newCommon += str[j];
            }
        }
        if (newCommon.length < common.length) {
            common = newCommon;
        }
    }
    return common;
};
// @lc code=end

