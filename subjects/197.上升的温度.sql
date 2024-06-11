--
-- @lc app=leetcode.cn id=197 lang=mysql
--
-- [197] 上升的温度
--
-- https://leetcode.cn/problems/rising-temperature/description/
--
-- database
-- Easy (53.73%)
-- Likes:    581
-- Dislikes: 0
-- Total Accepted:    239.9K
-- Total Submissions: 446.5K
-- Testcase Example:  '{"headers": {"Weather": ["id", "recordDate", "temperature"]}, "rows": {"Weather": [[1, "2015-01-01", 10], [2, "2015-01-02", 25], [3, "2015-01-03", 20], [4, "2015-01-04", 30]]}}'
--
-- 
-- 
-- 表： Weather
-- 
-- 
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | recordDate    | date    |
-- | temperature   | int     |
-- +---------------+---------+
-- id 是该表具有唯一值的列。
-- 没有具有相同 recordDate 的不同行。
-- 该表包含特定日期的温度信息
-- 
-- 
-- 
-- 编写解决方案，找出与之前（昨天的）日期相比温度更高的所有日期的 id 。
-- 
-- 返回结果 无顺序要求 。
-- 
-- 结果格式如下例子所示。
-- 
-- 
-- 
-- 示例 1：
-- 
-- 
-- 输入：
-- Weather 表：
-- +----+------------+-------------+
-- | id | recordDate | Temperature |
-- +----+------------+-------------+
-- | 1  | 2015-01-01 | 10          |
-- | 2  | 2015-01-02 | 25          |
-- | 3  | 2015-01-03 | 20          |
-- | 4  | 2015-01-04 | 30          |
-- +----+------------+-------------+
-- 输出：
-- +----+
-- | id |
-- +----+
-- | 2  |
-- | 4  |
-- +----+
-- 解释：
-- 2015-01-02 的温度比前一天高（10 -> 25）
-- 2015-01-04 的温度比前一天高（20 -> 30）
-- 
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT tmp.id
FROM   (SELECT w1.id,
               w1.temperature AS t1,
               w2.temperature AS t2,
               w1.recorddate
        FROM   weather AS w1
               left join weather AS w2
                      ON w1.recorddate = Adddate(w2.recorddate, interval 1 day))
       AS tmp
WHERE  tmp.t1 > tmp.t2 
-- @lc code=end

