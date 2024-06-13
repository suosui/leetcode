--
-- @lc app=leetcode.cn id=1321 lang=mysql
--
-- [1321] 餐馆营业额变化增长
--
-- https://leetcode.cn/problems/restaurant-growth/description/
--
-- database
-- Medium (54.72%)
-- Likes:    176
-- Dislikes: 0
-- Total Accepted:    26.6K
-- Total Submissions: 48.6K
-- Testcase Example:  '{"headers":{"Customer":["customer_id","name","visited_on","amount"]},"rows":{"Customer":[[1,"Jhon","2019-01-01",100],[2,"Daniel","2019-01-02",110],[3,"Jade","2019-01-03",120],[4,"Khaled","2019-01-04",130],[5,"Winston","2019-01-05",110],[6,"Elvis","2019-01-06",140],[7,"Anna","2019-01-07",150],[8,"Maria","2019-01-08",80],[9,"Jaze","2019-01-09",110],[1,"Jhon","2019-01-10",130],[3,"Jade","2019-01-10",150]]}}'
--
-- 表: Customer
-- 
-- 
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | customer_id   | int     |
-- | name          | varchar |
-- | visited_on    | date    |
-- | amount        | int     |
-- +---------------+---------+
-- 在 SQL 中，(customer_id, visited_on) 是该表的主键。
-- 该表包含一家餐馆的顾客交易数据。
-- visited_on 表示 (customer_id) 的顾客在 visited_on 那天访问了餐馆。
-- amount 是一个顾客某一天的消费总额。
-- 
-- 
-- 
-- 
-- 你是餐馆的老板，现在你想分析一下可能的营业额变化增长（每天至少有一位顾客）。
-- 
-- 计算以 7 天（某日期 + 该日期前的 6 天）为一个时间段的顾客消费平均值。average_amount 要 保留两位小数。
-- 
-- 结果按 visited_on 升序排序。
-- 
-- 返回结果格式的例子如下。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入：
-- Customer 表:
-- +-------------+--------------+--------------+-------------+
-- | customer_id | name         | visited_on   | amount      |
-- +-------------+--------------+--------------+-------------+
-- | 1           | Jhon         | 2019-01-01   | 100         |
-- | 2           | Daniel       | 2019-01-02   | 110         |
-- | 3           | Jade         | 2019-01-03   | 120         |
-- | 4           | Khaled       | 2019-01-04   | 130         |
-- | 5           | Winston      | 2019-01-05   | 110         | 
-- | 6           | Elvis        | 2019-01-06   | 140         | 
-- | 7           | Anna         | 2019-01-07   | 150         |
-- | 8           | Maria        | 2019-01-08   | 80          |
-- | 9           | Jaze         | 2019-01-09   | 110         | 
-- | 1           | Jhon         | 2019-01-10   | 130         | 
-- | 3           | Jade         | 2019-01-10   | 150         | 
-- +-------------+--------------+--------------+-------------+
-- 输出：
-- +--------------+--------------+----------------+
-- | visited_on   | amount       | average_amount |
-- +--------------+--------------+----------------+
-- | 2019-01-07   | 860          | 122.86         |
-- | 2019-01-08   | 840          | 120            |
-- | 2019-01-09   | 840          | 120            |
-- | 2019-01-10   | 1000         | 142.86         |
-- +--------------+--------------+----------------+
-- 解释：
-- 第一个七天消费平均值从 2019-01-01 到 2019-01-07 是restaurant-growth/restaurant-growth/
-- (100 + 110 + 120 + 130 + 110 + 140 + 150)/7 = 122.86
-- 第二个七天消费平均值从 2019-01-02 到 2019-01-08 是 (110 + 120 + 130 + 110 + 140 + 150 +
-- 80)/7 = 120
-- 第三个七天消费平均值从 2019-01-03 到 2019-01-09 是 (120 + 130 + 110 + 140 + 150 + 80 +
-- 110)/7 = 120
-- 第四个七天消费平均值从 2019-01-04 到 2019-01-10 是 (130 + 110 + 140 + 150 + 80 + 110 +
-- 130 + 150)/7 = 142.86
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT DISTINCT visited_on,
       sum_amount AS amount, 
       ROUND(sum_amount/7, 2) AS average_amount
-- 以上是破解【绊子1】并计算平均值，少用一次窗口函数提高运行速度
FROM (
    SELECT visited_on, 
       SUM(amount) OVER ( ORDER BY visited_on ROWS 6 PRECEDING ) AS sum_amount
    -- 以下是计算每天的金额总量，破解【绊子2】
    FROM (
        SELECT visited_on, 
            SUM(amount) AS amount
        FROM Customer
        GROUP BY visited_on
         ) TT
     ) LL
-- 最后手动只要覆盖完整7天的数据，破解【绊子1】
WHERE DATEDIFF(visited_on, (SELECT MIN(visited_on) FROM Customer)) >= 6
-- @lc code=end

