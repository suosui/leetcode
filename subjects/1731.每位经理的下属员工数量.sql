--
-- @lc app=leetcode.cn id=1731 lang=mysql
--
-- [1731] 每位经理的下属员工数量
--
-- https://leetcode.cn/problems/the-number-of-employees-which-report-to-each-employee/description/
--
-- database
-- Easy (47.55%)
-- Likes:    59
-- Dislikes: 0
-- Total Accepted:    30.4K
-- Total Submissions: 63.8K
-- Testcase Example:  '{"headers":{"Employees":["employee_id","name","reports_to","age"]},"rows":{"Employees":[[9,"Hercy",null,43],[6,"Alice",9,41],[4,"Bob",9,36],[2,"Winston",null,37]]}}'
--
-- 表：Employees
-- 
-- 
-- +-------------+----------+
-- | Column Name | Type     |
-- +-------------+----------+
-- | employee_id | int      |
-- | name        | varchar  |
-- | reports_to  | int      |
-- | age         | int      |
-- +-------------+----------+
-- employee_id 是这个表中具有不同值的列。
-- 该表包含员工以及需要听取他们汇报的上级经理的 ID 的信息。 有些员工不需要向任何人汇报（reports_to 为空）。
-- 
-- 
-- 
-- 
-- 对于此问题，我们将至少有一个其他员工需要向他汇报的员工，视为一个经理。
-- 
-- 编写一个解决方案来返回需要听取汇报的所有经理的
-- ID、名称、直接向该经理汇报的员工人数，以及这些员工的平均年龄，其中该平均年龄需要四舍五入到最接近的整数。
-- 
-- 返回的结果集需要按照 employee_id 进行排序。
-- 
-- 结果的格式如下：
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入：
-- Employees 表：
-- +-------------+---------+------------+-----+
-- | employee_id | name    | reports_to | age |
-- +-------------+---------+------------+-----+
-- | 9           | Hercy   | null       | 43  |
-- | 6           | Alice   | 9          | 41  |
-- | 4           | Bob     | 9          | 36  |
-- | 2           | Winston | null       | 37  |
-- +-------------+---------+------------+-----+
-- 输出：
-- +-------------+-------+---------------+-------------+
-- | employee_id | name  | reports_count | average_age |
-- +-------------+-------+---------------+-------------+
-- | 9           | Hercy | 2             | 39          |
-- +-------------+-------+---------------+-------------+
-- 解释：
-- Hercy 有两个需要向他汇报的员工, 他们是 Alice and Bob. 他们的平均年龄是 (41+36)/2 = 38.5, 四舍五入的结果是
-- 39.
-- 
-- 
-- 示例 2:
-- 
-- 
-- 输入： 
-- Employees 表：
-- +-------------+---------+------------+-----+ 
-- | employee_id | name    | reports_to | age |
-- |-------------|---------|------------|-----|
-- | 1           | Michael | null       | 45  |
-- | 2           | Alice   | 1          | 38  |
-- | 3           | Bob     | 1          | 42  |
-- | 4           | Charlie | 2          | 34  |
-- | 5           | David   | 2          | 40  |
-- | 6           | Eve     | 3          | 37  |
-- | 7           | Frank   | null       | 50  |
-- | 8           | Grace   | null       | 48  |
-- +-------------+---------+------------+-----+ 
-- 输出： 
-- +-------------+---------+---------------+-------------+
-- | employee_id | name    | reports_count | average_age |
-- | ----------- | ------- | ------------- | ----------- |
-- | 1           | Michael | 2             | 40          |
-- | 2           | Alice   | 2             | 37          |
-- | 3           | Bob     | 1             | 37          |
-- +-------------+---------+---------------+-------------+
-- 
--

-- @lc code=start
# Write your MySQL query statement below
# Write your MySQL query statement below
SELECT a.reports_to employee_id,
       b.name,
       a.reports_count,
       a.average_age
FROM   (SELECT Count(1)        reports_count,
               Round(Avg(age)) average_age,
               reports_to
        FROM   employees
        GROUP  BY reports_to) a
       LEFT JOIN (SELECT *
                  FROM   employees) b
              ON a.reports_to = b.employee_id
WHERE  a.reports_to IS NOT NULL
ORDER  BY employee_id ASC 
-- @lc code=end

