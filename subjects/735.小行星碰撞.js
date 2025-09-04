/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 小行星碰撞
 *
 * https://leetcode.cn/problems/asteroid-collision/description/
 *
 * algorithms
 * Medium (42.47%)
 * Likes:    557
 * Dislikes: 0
 * Total Accepted:    111.6K
 * Total Submissions: 260.7K
 * Testcase Example:  '[5,10,-5]'
 *
 * 给定一个整数数组 asteroids，表示在同一行的小行星。数组中小行星的索引表示它们在空间中的相对位置。
 * 
 * 对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。
 * 
 * 
 * 找出碰撞后剩下的所有小行星。碰撞规则：两个小行星相互碰撞，较小的小行星会爆炸。如果两颗小行星大小相同，则两颗小行星都会爆炸。两颗移动方向相同的小行星，永远不会发生碰撞。
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
 * 1. 利用栈
 *     a. 判断栈顶和当前要入栈的元素方向：
 *         a.a 方向相同，则入栈。  
 *         a.b 方向不同：
 *               a.b.a 判断大小：
 *                    a.b.a.a 当前 < 栈顶：回到a。
 *                    a.b.a.b 当前 === 栈顶： pop栈顶，回到a。
 *                    a.b.a.c 当前 > 栈顶：pop栈顶，回到 a。
 */
var asteroidCollision = function (asteroids) {
    const stack = [];
    for (let curr of asteroids) {
        if (stack.length === 0) {
            stack.push(curr);
            continue;
        }
        let top = stack[stack.length - 1];
        if (!isCrash(top, curr)) {
            stack.push(curr);
            continue;
        }
        // 不同方向
        while (isCrash(top, curr)) {
            if (Math.abs(curr) < Math.abs(top)) {
                break;
            } else if (Math.abs(curr) === Math.abs(top)) {
                stack.pop();
                break;
            }
            stack.pop();
            if (!stack.length) {
                stack.push(curr);
                break;
            }
            top = stack[stack.length - 1];
            if (isCrash(top, curr)) {
                continue;
            }
            stack.push(curr);
        }
    }
    return stack;
};

var isCrash = function (top, curr) {
    return top > 0 && curr < 0;
}
// @lc code=end

