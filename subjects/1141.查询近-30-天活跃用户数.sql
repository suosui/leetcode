--
-- @lc app=leetcode.cn id=1141 lang=mysql
--
-- [1141] 查询近30天活跃用户数
--
-- https://leetcode.cn/problems/user-activity-for-the-past-30-days-i/description/
--
-- database
-- Easy (45.50%)
-- Likes:    125
-- Dislikes: 0
-- Total Accepted:    79.8K
-- Total Submissions: 175.3K
-- Testcase Example:  '{"headers":{"Activity":["user_id","session_id","activity_date","activity_type"]},"rows":{"Activity":[[1,1,"2019-07-20","open_session"],[1,1,"2019-07-20","scroll_down"],[1,1,"2019-07-20","end_session"],[2,4,"2019-07-20","open_session"],[2,4,"2019-07-21","send_message"],[2,4,"2019-07-21","end_session"],[3,2,"2019-07-21","open_session"],[3,2,"2019-07-21","send_message"],[3,2,"2019-07-21","end_session"],[4,3,"2019-06-25","open_session"],[4,3,"2019-06-25","end_session"]]}}'
--
-- 表：Activity
-- 
-- 
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | user_id       | int     |
-- | session_id    | int     |
-- | activity_date | date    |
-- | activity_type | enum    |
-- +---------------+---------+
-- 该表没有包含重复数据。
-- activity_type 列是 ENUM(category) 类型， 从 ('open_session'， 'end_session'，
-- 'scroll_down'， 'send_message') 取值。
-- 该表记录社交媒体网站的用户活动。
-- 注意，每个会话只属于一个用户。
-- 
-- 
-- 
-- 
-- 编写解决方案，统计截至 2019-07-27（包含2019-07-27），近 30 天的每日活跃用户数（当天只要有一条活动记录，即为活跃用户）。
-- 
-- 以 任意顺序 返回结果表。
-- 
-- 结果示例如下。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入：
-- Activity table:
-- +---------+------------+---------------+---------------+
-- | user_id | session_id | activity_date | activity_type |
-- +---------+------------+---------------+---------------+
-- | 1       | 1          | 2019-07-20    | open_session  |
-- | 1       | 1          | 2019-07-20    | scroll_down   |
-- | 1       | 1          | 2019-07-20    | end_session   |
-- | 2       | 4          | 2019-07-20    | open_session  |
-- | 2       | 4          | 2019-07-21    | send_message  |
-- | 2       | 4          | 2019-07-21    | end_session   |
-- | 3       | 2          | 2019-07-21    | open_session  |
-- | 3       | 2          | 2019-07-21    | send_message  |
-- | 3       | 2          | 2019-07-21    | end_session   |
-- | 4       | 3          | 2019-06-25    | open_session  |
-- | 4       | 3          | 2019-06-25    | end_session   |
-- +---------+------------+---------------+---------------+
-- 输出：
-- +------------+--------------+ 
-- | day        | active_users |
-- +------------+--------------+ 
-- | 2019-07-20 | 2            |
-- | 2019-07-21 | 2            |
-- +------------+--------------+ 
-- 解释：注意非活跃用户的记录不需要展示。
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT activity_date           day,
       Count(DISTINCT user_id) active_users
FROM   activity
WHERE  activity_type IN( 'open_session', 'send_message', 'scroll_down',
                         'end_session' )
       AND activity_date > Date('2019-06-27')
       AND activity_date <= Date('2019-07-27')
GROUP  BY activity_date 
-- @lc code=end

