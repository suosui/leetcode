/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 *
 * https://leetcode.cn/problems/candy/description/
 *
 * algorithms
 * Hard (49.53%)
 * Likes:    1499
 * Dislikes: 0
 * Total Accepted:    315.5K
 * Total Submissions: 645.3K
 * Testcase Example:  '[1,0,2]'
 *
 * n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
 * 
 * 你需要按照以下要求，给这些孩子分发糖果：
 * 
 * 
 * 每个孩子至少分配到 1 个糖果。
 * 相邻两个孩子评分更高的孩子会获得更多的糖果。
 * 
 * 
 * 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：ratings = [1,0,2]
 * 输出：5
 * 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：ratings = [1,2,2]
 * 输出：4
 * 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
 * ⁠    第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == ratings.length
 * 1 <= n <= 2 * 10^4
 * 0 <= ratings[i] <= 2 * 10^4
 *  
 *  方法一：两次遍历
 *  过程：引用官方回答：
 *      我们可以将「相邻的孩子中，评分高的孩子必须获得更多的糖果」这句话拆分为两个规则，分别处理。
 *          左规则：当 ratings[i−1]<ratings[i] 时，i 号学生的糖果数量将比 i-1号孩子的糖果数量多。
 *          右规则：当 ratings[i]>ratings[i+1] 时，i 号学生的糖果数量将比 i+1号孩子的糖果数量多
 *      我们遍历该数组两次，处理出每一个学生分别满足左规则或右规则时，最少需要被分得的糖果数量。每个人最终分得的糖果数量即为这两个数量的最大值。
 *      具体地，以左规则为例：我们从左到右遍历该数组，假设当前遍历到位置 i，如果有 ratings[i−1]<ratings[i] 那么 i 号学生的糖果数量将比 i−1 号孩子的糖果数量多，
 *      我们令 left[i]=left[i−1]+1 即可，否则我们令 left[i]=1。
 *      在实际代码中，我们先计算出左规则 left 数组，在计算右规则的时候只需要用单个变量记录当前位置的右规则，同时计算答案即可。
 *     
 *      作者：力扣官方题解
 *      链接：https://leetcode.cn/problems/candy/solutions/533150/fen-fa-tang-guo-by-leetcode-solution-f01p/
 *      来源：力扣（LeetCode）
 *      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 *  复杂度：
 *      时间复杂度：O(n)
 *      空间复杂度：O(n)
 *  代码：
 *      var candy = function (ratings) {
 *          const left = [1];
 *          for (let i = 0; i < ratings.length; i++) {
 *              if (i > 0 && ratings[i - 1] < ratings[i]) {
 *                  left[i] = left[i - 1] + 1;
 *              } else {
 *                  left[i] = 1;
 *              }
 *          }
 *          let right = 0, ret = 0;
 *          for (let i = ratings.length - 1; i >= 0; i--) {
 *              if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
 *                  right++;
 *              } else {
 *                  right = 1;
 *              }
 *              ret += Math.max(left[i], right);
 *          }
 *          return ret;
 *      };
 *
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
}

// @lc code=end

