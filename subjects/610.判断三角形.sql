--
-- @lc app=leetcode.cn id=610 lang=mysql
--
-- [610] 判断三角形
--
-- https://leetcode.cn/problems/triangle-judgement/description/
--
-- database
-- Easy (69.54%)
-- Likes:    72
-- Dislikes: 0
-- Total Accepted:    50.2K
-- Total Submissions: 72.1K
-- Testcase Example:  '{"headers":{"Triangle":["x","y","z"]},"rows":{"Triangle":[[13,15,30],[10,20,15]]}}'
--
-- 表: Triangle
-- 
-- 
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | x           | int  |
-- | y           | int  |
-- | z           | int  |
-- +-------------+------+
-- 在 SQL 中，(x, y, z)是该表的主键列。
-- 该表的每一行包含三个线段的长度。
-- 
-- 
-- 
-- 
-- 对每三个线段报告它们是否可以形成一个三角形。
-- 
-- 以 任意顺序 返回结果表。
-- 
-- 查询结果格式如下所示。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入: 
-- Triangle 表:
-- +----+----+----+
-- | x  | y  | z  |
-- +----+----+----+
-- | 13 | 15 | 30 |
-- | 10 | 20 | 15 |
-- +----+----+----+
-- 输出: 
-- +----+----+----+----------+
-- | x  | y  | z  | triangle |
-- +----+----+----+----------+
-- | 13 | 15 | 30 | No       |
-- | 10 | 20 | 15 | Yes      |
-- +----+----+----+----------+
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT *,
       IF(x + y > z
          AND x + z > y
          AND y + z > x, "Yes", "No") AS triangle
FROM   triangle 
-- @lc code=end

