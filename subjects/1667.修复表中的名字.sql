--
-- @lc app=leetcode.cn id=1667 lang=mysql
--
-- [1667] 修复表中的名字
--
-- https://leetcode.cn/problems/fix-names-in-a-table/description/
--
-- database
-- Easy (62.58%)
-- Likes:    129
-- Dislikes: 0
-- Total Accepted:    73.7K
-- Total Submissions: 117.7K
-- Testcase Example:  '{"headers":{"Users":["user_id","name"]},"rows":{"Users":[[1,"aLice"],[2,"bOB"]]}}'
--
-- 表： Users
-- 
-- 
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | user_id        | int     |
-- | name           | varchar |
-- +----------------+---------+
-- user_id 是该表的主键(具有唯一值的列)。
-- 该表包含用户的 ID 和名字。名字仅由小写和大写字符组成。
-- 
-- 
-- 
-- 
-- 编写解决方案，修复名字，使得只有第一个字符是大写的，其余都是小写的。
-- 
-- 返回按 user_id 排序的结果表。
-- 
-- 返回结果格式示例如下。
-- 
-- 
-- 
-- 示例 1：
-- 
-- 
-- 输入：
-- Users table:
-- +---------+-------+
-- | user_id | name  |
-- +---------+-------+
-- | 1       | aLice |
-- | 2       | bOB   |
-- +---------+-------+
-- 输出：
-- +---------+-------+
-- | user_id | name  |
-- +---------+-------+
-- | 1       | Alice |
-- | 2       | Bob   |
-- +---------+-------+
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT user_id,
       Concat(Upper(Substring(NAME, 1, 1)), Lower(Substring(NAME, 2))) AS NAME
FROM   users
ORDER  BY user_id; 
-- @lc code=end

