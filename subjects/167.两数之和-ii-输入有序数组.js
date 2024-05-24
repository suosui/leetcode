/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Medium (58.95%)
 * Likes:    1206
 * Dislikes: 0
 * Total Accepted:    692.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target
 * 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <=
 * numbers.length 。
 * 
 * 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
 * 
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 * 
 * 你所设计的解决方案必须只使用常量级的额外空间。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 * 解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 * 解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= numbers.length <= 3 * 10^4
 * -1000 <= numbers[i] <= 1000
 * numbers 按 非递减顺序 排列
 * -1000 <= target <= 1000
 * 仅存在一个有效答案
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *  
 *  方法一：双指针
 *  思路：
 *     注意：前提：数组是有序递增的，而且仅有一个答案。
 *     引用官网的解析：
 *     初始时两个指针分别指向第一个元素位置和最后一个元素的位置。
 *     每次计算两个指针指向的两个元素之和，并和目标值比较。
 *     如果两个元素之和等于目标值，则发现了唯一解。如果两个元素之和小于目标值，则将左侧指针右移一位。
 *     如果两个元素之和大于目标值，则将右侧指针左移一位。移动指针之后，重复上述操作，直到找到答案。
 *  
 *       作者：力扣官方题解
 *       链接：https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/solutions/337156/liang-shu-zhi-he-ii-shu-ru-you-xu-shu-zu-by-leet-2/
 *       来源：力扣（LeetCode）
 *       著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 *  复杂度：
 *      时间复杂度：O(n)，其中 n 是数组的长度。两个指针移动的总次数最多为 n 次。
 *      空间复杂度：O(1)。
 *  代码：
 *      var twoSum = function (numbers, target) {
 *          let l = 0;
 *          let r = numbers.length - 1;
 *          while (l < r) {
 *              if (numbers[l] + numbers[r] < target) {
 *                  l++;
 *                  continue;
 *              } else if (numbers[l] + numbers[r] > target) {
 *                  r--;
 *                  continue;
 *              }
 *              return [l + 1, r + 1];
 *          }
 *          return [-1, -1]
 *      };
 *  
 *  方法二：二分查找
 *  思路：
 *     在数组中找到两个数，使得它们的和等于目标值，可以首先固定第一个数，然后寻找第二个数，第二个数等于目标值减去第一个数的差。
 *     利用数组的有序性质，可以通过二分查找的方法寻找第二个数。
 *     为了避免重复寻找，在寻找第二个数时，只在第一个数的右侧寻找。
 *       作者：力扣官方题解
 *       链接：https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/solutions/337156/liang-shu-zhi-he-ii-shu-ru-you-xu-shu-zu-by-leet-2/
 *       来源：力扣（LeetCode）
 *       著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 *  复杂度：
 *     时间复杂度：O(nlogn)，其中 n 是数组的长度。需要遍历数组一次确定第一个数，时间复杂度是 O(n)，寻找第二个数使用二分查找，时间复杂度是 O(logn)，因此总时间复杂度是 O(nlogn)。
 *     空间复杂度：O(1)。
 *  代码：
 *      var twoSum = function (numbers, target) {
 *          for (let i = 0; i < numbers.length - 1; i++) {
 *              let j = search(numbers, target - numbers[i], i + 1);
 *              if (j !== null) {
 *                  return [i + 1, j + 1];
 *              }
 *          }
 *          return [-1, -1];
 *      };
 *      
 *      var search = function (numbers, target, l) {
 *          let r = numbers.length - 1;
 *          let mid;
 *          while (l <= r) {
 *              mid = l + Math.floor((r - l) / 2);
 *              if (numbers[mid] === target) {
 *                  return mid;
 *              } else if (numbers[mid] < target) {
 *                  l = mid + 1;
 *              } else if (numbers[mid] > target) {
 *                  r = mid - 1;
 *              }
 *          }
 *          return null;
 *      }
 *  
 */
var twoSum = function (numbers, target) {
};

// @lc code=end

