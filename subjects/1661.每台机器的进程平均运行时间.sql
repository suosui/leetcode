--
-- @lc app=leetcode.cn id=1661 lang=mysql
--
-- [1661] 每台机器的进程平均运行时间
--
-- https://leetcode.cn/problems/average-time-of-process-per-machine/description/
--
-- database
-- Easy (69.69%)
-- Likes:    155
-- Dislikes: 0
-- Total Accepted:    45.5K
-- Total Submissions: 65.2K
-- Testcase Example:  '{"headers":{"Activity":["machine_id","process_id","activity_type","timestamp"]},"rows":{"Activity":[[0,0,"start",0.712],[0,0,"end",1.52],[0,1,"start",3.14],[0,1,"end",4.12],[1,0,"start",0.55],[1,0,"end",1.55],[1,1,"start",0.43],[1,1,"end",1.42],[2,0,"start",4.1],[2,0,"end",4.512],[2,1,"start",2.5],[2,1,"end",5]]}}'
--
-- 表: Activity
-- 
-- 
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | machine_id     | int     |
-- | process_id     | int     |
-- | activity_type  | enum    |
-- | timestamp      | float   |
-- +----------------+---------+
-- 该表展示了一家工厂网站的用户活动。
-- (machine_id, process_id, activity_type) 是当前表的主键（具有唯一值的列的组合）。
-- machine_id 是一台机器的ID号。
-- process_id 是运行在各机器上的进程ID号。
-- activity_type 是枚举类型 ('start', 'end')。
-- timestamp 是浮点类型,代表当前时间(以秒为单位)。
-- 'start' 代表该进程在这台机器上的开始运行时间戳 , 'end' 代表该进程在这台机器上的终止运行时间戳。
-- 同一台机器，同一个进程都有一对开始时间戳和结束时间戳，而且开始时间戳永远在结束时间戳前面。
-- 
-- 
-- 
-- 现在有一个工厂网站由几台机器运行，每台机器上运行着 相同数量的进程 。编写解决方案，计算每台机器各自完成一个进程任务的平均耗时。
-- 
-- 完成一个进程任务的时间指进程的'end' 时间戳 减去 'start'
-- 时间戳。平均耗时通过计算每台机器上所有进程任务的总耗费时间除以机器上的总进程数量获得。
-- 
-- 结果表必须包含machine_id（机器ID） 和对应的 average time（平均耗时） 别名
-- processing_time，且四舍五入保留3位小数。
-- 
-- 以 任意顺序 返回表。
-- 
-- 具体参考例子如下。
-- 
-- 
-- 
-- 示例 1:
-- 
-- 
-- 输入：
-- Activity table:
-- +------------+------------+---------------+-----------+
-- | machine_id | process_id | activity_type | timestamp |
-- +------------+------------+---------------+-----------+
-- | 0          | 0          | start         | 0.712     |
-- | 0          | 0          | end           | 1.520     |
-- | 0          | 1          | start         | 3.140     |
-- | 0          | 1          | end           | 4.120     |
-- | 1          | 0          | start         | 0.550     |
-- | 1          | 0          | end           | 1.550     |
-- | 1          | 1          | start         | 0.430     |
-- | 1          | 1          | end           | 1.420     |
-- | 2          | 0          | start         | 4.100     |
-- | 2          | 0          | end           | 4.512     |
-- | 2          | 1          | start         | 2.500     |
-- | 2          | 1          | end           | 5.000     |
-- +------------+------------+---------------+-----------+
-- 输出：
-- +------------+-----------------+
-- | machine_id | processing_time |
-- +------------+-----------------+
-- | 0          | 0.894           |
-- | 1          | 0.995           |
-- | 2          | 1.456           |
-- +------------+-----------------+
-- 解释：
-- 一共有3台机器,每台机器运行着两个进程.
-- 机器 0 的平均耗时: ((1.520 - 0.712) + (4.120 - 3.140)) / 2 = 0.894
-- 机器 1 的平均耗时: ((1.550 - 0.550) + (1.420 - 0.430)) / 2 = 0.995
-- 机器 2 的平均耗时: ((4.512 - 4.100) + (5.000 - 2.500)) / 2 = 1.456
-- 
--

-- @lc code=start
# Write your MySQL query statement below
SELECT tmp.machine_id,
       Round(Avg(tmp.diff), 3) AS processing_time
FROM   (SELECT a1.machine_id,
               a2.timestamp - a1.timestamp AS diff
        FROM   activity AS a1
               LEFT JOIN activity AS a2
                      ON a1.machine_id = a2.machine_id
                         AND a1.process_id = a2.process_id
        WHERE  a1.activity_type = 'start'
               AND a2.activity_type = 'end') AS tmp
GROUP  BY tmp.machine_id 
-- @lc code=end

