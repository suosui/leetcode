/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 *
 * https://leetcode.cn/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (52.33%)
 * Likes:    1040
 * Dislikes: 0
 * Total Accepted:    434.6K
 * Total Submissions: 828.4K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 
 * 
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * 
 * 进阶：
 * 
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T
 * 的子序列。在这种情况下，你会怎样改变代码？
 * 
 * 致谢：
 * 
 * 特别感谢 @pbrother 添加此问题并且创建所有测试用例。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * 两个字符串都只由小写字符组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 *  方法一：双指针
 *  思路：
 *      1. 定义两个指针 i 和 j 分别指向 s 和 t 的初始位置
 *      2. 当 s[i] === t[j] 时，i 和 j 同时右移
 *      3. 当 s[i] !== t[j] 时，只有 j 右移
 *      4. 当 i < s.length 时，返回 false
 *      5. 当 j === t.length 时，返回 true
 *  复杂度：
 *      时间复杂度：O(n)
 *      空间复杂度：O(1)
 *  代码：
 *      var isSubsequence = function (s, t) {
 *          let i = 0;
 *          let j = 0;
 *          while (j < t.length) {
 *              if (s[i] === t[j]) {
 *                  i++;
 *                  j++;
 *              } else {
 *                  j++;
 *              }
 *          }
 *          if (i < s.length) {
 *              return false;
 *          }
 *          return true;
 *      };
 */
var isSubsequence = function (s, t) {
};
// @lc code=end

