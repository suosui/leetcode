/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (55.13%)
 * Likes:    2095
 * Dislikes: 0
 * Total Accepted:    654.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 *  方法一：哈希表
 *  思路：
 *     注意： O(2n) = O(n)，所以可以遍历两次数组
 *     借用别人的解题思路：
 *   
 *     这道题中之所以时间复杂度是O(n)，但代码中看上去像是O(n2)，
 *     因为我们一眼看上去是一个for循环中嵌套了一个while循环，
 *     但是要注意这里的判断条件，当这个值是初始值的时候再进行while计算，
 *     也就是说虽然在for循环中取出每一个值，但只要在满足条件时才进行while，那些不满足的直接跳过，
 *     于是每一个元素实际上只需要访问一次，而总共有n个元素，所以最后的时间复杂度还是O(n)。
 *     原作者：https://leetcode.cn/u/awesome-kapitsa2xl/
 * 
 *     简单来说就是每个数都判断一次这个数是不是连续序列的开头那个数。
 *     怎么判断呢，就是用哈希表查找这个数前面一个数是否存在，即num-1在序列中是否存在。存在那这个数肯定不是开头，直接跳过。
 *     因此只需要对每个开头的数进行循环，直到这个序列不再连续，因此复杂度是O(n)。 以题解中的序列举例:
 *     [100，4，200，1，3，4，2]
 *     去重后的哈希序列为：
 *     [100，4，200，1，3，2]
 *     按照上面逻辑进行判断：
 *     元素100是开头,因为没有99，且以100开头的序列长度为1
 *     元素4不是开头，因为有3存在，过，
 *     元素200是开头，因为没有199，且以200开头的序列长度为1
 *     元素1是开头，因为没有0，且以1开头的序列长度为4，因为依次累加，2，3，4都存在。
 *     元素3不是开头，因为2存在，过，
 *     元素2不是开头，因为1存在，过。
 *     完。
 *     原作者：https://leetcode.cn/u/teck-s/
 *  
 *  复杂度：
 *      时间复杂度：O(n)，其中 n 为数组的长度。具体分析已在上面给出。
 *      空间复杂度：O(n)，其中 n 为数组的长度。主要为哈希表的开销。
 *  代码：
 *      var longestConsecutive = function (nums) {
 *          let toReturn = 0;
 *          const set = new Set();
 *          for (let num of nums) {
 *              set.add(num);
 *          }
 *          for (let num of nums) {
 *              if (set.has(num - 1)) {
 *                  continue;
 *              }
 *              let cnt = 1;
 *              while (set.has(num + 1)) {
 *                  cnt++;
 *                  num++;
 *              }
 *              if (cnt > toReturn) {
 *                  toReturn = cnt;
 *              }
 *          }
 *          return toReturn;
 *      };
 */
var longestConsecutive = function (nums) {

};
// @lc code=end

