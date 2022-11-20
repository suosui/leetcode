/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 *
 * https://leetcode.cn/problems/asteroid-collision/description/
 *
 * algorithms
 * Medium (43.35%)
 * Likes:    364
 * Dislikes: 0
 * Total Accepted:    67.2K
 * Total Submissions: 155K
 * Testcase Example:  '[5,10,-5]'
 *
 * 给定一个整数数组 asteroids，表示在同一行的行星。
 * 
 * 对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。
 * 
 * 
 * 找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：asteroids = [5,10,-5]
 * 输出：[5,10]
 * 解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
 * 
 * 示例 2：
 * 
 * 
 * 输入：asteroids = [8,-8]
 * 输出：[]
 * 解释：8 和 -8 碰撞后，两者都发生爆炸。
 * 
 * 示例 3：
 * 
 * 
 * 输入：asteroids = [10,2,-5]
 * 输出：[10]
 * 解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= asteroids.length <= 10^4
 * -1000 <= asteroids[i] <= 1000
 * asteroids[i] != 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const ans = [];
    for (let asteroid of asteroids) {
        let top = ans[ans.length - 1];
        if (!top) {
            ans.push(asteroid);
            continue;
        }
        if (top === asteroid) {
            ans.push(asteroid);
            continue;
        }
        if ((top <= 0 && asteroid <= 0) || (top > 0 && asteroid > 0)) {
            ans.push(asteroid);
            continue;
        } else if (top < 0 && asteroid > 0) {
            ans.push(asteroid);
            continue;
        } else if (top > 0 && asteroid < 0) {
            top = ans.pop();
            while (top !== undefined && top >= 0 && top < Math.abs(asteroid)) {
                top = ans.pop();
            }
            if (top === undefined) {
                ans.push(asteroid);
                continue;
            }
            if (top < 0) {
                ans.push(top, asteroid);
                continue;
            }
            if (top === Math.abs(asteroid)) {
                continue;
            }
            if (top > Math.abs(asteroid)) {
                ans.push(top)
                continue;
            } else {
                ans.push(asteroid);
            }
        }
    }
    return ans;
};
// @lc code=end

