/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode.cn/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (41.26%)
 * Likes:    700
 * Dislikes: 0
 * Total Accepted:    574.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "Hello World"
 * 输出：5
 * 解释：最后一个单词是“World”，长度为 5。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 * 解释：最后一个单词是“moon”，长度为 4。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "luffy is still joyboy"
 * 输出：6
 * 解释：最后一个单词是长度为 6 的“joyboy”。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 
 *  方法一：双指针
 *  思想，过程：没啥说的。直接看代码吧
 *  复杂度：
 *      时间复杂度：O(n)
 *      空间复杂度：O(n)
 *  代码：
 *      var lengthOfLastWord = function (s) {
 *          let l = 0;
 *          let r = 0;
 *          let i = 0;
 *          let lastLength = 0;
 *          while (i < s.length) {
 *              if (s[i] !== ' ') {
 *                  r++;
 *                  lastLength = r - l;
 *              } else {
 *                  l = i;
 *                  r = l;
 *              }
 *              i++;
 *          }
 *          if (r === l && lastLength) {
 *              return lastLength;
 *          }
 *          return r - l;
 *      };
 */
var lengthOfLastWord = function (s) {
    let l = 0;
    let r = 0;
    let i = 0;
    let lastLength = 0;
    while (i < s.length) {
        if (s[i] !== ' ') {
            r++;
            lastLength = r - l;
        } else {
            l = i;
            r = l;
        }
        i++;
    }
    if (r === l && lastLength) {
        return lastLength;
    }
    return r - l;
};
// @lc code=end

