/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode.cn/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.78%)
 * Likes:    587
 * Dislikes: 0
 * Total Accepted:    419.4K
 * Total Submissions: 899K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 
 * 字母和数字都属于字母数字字符。
 * 
 * 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: s = "A man, a plan, a canal: Panama"
 * 输出：true
 * 解释："amanaplanacanalpanama" 是回文串。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "race a car"
 * 输出：false
 * 解释："raceacar" 不是回文串。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = " "
 * 输出：true
 * 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
 * 由于空字符串正着反着读都一样，所以是回文串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 2 * 10^5
 * s 仅由可打印的 ASCII 字符组成
 * 
 *  方法一：双指针
 *  思路：
 *      设置左右指针，两个指针分别向中间挪动
 *      如果左指针指向的字符不是字母数字字符，则左指针右移，右指针同理。
 *      如果左右指针指向的字符不相等，则返回false
 *  复杂度：
 *      时间复杂度：O(n)
 *      空间复杂度：O(1)
 *  代码：
 *      var isPalindrome = function (s) {
 *          let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
 *              '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
 *          ];
 *          let l = 0;
 *          let r = s.length - 1;
 *          while (l < r) {
 *              while (!alphabet.includes(s[l]) && l < r) {
 *                  l++;
 *              }
 *              while (!alphabet.includes(s[r]) && l < r) {
 *                  r--;
 *              }
 *              if (s[r].toLowerCase() !== s[l].toLowerCase()) {
 *                  return false;
 *              }
 *              l++;
 *              r--;
 *          }
 *          return true;
 *      };
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
};
// @lc code=end

