/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (36.26%)
 * Likes:    5247
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 3.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 
 * 你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}\
 * 
 *  方法一：排序 + 双指针（两数之和）
 *  思路：
 *     可以把三数之和转化为两数之和，即固定一个数，找到另外两个数的和等于第一个数的相反数。
 *     因为对数组进行了排序，所以可以使用双指针来查找另外两个数。
 *     怎么避免重复的三元组呢？可以在遍历的时候跳过重复的元素。（因为数组已经排序，所以重复的元素一定是相邻的）
 *     1. 首先对数组进行排序，排序后固定一个数 nums[i]，再使用左右指针指向 nums[i]后面的两端，数字分别为 nums[L] 和 nums[R]，计算三个数的和 sum 判断是否满足为 0，满足则添加进结果集
 *     2. 如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环
 *     3. 如果 nums[i] == nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过
 *     4. 当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
 *     5. 当 sum == 0 时，nums[R] == nums[R-1] 则会导致结果重复，应该跳过，R--
 *  复杂度：
 *    时间复杂度：O(n^2)，n 为数组长度
 *    空间复杂度：O(1)
 *  代码：
 *      var threeSum = function (nums) {
 *          nums.sort((a, b) => { return a - b; });
 *          let toReturn = [];
 *          let startIdx = 0;
 *          while (startIdx < nums.length - 2) {
 *              let l = startIdx + 1;
 *              let r = nums.length - 1;
 *              let target = 0 - nums[startIdx];
 *              if (startIdx > 0 && nums[startIdx] === nums[startIdx - 1]) {
 *                  startIdx++;
 *                  continue;
 *              }
 *              while (l < r) {
 *                  if (target < nums[l] + nums[r]) {
 *                      r--;
 *                  } else if (target === nums[l] + nums[r]) {
 *                      toReturn.push([nums[startIdx], nums[l], nums[r]]);
 *                      while (nums[l + 1] === nums[l] && l < r) {
 *                          l++;
 *                      }
 *                      while (nums[r - 1] === nums[r] && l < r) {
 *                          r--;
 *                      }
 *                      l++;
 *                      r--;
 *                  } else {
 *                      l++;
 *                  }
 *              }
 *              startIdx++;
 *          }
 *          return toReturn;
 *      };
 */
var threeSum = function (nums) {

};
// @lc code=end

