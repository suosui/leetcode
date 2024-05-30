/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode.cn/problems/word-pattern/description/
 *
 * algorithms
 * Easy (44.98%)
 * Likes:    651
 * Dislikes: 0
 * Total Accepted:    183.5K
 * Total Submissions: 411.1K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 
 * 
 * 示例1:
 * 
 * 
 * 输入: pattern = "abba", s = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 
 * 输入:pattern = "abba", s = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 
 * 输入: pattern = "aaaa", s = "dog cat cat dog"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= pattern.length <= 300
 * pattern 只包含小写英文字母
 * 1 <= s.length <= 3000
 * s 只包含小写英文字母和 ' '
 * s 不包含 任何前导或尾随对空格
 * s 中每个单词都被 单个空格 分隔
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 
 *  方法一：哈希表
 *  思路：与205.同构字符串类似，只是这里的映射关系是单向的，所以需要两个哈希表
 *       注意：要避免与语言关键字冲突，所以在单词后面加上一个下划线
 *  复杂度分析：
 *      时间复杂度：O(n)，其中 n 是字符串 s 的长度
 *      空间复杂度：O(n)
 *  代码：
 *      var wordPattern = function (pattern, s) {
 *          let hashPattern = {};
 *          let hashS = {};
 *          let startIdx = 0;
 *          for (let i = 0; i < pattern.length; i++) {
 *              let { word, end } = getNextWord(startIdx, s);
 *              if (!word) {
 *                  return false;
 *              }
 *              word += '_'; // 避免与语言关键字冲突
 *              if (!hashPattern[pattern[i]]) {
 *                  hashPattern[pattern[i]] = word;
 *              }
 *              if (!hashS[word]) {
 *                  hashS[word] = pattern[i];
 *              }
 *              if (hashS[word] !== pattern[i]) {
 *                  return false;
 *              }
 *              if (hashPattern[pattern[i]] !== word) {
 *                  return false;
 *              }
 *              startIdx = end + 1;
 *          }
 *          let { word } = getNextWord(startIdx, s);
 *          if (word) {
 *              return false;
 *          }
 *          return true;
 *      };
 *      
 *      var getNextWord = function (startIdx, s) {
 *          let word = '';
 *          let i = startIdx;
 *          while (s[i] !== ' ' && i < s.length) {
 *              word += s[i];
 *              i++;
 *          }
 *          return { word, end: i };
 *      }
 */
var wordPattern = function (pattern, s) {
    
};
// @lc code=end

