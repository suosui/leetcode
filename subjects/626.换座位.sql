--
-- @lc app=leetcode.cn id=626 lang=mysql
--
-- [626] 换座位
--
-- https://leetcode.cn/problems/exchange-seats/description/
--
-- database
-- Medium (68.89%)
-- Likes:    450
-- Dislikes: 0
-- Total Accepted:    93.2K
-- Total Submissions: 135.3K
-- Testcase Example:  '{"headers": {"Seat": ["id","student"]}, "rows": {"Seat": [[1,"Abbot"],[2,"Doris"],[3,"Emerson"],[4,"Green"],[5,"Jeames"]]}}'
--
-- 表: Seat
-- 
-- 
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | student     | varchar |
-- +-------------+---------+
-- id 是该表的主键（唯一值）列。
-- 该表的每一行都表示学生的姓名和 ID。
-- id 是一个连续的增量。
-- 
-- 
-- 
-- 
-- 编写解决方案来交换每两个连续的学生的座位号。如果学生的数量是奇数，则最后一个学生的id不交换。
-- 
-- 按 id 升序 返回结果表。
-- 
-- 查询结果格式如下所示。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入: 
-- Seat 表:
-- +----+---------+
-- | id | student |
-- +----+---------+
-- | 1  | Abbot   |
-- | 2  | Doris   |
-- | 3  | Emerson |
-- | 4  | Green   |
-- | 5  | Jeames  |
-- +----+---------+
-- 输出: 
-- +----+---------+
-- | id | student |
-- +----+---------+
-- | 1  | Doris   |
-- | 2  | Abbot   |
-- | 3  | Green   |
-- | 4  | Emerson |
-- | 5  | Jeames  |
-- +----+---------+
-- 解释:
-- 请注意，如果学生人数为奇数，则不需要更换最后一名学生的座位。
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT s1.id,
       COALESCE(s2.student, s1.student) AS student
FROM   seat s1
       LEFT JOIN seat s2
              ON ( ( s1.id + 1 ) ^ 1 ) - 1 = s2.id
ORDER  BY s1.id; 
-- @lc code=end

