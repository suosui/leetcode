--
-- @lc app=leetcode.cn id=1193 lang=mysql
--
-- [1193] 每月交易 I
--
-- https://leetcode.cn/problems/monthly-transactions-i/description/
--
-- database
-- Medium (60.92%)
-- Likes:    116
-- Dislikes: 0
-- Total Accepted:    42.4K
-- Total Submissions: 69.6K
-- Testcase Example:  '{"headers":{"Transactions":["id","country","state","amount","trans_date"]},"rows":{"Transactions":[[121,"US","approved",1000,"2018-12-18"],[122,"US","declined",2000,"2018-12-19"],[123,"US","approved",2000,"2019-01-01"],[124,"DE","approved",2000,"2019-01-07"]]}}'
--
-- 表：Transactions
-- 
-- 
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | country       | varchar |
-- | state         | enum    |
-- | amount        | int     |
-- | trans_date    | date    |
-- +---------------+---------+
-- id 是这个表的主键。
-- 该表包含有关传入事务的信息。
-- state 列类型为 ["approved", "declined"] 之一。
-- 
-- 
-- 
-- 
-- 编写一个 sql 查询来查找每个月和每个国家/地区的事务数及其总金额、已批准的事务数及其总金额。
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
-- 输入：
-- Transactions table:
-- +------+---------+----------+--------+------------+
-- | id   | country | state    | amount | trans_date |
-- +------+---------+----------+--------+------------+
-- | 121  | US      | approved | 1000   | 2018-12-18 |
-- | 122  | US      | declined | 2000   | 2018-12-19 |
-- | 123  | US      | approved | 2000   | 2019-01-01 |
-- | 124  | DE      | approved | 2000   | 2019-01-07 |
-- +------+---------+----------+--------+------------+
-- 输出：
-- 
-- +----------+---------+-------------+----------------+--------------------+-----------------------+
-- | month    | country | trans_count | approved_count | trans_total_amount |
-- approved_total_amount |
-- 
-- +----------+---------+-------------+----------------+--------------------+-----------------------+
-- | 2018-12  | US      | 2           | 1              | 3000               |
-- 1000                  |
-- | 2019-01  | US      | 1           | 1              | 2000               |
-- 2000                  |
-- | 2019-01  | DE      | 1           | 1              | 2000               |
-- 2000                  |
-- 
-- +----------+---------+-------------+----------------+--------------------+-----------------------+
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.month,
       a.country,
       COALESCE(a.trans_count, 0)           trans_count,
       COALESCE(b.approved_count, 0)        approved_count,
       COALESCE(a.trans_total_amount, 0)    trans_total_amount,
       COALESCE(b.approved_total_amount, 0) approved_total_amount
FROM   (SELECT Date_format(trans_date, '%Y-%m') month,
               country,
               Sum(amount)                      trans_total_amount,
               Count(1)                         trans_count
        FROM   transactions
        GROUP  BY country,
                  Date_format(trans_date, '%Y-%m')) a
       LEFT JOIN (SELECT Date_format(trans_date, '%Y-%m') month,
                         country,
                         Sum(amount)                      approved_total_amount,
                         Count(1)                         approved_count
                  FROM   transactions
                  WHERE  state = 'approved'
                  GROUP  BY country,
                            Date_format(trans_date, '%Y-%m')) b
              ON a.month = b.month 
              AND a.country <=> b.country
-- @lc code=end

