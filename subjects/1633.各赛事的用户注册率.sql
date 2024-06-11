--
-- @lc app=leetcode.cn id=1633 lang=mysql
--
-- [1633] 各赛事的用户注册率
--
-- https://leetcode.cn/problems/percentage-of-users-attended-a-contest/description/
--
-- database
-- Easy (59.95%)
-- Likes:    71
-- Dislikes: 0
-- Total Accepted:    38.8K
-- Total Submissions: 64.7K
-- Testcase Example:  '{"headers":{"Users":["user_id","user_name"],"Register":["contest_id","user_id"]},"rows":{"Users":[[6,"Alice"],[2,"Bob"],[7,"Alex"]],"Register":[[215,6],[209,2],[208,2],[210,6],[208,6],[209,7],[209,6],[215,7],[208,7],[210,2],[207,2],[210,7]]}}'
--
-- 用户表： Users
-- 
-- 
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | user_id     | int     |
-- | user_name   | varchar |
-- +-------------+---------+
-- user_id 是该表的主键(具有唯一值的列)。
-- 该表中的每行包括用户 ID 和用户名。
-- 
-- 
-- 
-- 注册表： Register
-- 
-- 
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | contest_id  | int     |
-- | user_id     | int     |
-- +-------------+---------+
-- (contest_id, user_id) 是该表的主键(具有唯一值的列的组合)。
-- 该表中的每行包含用户的 ID 和他们注册的赛事。
-- 
-- 
-- 
-- 编写解决方案统计出各赛事的用户注册百分率，保留两位小数。
-- 
-- 返回的结果表按 percentage 的 降序 排序，若相同则按 contest_id 的 升序 排序。
-- 
-- 返回结果如下示例所示。
-- 
-- 
-- 
-- 示例 1：
-- 
-- 
-- 输入：
-- Users 表：
-- +---------+-----------+
-- | user_id | user_name |
-- +---------+-----------+
-- | 6       | Alice     |
-- | 2       | Bob       |
-- | 7       | Alex      |
-- +---------+-----------+
-- 
-- Register 表：
-- +------------+---------+
-- | contest_id | user_id |
-- +------------+---------+
-- | 215        | 6       |
-- | 209        | 2       |
-- | 208        | 2       |
-- | 210        | 6       |
-- | 208        | 6       |
-- | 209        | 7       |
-- | 209        | 6       |
-- | 215        | 7       |
-- | 208        | 7       |
-- | 210        | 2       |
-- | 207        | 2       |
-- | 210        | 7       |
-- +------------+---------+
-- 输出：
-- +------------+------------+
-- | contest_id | percentage |
-- +------------+------------+
-- | 208        | 100.0      |
-- | 209        | 100.0      |
-- | 210        | 100.0      |
-- | 215        | 66.67      |
-- | 207        | 33.33      |
-- +------------+------------+
-- 解释：
-- 所有用户都注册了 208、209 和 210 赛事，因此这些赛事的注册率为 100% ，我们按 contest_id 的降序排序加入结果表中。
-- Alice 和 Alex 注册了 215 赛事，注册率为 ((2/3) * 100) = 66.67%
-- Bob 注册了 207 赛事，注册率为 ((1/3) * 100) = 33.33%
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.contest_id,
       Round(a.times / (SELECT Count(1)
                        FROM   users) * 100, 2) percentage
FROM   (SELECT contest_id,
               Count(1) AS times
        FROM   register
        GROUP  BY contest_id) a
ORDER  BY percentage DESC,  a.contest_id ASC 
-- @lc code=end

