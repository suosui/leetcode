--
-- @lc app=leetcode.cn id=596 lang=mysql
--
-- [596] 超过5名学生的课
--
-- https://leetcode.cn/problems/classes-more-than-5-students/description/
--
-- database
-- Easy (53.94%)
-- Likes:    335
-- Dislikes: 0
-- Total Accepted:    186.6K
-- Total Submissions: 345.9K
-- Testcase Example:  '{"headers": {"Courses": ["student", "class"]}, "rows": {"Courses": [["A", "Math"], ["B", "English"], ["C", "Math"], ["D", "Biology"], ["E", "Math"], ["F", "Computer"], ["G", "Math"], ["H", "Math"], ["I", "Math"]]}}'
--
-- 表: Courses
-- 
-- 
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | student     | varchar |
-- | class       | varchar |
-- +-------------+---------+
-- 在 SQL 中，(student, class)是该表的主键列。
-- 该表的每一行表示学生的名字和他们注册的班级。
-- 
-- 
-- 
-- 
-- 查询 至少有5个学生 的所有班级。
-- 
-- 以 任意顺序 返回结果表。
-- 
-- 查询结果格式如下所示。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入: 
-- Courses table:
-- +---------+----------+
-- | student | class    |
-- +---------+----------+
-- | A       | Math     |
-- | B       | English  |
-- | C       | Math     |
-- | D       | Biology  |
-- | E       | Math     |
-- | F       | Computer |
-- | G       | Math     |
-- | H       | Math     |
-- | I       | Math     |
-- +---------+----------+
-- 输出: 
-- +---------+ 
-- | class   | 
-- +---------+ 
-- | Math    | 
-- +---------+
-- 解释: 
-- -数学课有6个学生，所以我们包括它。
-- -英语课有1名学生，所以我们不包括它。
-- -生物课有1名学生，所以我们不包括它。
-- -计算机课有1个学生，所以我们不包括它。
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.class
FROM  (SELECT Count(*) cnt,
              class
       FROM   courses
       GROUP  BY class
       HAVING cnt >= 5) a 
-- @lc code=end

