--
-- @lc app=leetcode.cn id=1164 lang=mysql
--
-- [1164] 指定日期的产品价格
--
-- https://leetcode.cn/problems/product-price-at-a-given-date/description/
--
-- database
-- Medium (56.63%)
-- Likes:    173
-- Dislikes: 0
-- Total Accepted:    35K
-- Total Submissions: 61.8K
-- Testcase Example:  '{"headers":{"Products":["product_id","new_price","change_date"]},"rows":{"Products":[[1,20,"2019-08-14"],[2,50,"2019-08-14"],[1,30,"2019-08-15"],[1,35,"2019-08-16"],[2,65,"2019-08-17"],[3,20,"2019-08-18"]]}}'
--
-- 产品数据表: Products
-- 
-- 
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | product_id    | int     |
-- | new_price     | int     |
-- | change_date   | date    |
-- +---------------+---------+
-- (product_id, change_date) 是此表的主键（具有唯一值的列组合）。
-- 这张表的每一行分别记录了 某产品 在某个日期 更改后 的新价格。
-- 
-- 
-- 
-- 编写一个解决方案，找出在 2019-08-16 时全部产品的价格，假设所有产品在修改前的价格都是 10 。
-- 
-- 以 任意顺序 返回结果表。
-- 
-- 结果格式如下例所示。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入：
-- Products 表:
-- +------------+-----------+-------------+
-- | product_id | new_price | change_date |
-- +------------+-----------+-------------+
-- | 1          | 20        | 2019-08-14  |
-- | 2          | 50        | 2019-08-14  |
-- | 1          | 30        | 2019-08-15  |
-- | 1          | 35        | 2019-08-16  |
-- | 2          | 65        | 2019-08-17  |
-- | 3          | 20        | 2019-08-18  |
-- +------------+-----------+-------------+
-- 输出：
-- +------------+-------+
-- | product_id | price |
-- +------------+-------+
-- | 2          | 50    |
-- | 1          | 35    |
-- | 3          | 10    |
-- +------------+-------+
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.product_id,
       COALESCE(b.new_price, 10) price
FROM   (SELECT product_id
        FROM   products
        GROUP  BY product_id) a
       LEFT JOIN (SELECT *
                  FROM   products
                  WHERE  ( product_id, change_date ) IN (SELECT product_id,
                                                                Max(change_date)
                                                         FROM   products
                                                         WHERE
                         change_date <= Date('2019-08-16')
                                                         GROUP  BY product_id))b
              ON a.product_id = b.product_id 
-- @lc code=end

