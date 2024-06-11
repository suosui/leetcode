--
-- @lc app=leetcode.cn id=1174 lang=mysql
--
-- [1174] 即时食物配送 II
--
-- https://leetcode.cn/problems/immediate-food-delivery-ii/description/
--
-- database
-- Medium (52.88%)
-- Likes:    95
-- Dislikes: 0
-- Total Accepted:    34.4K
-- Total Submissions: 65.1K
-- Testcase Example:  '{"headers":{"Delivery":["delivery_id","customer_id","order_date","customer_pref_delivery_date"]},"rows":{"Delivery":[[1,1,"2019-08-01","2019-08-02"],[2,2,"2019-08-02","2019-08-02"],[3,1,"2019-08-11","2019-08-12"],[4,3,"2019-08-24","2019-08-24"],[5,3,"2019-08-21","2019-08-22"],[6,2,"2019-08-11","2019-08-13"],[7,4,"2019-08-09","2019-08-09"]]}}'
--
-- 配送表: Delivery
-- 
-- 
-- +-----------------------------+---------+
-- | Column Name                 | Type    |
-- +-----------------------------+---------+
-- | delivery_id                 | int     |
-- | customer_id                 | int     |
-- | order_date                  | date    |
-- | customer_pref_delivery_date | date    |
-- +-----------------------------+---------+
-- delivery_id 是该表中具有唯一值的列。
-- 该表保存着顾客的食物配送信息，顾客在某个日期下了订单，并指定了一个期望的配送日期（和下单日期相同或者在那之后）。
-- 
-- 
-- 
-- 
-- 如果顾客期望的配送日期和下单日期相同，则该订单称为 「即时订单」，否则称为「计划订单」。
-- 
-- 「首次订单」是顾客最早创建的订单。我们保证一个顾客只会有一个「首次订单」。
-- 
-- 编写解决方案以获取即时订单在所有用户的首次订单中的比例。保留两位小数。
-- 
-- 结果示例如下所示：
-- 
-- 
-- 
-- 示例 1：
-- 
-- 
-- 输入：
-- Delivery 表：
-- +-------------+-------------+------------+-----------------------------+
-- | delivery_id | customer_id | order_date | customer_pref_delivery_date |
-- +-------------+-------------+------------+-----------------------------+
-- | 1           | 1           | 2019-08-01 | 2019-08-02                  |
-- | 2           | 2           | 2019-08-02 | 2019-08-02                  |
-- | 3           | 1           | 2019-08-11 | 2019-08-12                  |
-- | 4           | 3           | 2019-08-24 | 2019-08-24                  |
-- | 5           | 3           | 2019-08-21 | 2019-08-22                  |
-- | 6           | 2           | 2019-08-11 | 2019-08-13                  |
-- | 7           | 4           | 2019-08-09 | 2019-08-09                  |
-- +-------------+-------------+------------+-----------------------------+
-- 输出：
-- +----------------------+
-- | immediate_percentage |
-- +----------------------+
-- | 50.00                |
-- +----------------------+
-- 解释：
-- 1 号顾客的 1 号订单是首次订单，并且是计划订单。
-- 2 号顾客的 2 号订单是首次订单，并且是即时订单。
-- 3 号顾客的 5 号订单是首次订单，并且是计划订单。
-- 4 号顾客的 7 号订单是首次订单，并且是即时订单。
-- 因此，一半顾客的首次订单是即时的。
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT Round(b.cnt_timely_first_order / b.cnt_firsrt_order * 100, 2)
       immediate_percentage
FROM   (SELECT Count(CASE
                       WHEN a.timely_in_first_order = 'yes' THEN 1
                     END) cnt_timely_first_order,
               Count(CASE
                       WHEN a.is_first_order = 'yes' THEN 1
                     END) cnt_firsrt_order
        FROM   (SELECT a.delivery_id,
                       a.customer_pref_delivery_date,
                       a.order_date,
                       IF(b.fist_order_date = order_date, 'yes', 'no')
                       is_first_order,
                       IF(IF(b.fist_order_date = order_date, 'yes', 'no') =
                          'yes'
                          AND IF(order_date = customer_pref_delivery_date, 'yes'
                              , 'no')
                              = 'yes'
                               , 'yes',
                       'no')
                       timely_in_first_order
                FROM   delivery a
                       left join (SELECT Min(order_date) fist_order_date,
                                         customer_id
                                  FROM   delivery
                                  GROUP  BY customer_id) b
                              ON a.customer_id = b.customer_id) a)b 
-- @lc code=end

