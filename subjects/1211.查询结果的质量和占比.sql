--
-- @lc app=leetcode.cn id=1211 lang=mysql
--
-- [1211] 查询结果的质量和占比
--
-- https://leetcode.cn/problems/queries-quality-and-percentage/description/
--
-- database
-- Easy (53.07%)
-- Likes:    92
-- Dislikes: 0
-- Total Accepted:    46.1K
-- Total Submissions: 86.9K
-- Testcase Example:  '{"headers":{"Queries":["query_name","result","position","rating"]},"rows":{"Queries":[["Dog","Golden Retriever",1,5],["Dog","German Shepherd",2,5],["Dog","Mule",200,1],["Cat","Shirazi",5,2],["Cat","Siamese",3,3],["Cat","Sphynx",7,4]]}}'
--
-- Queries 表： 
-- 
-- 
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | query_name  | varchar |
-- | result      | varchar |
-- | position    | int     |
-- | rating      | int     |
-- +-------------+---------+
-- 此表可能有重复的行。
-- 此表包含了一些从数据库中收集的查询信息。
-- “位置”（position）列的值为 1 到 500 。
-- “评分”（rating）列的值为 1 到 5 。评分小于 3 的查询被定义为质量很差的查询。
-- 
-- 
-- 
-- 
-- 将查询结果的质量 quality 定义为：
-- 
-- 
-- 各查询结果的评分与其位置之间比率的平均值。
-- 
-- 
-- 将劣质查询百分比 poor_query_percentage 为：
-- 
-- 
-- 评分小于 3 的查询结果占全部查询结果的百分比。
-- 
-- 
-- 编写解决方案，找出每次的 query_name 、 quality 和 poor_query_percentage。
-- 
-- quality 和 poor_query_percentage 都应 四舍五入到小数点后两位 。
-- 
-- 以 任意顺序 返回结果表。
-- 
-- 结果格式如下所示：
-- 
-- 
-- 
-- 示例 1：
-- 
-- 
-- 输入：
-- Queries table:
-- +------------+-------------------+----------+--------+
-- | query_name | result            | position | rating |
-- +------------+-------------------+----------+--------+
-- | Dog        | Golden Retriever  | 1        | 5      |
-- | Dog        | German Shepherd   | 2        | 5      |
-- | Dog        | Mule              | 200      | 1      |
-- | Cat        | Shirazi           | 5        | 2      |
-- | Cat        | Siamese           | 3        | 3      |
-- | Cat        | Sphynx            | 7        | 4      |
-- +------------+-------------------+----------+--------+
-- 输出：
-- +------------+---------+-----------------------+
-- | query_name | quality | poor_query_percentage |
-- +------------+---------+-----------------------+
-- | Dog        | 2.50    | 33.33                 |
-- | Cat        | 0.66    | 33.33                 |
-- +------------+---------+-----------------------+
-- 解释：
-- Dog 查询结果的质量为 ((5 / 1) + (5 / 2) + (1 / 200)) / 3 = 2.50
-- Dog 查询结果的劣质查询百分比为 (1 / 3) * 100 = 33.33
-- 
-- Cat 查询结果的质量为 ((2 / 5) + (3 / 3) + (4 / 7)) / 3 = 0.66
-- Cat 查询结果的劣质查询百分比为 (1 / 3) * 100 = 33.33
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT c.query_name,
       COALESCE(c.quality, 0)               quality,
       COALESCE(d.poor_query_percentage, 0) poor_query_percentage
FROM   (SELECT query_name,
               Round(Avg(rating / position), 2) quality
        FROM   queries
        WHERE  query_name IS NOT NULL
        GROUP  BY query_name) c
       LEFT JOIN (SELECT a.query_name,
                         Round(a.low / b.total * 100, 2) poor_query_percentage
                  FROM   (SELECT query_name,
                                 Count(1) low
                          FROM   queries
                          WHERE  rating < 3
                                 AND query_name IS NOT NULL
                          GROUP  BY query_name) a
                         LEFT JOIN (SELECT Count(1) total,
                                           query_name
                                    FROM   queries
                                    GROUP  BY query_name) b
                                ON a.query_name = b.query_name) d
              ON d.query_name = c.query_name 
-- @lc code=end

