/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (59.80%)
 * Likes:    2864
 * Dislikes: 0
 * Total Accepted:    919.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 *  
 *  方法：回溯
 *  思路： 这中增量构造的方式，可以用回溯法来解决，回溯法的核心是一个递归函数，递归函数的参数是当前递归的层数，以及当前递归的结果。
 *        可以用树的方式来理解，每一层代表一个数字，每个数字对应的字母是一个分支，递归的终止条件是到达了树的最后一层。
 *  过程：
 *       1. 定义一个空数组，用来存放结果
 *       2. 定义一个对象，用来存放每个数字对应的字母
 *       3. 定义一个递归函数，参数是当前的字符串和当前的层数
 *       4. 递归函数的终止条件是层数等于字符串的长度
 *       5. 递归函数的逻辑是遍历当前层的所有字母，然后递归下一层
 *       6. 返回结果
 *  复杂度分析：
 *       时间复杂度：O(3^m * 4^n)  m是对应3个字母的数字个数，n是对应4个字母的数字个数
 *       空间复杂度：O(m + n)  m是对应3个字母的数字个数，n是对应4个字母的数字个数
 *  代码：
 *       var letterCombinations = function (digits) {
 *           const toReturn = [];
 *           if (!digits) return toReturn;
 *           const digitStrMap = {
 *               2: ['a', 'b', 'c'],
 *               3: ['d', 'e', 'f'],
 *               4: ['g', 'h', 'i'],
 *               5: ['j', 'k', 'l'],
 *               6: ['m', 'n', 'o'],
 *               7: ['p', 'q', 'r', 's'],
 *               8: ['t', 'u', 'v'],
 *               9: ['w', 'x', 'y', 'z'],
 *           };
 *           const fillTree = (preFix, i) => {
 *               if (i >= digits.length) {
 *                   return toReturn.push(preFix);
 *               }
 *               const chars = digitStrMap[digits[i]];
 *               for (let char of chars) {
 *                   fillTree(preFix + char, i + 1);
 *               }
 *           }
 *           fillTree('', 0);
 *           return toReturn;
 *       };
 *       
 */
var letterCombinations = function (digits) {
};
// @lc code=end

