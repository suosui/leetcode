/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode.cn/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (61.00%)
 * Likes:    3776
 * Dislikes: 0
 * Total Accepted:    835.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 返回容器可以储存的最大水量。
 * 
 * 说明：你不能倾斜容器。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [1,1]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 
 * 方法一：双指针
 * 思路：
 *    在初始时，左右指针分别指向数组的左右两端，它们可以容纳的水量为 min⁡(1,7)∗8=8。
 *    此时我们需要移动一个指针。移动哪一个呢？直觉告诉我们，应该移动对应数字较小的那个指针（即此时的左指针）。这是因为，由于容纳的水量是由
 *    两个指针指向的数字中较小值∗指针之间的距离两个指针指向的数字中较小值 * 指针之间的距离
 *    两个指针指向的数字中较小值∗指针之间的距离
 *    决定的。如果我们移动数字较大的那个指针，那么前者「两个指针指向的数字中较小值」不会增加，后者「指针之间的距离」会减小，那么这个乘积会减小。
 *    因此，我们移动数字较大的那个指针是不合理的。因此，我们移动 数字较小的那个指针。
 *    
 *    作者：力扣官方题解
 *    链接：https://leetcode.cn/problems/container-with-most-water/solutions/207215/sheng-zui-duo-shui-de-rong-qi-by-leetcode-solution/
 *    来源：力扣（LeetCode）
 *    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * 复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(1)
 * 代码：
 *     var maxArea = function(height) {
 *         let right = height.length-1;
 *         let left = 0;
 *         let max = 0;
 *         while(right > left){
 *             let h = height[right] > height[left] ?  height[left] : height[right];
 *             let w = right-left;
 *             if(h * w > max){
 *                 max = h*w;
 *             }
 *             if(height[right] > height[left]){
 *                 left ++;
 *             } else {
 *                 right--;
 *             }
 *         }
 *         return max;
 *     };
 */
var maxArea = function (height) {

};
// @lc code=end

