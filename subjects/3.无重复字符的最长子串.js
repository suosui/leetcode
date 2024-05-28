/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (39.01%)
 * Likes:    8172
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 5.1M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 
 *  方法一：滑动窗口+哈希表
 *  思路：
 *     1. 定义一个哈希表，用于存储字符的索引位置
 *     2. 定义两个指针l和r，分别指向子串的左右边界
 *     3. 遍历字符串s，当r指向的字符在哈希表中存在时，说明出现重复字符，需要移动l指针
 *     4. 移动l指针时，需要将l指针指向的字符从哈希表中删除
 *     5. 重复步骤3和4，直到r指向的字符在哈希表中不存在，此时将r指向的字符添加到哈希表中
 *     6. 计算当前子串的长度，更新最大子串长度
 *     7. 重复步骤3-6，直到r指针遍历完整个字符串
 *     8. 返回最大子串长度
 *  复杂度：
 *     时间复杂度：O(n)，其中n为字符串s的长度
 *     空间复杂度：O(min(m, n))，其中m为字符集的大小，n为字符串s的长度
 *  代码：
 *      var lengthOfLongestSubstring = function (s) {
 *          let maxSubLength = 0;
 *          const hash = new Map();
 *          let l = 0;
 *          let r = 0;
 *          while (r < s.length && l <= r) {
 *              if (!hash.has(s[r])) {
 *                  hash.set(s[r], r);
 *                  r++;
 *              } else {
 *                  if (r - l > maxSubLength) {
 *                      maxSubLength = r - l;
 *                  }
 *                  let rIdx = hash.get(s[r]);
 *                  for (let j = l; j <= rIdx; j++) {
 *                      hash.delete(s[j]);
 *                  }
 *                  l = rIdx + 1;
 *              }
 *          }
 *          if (r - l > maxSubLength) {
 *              maxSubLength = r - l;
 *          }
 *          return maxSubLength;
 *      };
 */
var lengthOfLongestSubstring = function (s) {

};
// @lc code=end

