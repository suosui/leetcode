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
 * 
 *  方法一：滑动窗口+哈希表
 *  思路：
 *     可以使用滑动窗口和哈希表解决这个问题。
 *     1. 使用两个指针 l 和 r 表示滑动窗口的左右边界，移动 r 扩大窗口，移动 l 收缩窗口。
 *     2. 使用哈希表 hashMap 维护目标字符 t 中字符的出现次数，使用 cnt 变量表示当前窗口中满足条件的字符个数, total 变量表示目标字符 t 中字符的总个数。
 *     3. 移动 r，如果 s[r] 在 t 中，更新哈希表 hashMap，如果 hashMap[s[r]] 的值小于等于 0，cnt++。
 *     4. 当 cnt 等于 total 时，说明当前窗口包含了所有目标字符，移动 l 缩小窗口，更新结果。
 *     5. 重复 3 和 4，直到 r 到达 s 的末尾。
 *     6. 返回结果。
 *  复杂度：
 *     时间复杂度：O(n)，n 表示字符串 s 的长度。
 *     空间复杂度：O(∣Σ∣)，Σ 表示字符集，∣Σ∣ 表示字符集的大小。
 *  代码：
 *      var minWindow = function (s, t) {
 *          // 如果 s 的长度小于 t 的长度，直接返回空字符串
 *          if (s.length < t.length) {
 *              return "";
 *          }
 *          let toReturn = "";
 *          // 初始化哈希表
 *          const hashMap = {};
 *          for (let char of t) {
 *              if (!hashMap[char]) {
 *                  hashMap[char] = {
 *                      total: 0,
 *                      cnt: 0,
 *                  }
 *              }
 *              hashMap[char].total++;
 *          }
 *          let l = 0;
 *          let r = 0;
 *          let cnt = 0;
 *          while (l <= r && r < s.length) {
 *              if (cnt === t.length) {// 当前窗口包含了所有目标字符
 *                  while (l < r) {// 缩小窗口
 *                      if (!hashMap[s[l]]) {
 *                          l++;
 *                      } else if (hashMap[s[l]].total < hashMap[s[l]].cnt) {
 *                          hashMap[s[l]].cnt--;
 *                          l++;
 *                      } else {
 *                          break;
 *                      }
 *                  }
 *                  if (r - l < toReturn.length || toReturn == '') { // 更新结果
 *                      toReturn = s.substring(l, r + 1);
 *                  }
 *                  hashMap[s[l]].cnt--;
 *                  l++;
 *                  cnt--;
 *                  r++;
 *              }
 *              if (!hashMap[s[r]]) {// s[r] 不在 t 中
 *                  r++;
 *                  continue;
 *              } else if (hashMap[s[r]].total > hashMap[s[r]].cnt) {// s[r] 在 t 中，且当前窗口中 s[r] 的个数小于 t 中 s[r] 的个数
 *                  hashMap[s[r]].cnt++;
 *                  cnt++;
 *                  if (cnt === t.length) {// 当前窗口包含了所有目标字符
 *                      continue;
 *                  }
 *              } else if (cnt < t.length) { // s[r] 在 t 中，且当前窗口中 s[r] 的个数等于 t 中 s[r] 的个数
 *                  hashMap[s[r]].cnt++;
 *              }
 *              r++; // 扩大窗口
 *          }
 *          return toReturn;
 *      };
 */
var minWindow = function (s, t) {

};
// @lc code=end

