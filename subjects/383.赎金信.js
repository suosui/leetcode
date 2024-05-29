/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (61.19%)
 * Likes:    882
 * Dislikes: 0
 * Total Accepted:    493.4K
 * Total Submissions: 766.2K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 
 * 如果可以，返回 true ；否则返回 false 。
 * 
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 *  方法一：哈希表
 *  思路：没啥可说的
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(n)
 *  代码：
 *      var canConstruct = function (ransomNote, magazine) {
 *          const hash = {};
 *          for (let char of ransomNote) {
 *              if (!hash[char]) {
 *                  hash[char] = {
 *                      cnt: 0
 *                  }
 *              }
 *              hash[char].cnt++;
 *          }
 *          let cnt = 0;
 *          for (let char of magazine) {
 *              if (cnt >= ransomNote.length) {
 *                  return true;
 *              }
 *              if (!hash[char]) {
 *                  continue;
 *              } else if (hash[char].cnt > 0) {
 *                  cnt++;
 *                  hash[char].cnt--;
 *              }
 *          }
 *          if (cnt >= ransomNote.length) {
 *              return true;
 *          }
 *          return false;
 *      };
 *       
 * */
var canConstruct = function (ransomNote, magazine) {

};
// @lc code=end

