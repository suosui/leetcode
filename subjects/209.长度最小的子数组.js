/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (48.01%)
 * Likes:    1429
 * Dislikes: 0
 * Total Accepted:    438.3K
 * Total Submissions: 919.1K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 *  
 *  方法一：滑动窗口
 *  思路：
 *     可以使用滑动窗口的方法，维护一个窗口，窗口内的元素和大于等于 target 时，记录窗口的长度，然后收缩窗口。
 *     引用官方题解的描述：
 *         定义两个指针 l 和 r 分别表示子数组（滑动窗口窗口）的开始位置和结束位置，维护变量 sum 存储子数组中的元素和（即从 nums[l] 到 nums[r] 的元素和）。
 *         初始状态下，l 和 r 都指向下标 0，sum 的值为 0。
 *         每一轮迭代，将 nums[r] 加到 sum，如果 sum >= target，则更新子数组的最小长度（此时子数组的长度是 r - l + 1），
 *         然后将 nums[l] 从 sum 中减去并将 l 右移，直到 sum < target，在此过程中同样更新子数组的最小长度。
 *         在每一轮迭代的最后，将 r 右移。
 *         重复上述过程，直到 r 达到数组的末尾，此时如果没有找到符合条件的子数组，返回 0。
 *          
 *          作者：力扣官方题解
 *          链接：https://leetcode.cn/problems/minimum-size-subarray-sum/solutions/305704/chang-du-zui-xiao-de-zi-shu-zu-by-leetcode-solutio/
 *          来源：力扣（LeetCode）
 *          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 *  复杂度：
 *     时间复杂度：O(n)，其中 n 是数组的长度。指针 l 和 r 最多各移动 n 次。
 *     空间复杂度：O(1)。
 *  代码：
 *      var minSubArrayLen = function(target, nums) {
 *          let ans = Math.pow(10, 5)+1;
 *          let l = r = 0;
 *          let sum = 0;
 *          while (l < nums.length && r < nums.length) {
 *              sum += nums[r];
 *              if (sum >= target) {
 *                  let diff = r - l + 1;
 *                  if (diff < ans) {
 *                      ans = diff;
 *                  }
 *                  while (l < r) {
 *                      sum -= nums[l];
 *                      l++;
 *                      if (sum >= target) {
 *                          diff = r - l + 1;
 *                          if (diff < ans) {
 *                              ans = diff;
 *                          }
 *                      } else {
 *                          break;
 *                      }
 *                  }
 *              }
 *              r++;
 *          }
 *          return ans === Math.pow(10, 5)+1 ? 0 : ans;
 *      };
 */
var minSubArrayLen = function(target, nums) {
};
// @lc code=end

