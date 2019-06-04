-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 08:36:30
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(100) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `discount` int(10) NOT NULL COMMENT '商品折扣',
  `pic` varchar(255) NOT NULL COMMENT '图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `discount`, `pic`, `details`) VALUES
(1, 'Divinity: Original Sin 2 - Definitive Edition', 520, 50, 'img/header_292x136 (1).jpg,\r\nimg/header_292x136 (1)01.jpg,\r\nimg/header_292x136 (1)02.jpg,\r\nimg/header_292x136 (1)03.jpg,\r\nimg/header_292x136 (1)04.jpg,\r\nimg/header_292x136 (1)00.jpg\r\n', '这是一部备受期待获奖众多的角色扮演游戏的续作。召集你的团队，探讨战术，左右战局。你最多可以和其他三名玩家合作——但是，最终只有其中一人有机会成为神。'),
(2, 'Greedy Guns\r\n', 400, 15, 'img/header_292x136 (2).jpg,\r\nimg/header_292x136 (2)01.jpg,\r\nimg/header_292x136 (2)02.jpg,\r\nimg/header_292x136 (2)03.jpg,\r\nimg/header_292x136 (2)04.jpg,\r\nimg/header_292x136 (2)00.jpg', '《贪婪之枪》是一款色彩明快，充满乐趣的平台跳跃游戏，利用高难度的挑战搭建出了丰富的可探索内容。这款街机风双摇杆射击游戏充满了极其困难的挑战，准备好品尝泪水的苦涩吧。'),
(3, 'UBOAT', 49, 26, 'img/header_292x136 (3).jpg,\r\nimg/header_292x136 (3)01.jpg,\r\nimg/header_292x136 (3)02.jpg,\r\nimg/header_292x136 (3)03.jpg,\r\nimg/header_292x136 (3)04.jpg,\r\nimg/header_292x136 (3)00.jpg', '《UBOAT》是一款二战时期潜艇的模拟游戏。这款沙盒类生存游戏包含船员管理机制，游戏主题是德国水手的生活。潜艇是他们的家，不过随时都有可能变成他们的坟墓。'),
(4, 'GRID', 980, 50, 'img/header_292x136 (4).jpg,\r\nimg/header_292x136 (4)01.jpg,\r\nimg/header_292x136 (4)02.jpg,\r\nimg/header_292x136 (4)03.jpg,\r\nimg/header_292x136 (4)04.jpg,\r\nimg/header_292x136 (4)00.jpg', 'GRID是一款无与伦比的赛车游戏。本次回归，GRID将会为大家带来一场全新的竞速体验。每次赛事都将成为你选择自己的赛车之路，书写传奇，征服整个赛车界的机会。'),
(5, 'Edge Of Eternity', 666, 58, 'img/header_292x136 (5).jpg,\r\nimg/header_292x136 (5)01.jpg,\r\nimg/header_292x136 (5)02.jpg,\r\nimg/header_292x136 (5)03.jpg,\r\nimg/header_292x136 (5)04.jpg,\r\nimg/header_292x136(5)00.jpg', '本作采用华丽的回合制战斗，您要做的就是跟随达里翁和塞琳娜，在寻找“腐蚀”治愈方法的途中，体验关于希望与奉献的宏伟史诗。'),
(6, 'Yuppie Psycho\r\n', 4000, 5, 'img/header_292x136 (6).jpg,\r\nimg/header_292x136 (6)01.jpg,\r\nimg/header_292x136 (6)02.jpg,\r\nimg/header_292x136 (6)03.jpg,\r\nimg/header_292x136 (6)04.jpg,\r\nimg/header_292x136 (6)00.jpg', '布莱恩·帕斯特纳克来到世界上最大的公司辛特拉集团的第一天，毫无准备，忐忑不安，觉得自己完全无法胜任这里的工作。帕斯特纳克能在辛特拉森严的等级制度里脱颖而出吗？这完全取决于他在第一个任务中的表现，以及……他能不能活下来！'),
(8, 'From the co-creator of Rick and Morty ', 850, 45, 'img/header_292x136 (7).jpg,\r\nimg/header_292x136 (7)01.jpg,\r\nimg/header_292x136 (7)02.jpg,\r\nimg/header_292x136 (7)03.jpg,\r\nimg/header_292x136 (7)04.jpg,\r\nimg/header_292x136 (7)00.jpg', 'From the co-creator of Rick and Morty comes Trover Saves the Universe. Your pups are missing. The cosmos is at stake. Only you and Trover can save everything in this bizarre comedy adventure!\r\n'),
(9, 'Shadows of Adam', 500, 14, 'img/header_292x136 (9).jpg,\r\nimg/header_292x136 (9)01.jpg,\r\nimg/header_292x136 (9)02.jpg,\r\nimg/header_292x136 (9)03.jpg,\r\nimg/header_292x136 (9)04.jpg,\r\nimg/header_292x136(9)00.jpg', 'Gorgeous pixel art. Intense, blazing fast battles. An epic adventure. This is the must-play retro indie JRP'),
(10, 'Katana ZERO\r\n', 250, 85, 'img/header_292x136 (8).jpg,\nimg/header_292x136 (8)01.jpg,\nimg/header_292x136 (8)02.jpg,\nimg/header_292x136 (8)03.jpg,\nimg/header_292x136 (8)04.jpg,\nimg/header_292x136 (8)00.jpg', '《武士 零（Katana ZERO）》是一款新黑色电影风格的华丽平台动作游戏，以极速动作展开瞬间决定生死的战斗，劈砍、冲刺、操纵时间，在华丽、无情、行云流水般的战斗中发现你的过去。');

-- --------------------------------------------------------

--
-- 表的结构 `userdate`
--

CREATE TABLE `userdate` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `user_name` varchar(20) NOT NULL COMMENT '用户名',
  `user_pwd` varchar(30) NOT NULL COMMENT '用户密码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `userdate`
--

INSERT INTO `userdate` (`id`, `user_name`, `user_pwd`) VALUES
(10050, '123123', ''),
(10049, '123123', ''),
(10048, '123123', ''),
(10047, '123123', ''),
(10046, '', ''),
(10045, '1231233333', '123123'),
(10044, '1111111111', '123123'),
(10043, '123123', '123123'),
(10042, '123123', '123123'),
(10041, '12312312', '123123'),
(10040, '123456789', '123456'),
(10039, '1111111', '123123'),
(10020, '123123', '123123'),
(10038, '123123', '123123'),
(10037, '123123', '123123'),
(10036, '12333333', '3333333333'),
(10035, '333333333', '111111111111'),
(10034, '111111', '123123'),
(10033, 'zhangsan1', '123123'),
(10032, 'zhangsan', '123456'),
(10031, '2222222222222', '222222222222'),
(10051, '123123', '123123'),
(10052, '44444444', '123123'),
(10053, '123123', '123123'),
(10054, '33333333333333333333', '123123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdate`
--
ALTER TABLE `userdate`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `userdate`
--
ALTER TABLE `userdate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=10055;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
