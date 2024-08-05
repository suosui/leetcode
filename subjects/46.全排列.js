/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (79.27%)
 * Likes:    2936
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 *  方法一：递归+树+字符串
 *  思路：
 *       把组合过程模拟成一颗树，每个节点都是一个选择，每个节点的子节点都是剩下的选择
 *       用字符串存储已经选择的节点，用数组存储剩下的节点
 *       递归模拟树的遍历过程，直到没有剩下的节点
 *       把字符串转换成数组，存入结果数组
 *  复杂度：
 *       时间复杂度：O(n!)，n为数组长度
 *       空间复杂度：O(n!)，n为数组长度
 *  代码：
 *       var permute = function (nums) {
 *           const toReturn = [];
 *           var fn = (nums, preFix) => {
 *               if (!nums || !nums.length) return toReturn.push(preFix.split(','));
 *               for (let i = 0; i < nums.length; i++) {
 *                   fn(nums.filter((_, idx) => { return idx !== i; }), preFix ? preFix + ',' + nums[i] : preFix + nums[i]);
 *               }
 *           }
 *           fn(nums, '');
 *           return toReturn;
 *       };
 */
var permute = function (nums) {
};
// @lc code=end

