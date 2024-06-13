--
-- @lc app=leetcode.cn id=176 lang=mysql
--
-- [176] 第二高的薪水
--
-- https://leetcode.cn/problems/second-highest-salary/description/
--
-- database
-- Medium (37.48%)
-- Likes:    1460
-- Dislikes: 0
-- Total Accepted:    477K
-- Total Submissions: 1.3M
-- Testcase Example:  '{"headers":{"Employee":["id","salary"]},"rows":{"Employee":[[1,100],[2,200],[3,300]]}}'
--
-- Employee 表：
-- 
-- 
-- 
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | salary      | int  |
-- +-------------+------+
-- 在 SQL 中，id 是这个表的主键。
-- 表的每一行包含员工的工资信息。
-- 
-- 
-- 
-- 
-- 查询并返回 Employee 表中第二高的薪水 。如果不存在第二高的薪水，查询应该返回 null(Pandas 则返回 None) 。
-- 
-- 查询结果如下例所示。
-- 
-- 
-- 
-- 示例 1：
-- 
-- 
-- 输入：
-- Employee 表：
-- +----+--------+
-- | id | salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- 输出：
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+
-- 
-- 
-- 示例 2：
-- 
-- 
-- 输入：
-- Employee 表：
-- +----+--------+
-- | id | salary |
-- +----+--------+
-- | 1  | 100    |
-- +----+--------+
-- 输出：
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | null                |
-- +---------------------+
-- 
-- 
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT
    (SELECT DISTINCT
            Salary
        FROM
            Employee
        ORDER BY Salary DESC
        LIMIT 1 OFFSET 1) AS SecondHighestSalary
-- @lc code=end

