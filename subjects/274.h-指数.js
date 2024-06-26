/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 *
 * https://leetcode-cn.com/problems/h-index/description/
 *
 * algorithms
 * Medium (44.08%)
 * Likes:    241
 * Dislikes: 0
 * Total Accepted:    57.8K
 * Total Submissions: 131.2K
 * Testcase Example:  '[3,0,6,1,5]'
 *
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。
 * 
 * 根据维基百科上 h 指数的定义：h 代表“高引用次数”，一名科研人员的 h指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h
 * 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。
 * 
 * 如果 h 有多种可能的值，h 指数 是其中最大的那个。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：citations = [3,0,6,1,5]
 * 输出：3 
 * 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
 * 由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
 * 
 * 示例 2：
 * 
 * 
 * 输入：citations = [1,3,1]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == citations.length
 * 1 <= n <= 5000
 * 0 <= citations[i] <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 *  方法一：排序
 * 
 *  过程：
 *    引用大佬的截图：
 *        作者：灵茶山艾府
 *        链接：https://leetcode.cn/problems/h-index/solutions/2502837/mei-kan-dong-ti-yi-yi-zhang-tu-miao-dong-8zps/
 *        来源：力扣（LeetCode）
 *        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 *  引用次数
 *      ^
 *      |
 *      |
 *      |          6
 *      |          _         5
 *      |         | |        _
 *      |         | |       | |
 *      |  3      | |       | |
 *    3 |_ _ _ _ _|_|_ _ _ _|_|_ _
 *      | | |     | |   1   | |
 *      | | |     | |   _   | |
 *      | | |  0  | |  | |  | |
 *      ——————————————————————————————> 论文
 *      至少有1篇论文的引用次数>=1.
 *      至少有2篇论文的引用次数>=2
 *      至少有3篇论文的引用次数>=3
 *      没有4篇论文的引用次数>=4.
 *      没有5篇论文的引用次数>=5。
 *      所以h 的最大值是3。
 *  
 *  复杂度：
 *     时间复杂度：O（n）
 *     空间复杂度：O（n）
 *  代码：
 *     var hIndex = function (citations) {
 *         let out = 0;
 *         citations.sort((a, b) => a - b);
 *         const len = citations.length;
 *         for (let i = 0; i < len; i++) {
 *             if (len - i <= citations[i]) {
 *                 return len - i;
 *             }
 *         }
 *         return out;
 *     };
 */
var hIndex = function (citations) {
};
// @lc code=end
