--
-- @lc app=leetcode.cn id=1084 lang=mysql
--
-- [1084] 销售分析III
--
-- https://leetcode.cn/problems/sales-analysis-iii/description/
--
-- database
-- Easy (51.80%)
-- Likes:    189
-- Dislikes: 0
-- Total Accepted:    77.7K
-- Total Submissions: 150K
-- Testcase Example:  '{"headers":{"Product":["product_id","product_name","unit_price"],"Sales":["seller_id","product_id","buyer_id","sale_date","quantity","price"]},"rows":{"Product":[[1,"S8",1000],[2,"G4",800],[3,"iPhone",1400]],"Sales":[[1,1,1,"2019-01-21",2,2000],[1,2,2,"2019-02-17",1,800],[2,2,3,"2019-06-02",1,800],[3,3,4,"2019-05-13",2,2800]]}}'
--
-- 表： Product
-- 
-- 
-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | product_id   | int     |
-- | product_name | varchar |
-- | unit_price   | int     |
-- +--------------+---------+
-- product_id 是该表的主键（具有唯一值的列）。
-- 该表的每一行显示每个产品的名称和价格。
-- 
-- 
-- 表：Sales
-- 
-- 
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | seller_id   | int     |
-- | product_id  | int     |
-- | buyer_id    | int     |
-- | sale_date   | date    |
-- | quantity    | int     |
-- | price       | int     |
-- +------ ------+---------+
-- 这个表可能有重复的行。
-- product_id 是 Product 表的外键（reference 列）。
-- 该表的每一行包含关于一个销售的一些信息。
-- 
-- 
-- 
-- 
-- 编写解决方案，报告2019年春季才售出的产品。即仅在2019-01-01至2019-03-31（含）之间出售的商品。
-- 
-- 以 任意顺序 返回结果表。
-- 
-- 结果格式如下所示。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入：
-- Product table:
-- +------------+--------------+------------+
-- | product_id | product_name | unit_price |
-- +------------+--------------+------------+
-- | 1          | S8           | 1000       |
-- | 2          | G4           | 800        |
-- | 3          | iPhone       | 1400       |
-- +------------+--------------+------------+
-- Sales table:
-- +-----------+------------+----------+------------+----------+-------+
-- | seller_id | product_id | buyer_id | sale_date  | quantity | price |
-- +-----------+------------+----------+------------+----------+-------+
-- | 1         | 1          | 1        | 2019-01-21 | 2        | 2000  |
-- | 1         | 2          | 2        | 2019-02-17 | 1        | 800   |
-- | 2         | 2          | 3        | 2019-06-02 | 1        | 800   |
-- | 3         | 3          | 4        | 2019-05-13 | 2        | 2800  |
-- +-----------+------------+----------+------------+----------+-------+
-- 输出：
-- +-------------+--------------+
-- | product_id  | product_name |
-- +-------------+--------------+
-- | 1           | S8           |
-- +-------------+--------------+
-- 解释:
-- id 为 1 的产品仅在 2019 年春季销售。
-- id 为 2 的产品在 2019 年春季销售，但也在 2019 年春季之后销售。
-- id 为 3 的产品在 2019 年春季之后销售。
-- 我们只返回 id 为 1 的产品，因为它是 2019 年春季才销售的产品。
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.product_id,
       b.product_name
FROM   (SELECT DISTINCT( product_id )
        FROM   sales
        WHERE  sale_date BETWEEN Date('2019-01-01') AND Date('2019-03-31')
               AND product_id NOT IN(SELECT DISTINCT( product_id )
                                     FROM   sales
                                     WHERE  sale_date < Date('2019-01-01')
                                             OR sale_date > Date('2019-03-31')))
       a
       LEFT JOIN (SELECT *
                  FROM   product) b
              ON a.product_id = b.product_id 
-- @lc code=end

