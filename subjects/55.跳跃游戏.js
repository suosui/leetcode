/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode.cn/problems/jump-game/description/
 *
 * algorithms
 * Medium (43.65%)
 * Likes:    2746
 * Dislikes: 0
 * Total Accepted:    955.1K
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 10^5
 * 
 *  方法一：贪心
 *  过程：
 *      我们可以用贪心的方法解决这个问题。
 *      
 *      设想一下，对于数组中的任意一个位置 yyy，我们如何判断它是否可以到达？根据题目的描述，只要存在一个位置 xxx，它本身可以到达，并且它跳跃的最大长度为 x+nums[x]x + \textit{nums}[x]x+nums[x]，这个值大于等于 yyy，即 x+nums[x]≥yx + \textit{nums}[x] \geq yx+nums[x]≥y，那么位置 yyy 也可以到达。
 *      
 *      换句话说，对于每一个可以到达的位置 xxx，它使得 x+1,x+2,⋯ ,x+nums[x]x+1, x+2, \cdots, x+\textit{nums}[x]x+1,x+2,⋯,x+nums[x] 这些连续的位置都可以到达。
 *      
 *      这样以来，我们依次遍历数组中的每一个位置，并实时维护 最远可以到达的位置。对于当前遍历到的位置 xxx，如果它在 最远可以到达的位置 的范围内，那么我们就可以从起点通过若干次跳跃到达该位置，因此我们可以用 x+nums[x]x + \textit{nums}[x]x+nums[x] 更新 最远可以到达的位置。
 *      
 *      在遍历的过程中，如果 最远可以到达的位置 大于等于数组中的最后一个位置，那就说明最后一个位置可达，我们就可以直接返回 True 作为答案。反之，如果在遍历结束后，最后一个位置仍然不可达，我们就返回 False 作为答案。
 *      
 *      作者：力扣官方题解
 *      链接：https://leetcode.cn/problems/jump-game/solutions/203549/tiao-yue-you-xi-by-leetcode-solution/
 *      来源：力扣（LeetCode）
 *      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(1) 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 */
var canJump = function (nums) {
    if (nums.length === 1) return true;
    let maxDistance = 0;
    for (let i = 0; i < nums.length; i++) {
        if (maxDistance < i) {
            break;
        }
        if (maxDistance < i + nums[i]) {
            maxDistance = i + nums[i];
        }
        if (maxDistance >= nums.length - 1) break;
    }
    if (maxDistance >= nums.length - 1) return true;
    return false;
}
// @lc code=end

