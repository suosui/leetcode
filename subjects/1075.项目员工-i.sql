--
-- @lc app=leetcode.cn id=1075 lang=mysql
--
-- [1075] 项目员工 I
--
-- https://leetcode.cn/problems/project-employees-i/description/
--
-- database
-- Easy (62.43%)
-- Likes:    61
-- Dislikes: 0
-- Total Accepted:    52.8K
-- Total Submissions: 84.6K
-- Testcase Example:  '{"headers":{"Project":["project_id","employee_id"],"Employee":["employee_id","name","experience_years"]},"rows":{"Project":[[1,1],[1,2],[1,3],[2,1],[2,4]],"Employee":[[1,"Khaled",3],[2,"Ali",2],[3,"John",1],[4,"Doe",2]]}}'
--
-- 项目表 Project： 
-- 
-- 
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | project_id  | int     |
-- | employee_id | int     |
-- +-------------+---------+
-- 主键为 (project_id, employee_id)。
-- employee_id 是员工表 Employee 表的外键。
-- 这张表的每一行表示 employee_id 的员工正在 project_id 的项目上工作。
-- 
-- 
-- 
-- 
-- 员工表 Employee：
-- 
-- 
-- +------------------+---------+
-- | Column Name      | Type    |
-- +------------------+---------+
-- | employee_id      | int     |
-- | name             | varchar |
-- | experience_years | int     |
-- +------------------+---------+
-- 主键是 employee_id。数据保证 experience_years 非空。
-- 这张表的每一行包含一个员工的信息。
-- 
-- 
-- 
-- 请写一个 SQL 语句，查询每一个项目中员工的 平均 工作年限，精确到小数点后两位。
-- 
-- 以 任意 顺序返回结果表。
-- 
-- 查询结果的格式如下。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入：
-- Project 表：
-- +-------------+-------------+
-- | project_id  | employee_id |
-- +-------------+-------------+
-- | 1           | 1           |
-- | 1           | 2           |
-- | 1           | 3           |
-- | 2           | 1           |
-- | 2           | 4           |
-- +-------------+-------------+
-- 
-- Employee 表：
-- +-------------+--------+------------------+
-- | employee_id | name   | experience_years |
-- +-------------+--------+------------------+
-- | 1           | Khaled | 3                |
-- | 2           | Ali    | 2                |
-- | 3           | John   | 1                |
-- | 4           | Doe    | 2                |
-- +-------------+--------+------------------+
-- 
-- 输出：
-- +-------------+---------------+
-- | project_id  | average_years |
-- +-------------+---------------+
-- | 1           | 2.00          |
-- | 2           | 2.50          |
-- +-------------+---------------+
-- 解释：第一个项目中，员工的平均工作年限是 (3 + 2 + 1) / 3 = 2.00；第二个项目中，员工的平均工作年限是 (3 + 2) / 2 =
-- 2.50
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.project_id,
       Round(Sum(experience_years) / Count(1), 2) average_years
FROM   (SELECT p.project_id,
               e.employee_id,
               e.experience_years
        FROM   project p
               LEFT JOIN employee e
                      ON p.employee_id = e.employee_id) a
GROUP  BY a.project_id 
-- @lc code=end

