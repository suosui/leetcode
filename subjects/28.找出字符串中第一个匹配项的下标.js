/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 *
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Medium (41.50%)
 * Likes:    2221
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.5M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0
 * 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：haystack = "leetcode", needle = "leeto"
 * 输出：-1
 * 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack 和 needle 仅由小写英文字符组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 *  方法一：双指针
 *  思路，过程：没啥可说的
 *  复杂度：
 *       时间复杂度：O(n)
 *       空间复杂度：O(n)
 *  代码：
 *      var strStr = function (haystack, needle) {
 *          let i = 0;
 *          let l = 0;
 *          let r = 0;
 *          let idx = 0;
 *          while (i <= haystack.length - needle.length) {
 *              if (haystack[r] === needle[idx]) {
 *                  if (idx === needle.length - 1) {
 *                      return i;
 *                  }
 *                  r++;
 *                  idx++;
 *              } else {
 *                  i++;
 *                  l = i;
 *                  r = i;
 *                  idx = 0;
 *              }
 *          }
 *          return -1;
 *      };
 */
var strStr = function (haystack, needle) {
};
// @lc code=end

