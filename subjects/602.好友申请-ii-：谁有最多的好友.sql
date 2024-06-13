--
-- @lc app=leetcode.cn id=602 lang=mysql
--
-- [602] 好友申请 II ：谁有最多的好友
--
-- https://leetcode.cn/problems/friend-requests-ii-who-has-the-most-friends/description/
--
-- database
-- Medium (60.23%)
-- Likes:    113
-- Dislikes: 0
-- Total Accepted:    37.6K
-- Total Submissions: 62.4K
-- Testcase Example:  '{"headers":{"RequestAccepted":["requester_id","accepter_id","accept_date"]},"rows":{"RequestAccepted":[[1,2,"2016/06/03"],[1,3,"2016/06/08"],[2,3,"2016/06/08"],[3,4,"2016/06/09"]]}}'
--
-- RequestAccepted 表：
-- 
-- 
-- 
-- 
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | requester_id   | int     |
-- | accepter_id    | int     |
-- | accept_date    | date    |
-- +----------------+---------+
-- (requester_id, accepter_id) 是这张表的主键(具有唯一值的列的组合)。
-- 这张表包含发送好友请求的人的 ID ，接收好友请求的人的 ID ，以及好友请求通过的日期。
-- 
-- 
-- 
-- 
-- 编写解决方案，找出拥有最多的好友的人和他拥有的好友数目。
-- 
-- 生成的测试用例保证拥有最多好友数目的只有 1 个人。
-- 
-- 查询结果格式如下例所示。
-- 
-- 
-- 
-- 示例 1：
-- 
-- 
-- 输入：
-- RequestAccepted 表：
-- +--------------+-------------+-------------+
-- | requester_id | accepter_id | accept_date |
-- +--------------+-------------+-------------+
-- | 1            | 2           | 2016/06/03  |
-- | 1            | 3           | 2016/06/08  |
-- | 2            | 3           | 2016/06/08  |
-- | 3            | 4           | 2016/06/09  |
-- +--------------+-------------+-------------+
-- 输出：
-- +----+-----+
-- | id | num |
-- +----+-----+
-- | 3  | 3   |
-- +----+-----+
-- 解释：
-- 编号为 3 的人是编号为 1 ，2 和 4 的人的好友，所以他总共有 3 个好友，比其他人都多。
-- 
-- 
-- 
-- 进阶：在真实世界里，可能会有多个人拥有好友数相同且最多，你能找到所有这些人吗？
-- 
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.id,
       Sum(a.cnt) num
FROM   (SELECT Count(1)    cnt,
               accepter_id id
        FROM   requestaccepted
        GROUP  BY accepter_id
        UNION ALL
        SELECT Count(1)     cnt,
               requester_id id
        FROM   requestaccepted
        GROUP  BY requester_id) a
GROUP  BY a.id
ORDER  BY num DESC
LIMIT  1 
-- @lc code=end

