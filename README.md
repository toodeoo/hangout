# Handgout 项目

## 前端

（文件夹与文件或许有些乱，后期可能需要进行重构）

asset：图片库
Pages：所有文件

homepage：欢迎页面

menu：主菜单页面

preparation：行前准备

HGBot：憨狗 bot
HGBot/Home：憨狗 Bot 主页面
HGBot/Rd：抽签页
HGBot/Vote：投票页
HGBot/Whisper：悄悄话页

在此总结一下问题

- 需要从后端传数据的一律没有具体函数
- 部分页面可能渲染起来会很卡
- 插入页面后导航栏不固定在底部的问题暂未解决
- `/components/list` 和 `/components/memory` 中的交互问题
- 到底哪些页面在跳转时需要记录上一个页面？
