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
 * 
 *  方法一：哈希表
 *  思路：
 *      把题目理解了就能很容易解决，同构字符串就是两个字符串中的字符一一对应，即一个字符在一个字符串中出现的位置和另一个字符串中对应字符出现的位置相同。
 *  复杂度：
 *      时间复杂度：O(n)，n 为字符串长度
 *      空间复杂度：O(n)
 *  代码：
 *      var isIsomorphic = function (s, t) {
 *          const hashS = {};
 *          const hashT = {};
 *          for (let i = 0; i < s.length; i++) {
 *              if (!hashS[s[i]]) {
 *                  hashS[s[i]] = t[i];
 *              }
 *              if (!hashT[t[i]]) {
 *                  hashT[t[i]] = s[i];
 *              }
 *              if (hashS[s[i]] !== t[i]) {
 *                  return false;
 *              }
 *              if (hashT[t[i]] !== s[i]) {
 *                  return false;
 *              }
 *          }
 *          return true;
 *      };
 */
var isIsomorphic = function (s, t) {

};
// @lc code=end

