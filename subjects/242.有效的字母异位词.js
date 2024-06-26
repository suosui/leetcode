/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (64.87%)
 * Likes:    487
 * Dislikes: 0
 * Total Accepted:    346.9K
 * Total Submissions: 534.7K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * s 和 t 仅包含小写字母
 * 
 * 
 * 
 * 
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 *  方法一：排序
 *  思路：没啥可讲的。
 *  复杂度：
 *      时间复杂度：O(nlogn)，其中 n 为 s 的长度。
 *      空间复杂度：O(logn)。
 *  代码：
 *      var isAnagram = function (s, t) {
 *          s = s.split('').sort().join('')
 *          t = t.split('').sort().join('');
 *          return s == t;
 *      };
 */
var isAnagram = function (s, t) {
};
// @lc code=end