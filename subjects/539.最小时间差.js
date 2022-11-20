/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 *
 * https://leetcode.cn/problems/minimum-time-difference/description/
 *
 * algorithms
 * Medium (66.17%)
 * Likes:    223
 * Dislikes: 0
 * Total Accepted:    59.1K
 * Total Submissions: 89.4K
 * Testcase Example:  '["23:59","00:00"]'
 *
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：timePoints = ["23:59","00:00"]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：timePoints = ["00:00","23:59","00:00"]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= timePoints.length <= 2 * 10^4
 * timePoints[i] 格式为 "HH:MM"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const minutes = timePoints.map(p => {
        const split = p.split(':');
        return Number(split[0]) * 60 + Number(split[1])
    });
    minutes.sort((a, b) => {
        return a - b;
    });
    let ans = 1440; // 60*24
    for (let i = 0; i < minutes.length - 1; i++) {
        const diff = minutes[i + 1] - minutes[i];
        if (diff === 0) return 0;
        if (diff < ans) {
            ans = diff;
        }
    }
    let diff = 1440 + minutes[0] - minutes[minutes.length - 1];
    if (diff < ans) ans = diff;
    return ans;
};
// @lc code=end
findMinDifference(["23:59", "00:00"])
