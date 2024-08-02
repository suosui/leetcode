/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 *
 * https://leetcode.cn/problems/clone-graph/description/
 *
 * algorithms
 * Medium (70.79%)
 * Likes:    720
 * Dislikes: 0
 * Total Accepted:    148.8K
 * Total Submissions: 210.1K
 * Testcase Example:  '[[2,4],[1,3],[2,4],[1,3]]'
 *
 * 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 * 
 * 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
 * 
 * 
 * class Node {
 * ⁠   public int val;
 * ⁠   public List<Node> neighbors;
 * }
 * 
 * 
 * 
 * 测试用例格式：
 * 
 * 简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（val = 1），第二个节点值为 2（val =
 * 2），以此类推。该图在测试用例中使用邻接列表表示。
 * 
 * 邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。
 * 
 * 给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
 * 输出：[[2,4],[1,3],[2,4],[1,3]]
 * 解释：
 * 图中有 4 个节点。
 * 节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
 * 节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
 * 节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
 * 节点 4 的值是 4，它有两个邻居：节点 1 和 3 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：adjList = [[]]
 * 输出：[[]]
 * 解释：输入包含一个空列表。该图仅仅只有一个值为 1 的节点，它没有任何邻居。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：adjList = []
 * 输出：[]
 * 解释：这个图是空的，它不含任何节点。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 这张图中的节点数在 [0, 100] 之间。
 * 1 <= Node.val <= 100
 * 每个节点值 Node.val 都是唯一的，
 * 图中没有重复的边，也没有自环。
 * 图是连通图，你可以从给定节点访问到所有节点。
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 * 
 *  方法一：深度优先搜索 + 哈希表
 *  思路：
 *       1. 从给定节点 node 开始遍历图。
 *       2. 我们可以使用深度优先搜索和哈希映射来遍历整张图。
 *       3. 从给定节点开始，我们将该节点放入HashMap中。
 *       4. 我们开始遍历该节点的所有邻居节点，并更新HashMap。
 *       5. 对于给定的节点，每个邻居节点可能已经在HashMap中，因此不需要重新遍历。
 *       6. 如果一个邻居节点不在HashMap中，则需要将该邻居节点加入HashMap，并递归调用函数。
 *  复杂度：
 *       时间复杂度：O(N)，其中 N 是节点的数量。深度优先搜索遍历图中的每个节点恰好一次。
 *       空间复杂度：O(N)。存储图中所有节点所需的空间。
 *  代码：
 *       var cloneGraph = function (node) {
 *           if (!node) return null;
 *           const process = (node) => {
 *               if (!map[node.val]) {
 *                   const newNode = new _Node(node.val);
 *                   map[node.val] = newNode;
 *                   const newNeighbors = [];
 *                   for (let neighbor of node.neighbors) {
 *                       let newNeighbor = process(neighbor);
 *                       newNeighbors.push(newNeighbor);
 *                   }
 *                   newNode.neighbors = newNeighbors;
 *                   return newNode;
 *               }
 *               return map[node.val];
 *           }
 *           const map = {};
 *           const newNode = new _Node(node.val, []);
 *           map[newNode.val] = newNode;
 *           const newNeighbors = [];
 *           for (let neighbor of node.neighbors) {
 *               let newNeighbor = process(neighbor);
 *               newNeighbors.push(newNeighbor);
 *           }
 *           newNode.neighbors = newNeighbors;
 *           return newNode;
 *       };
 *        
 */
var cloneGraph = function (node) {
};
// @lc code=end

