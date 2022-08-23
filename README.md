# Handgout 项目

## 文件目录

token = osDXq5IFPw3eERUD8LejfgAF0108

```shell
# Handgout 项目

## 文件目录

hangout
├─ .git
├─ Pages (页面)
│    ├─ HGBot (憨狗bot)
│    │    ├─ Home (憨狗Bot主页面)
│    │    │    ...
│    │    │    └─ Home.wxml
│    │    ├─ Rd (抽签页)
│    │    │    ...
│    │    │    └─ Rd.wxss
│    │    ├─ Vote (投票)
│    │    │    ├─ received (收到某用户发起的投票)
│    │    │    │    ...
│    │    │    │    └─ received.wxml
│    │    │    └─ send (用户发起投票)
│    │    │           ...
│    │    │           └─ send.wxml
│    │    └─ Whisper (悄悄话)
│    │           ├─ received (收到悄悄话)
│    │           │    ├─ received.wxml (收到某人的悄悄话)
│    │           │    ...
│    │           │    └─ total.wxml (过往收到的所有悄悄话)
│    │           └─ send (发送悄悄话)
│    │                  ├─ OK.wxml (悄悄话发送成功)
│    │                  ...
│    │                  ├─ getMsg.wxml (悄悄话信息录入)
│    │                  ...
│    │                  └─ send.wxml (选择发送悄悄话)
│    ├─ homepage (欢迎页面)
│    │    ...
│    │    └─ homepage.wxml
│    ├─ menu (菜单)
│    │    ├─ menu.wxml (主菜单页面)
│    │    └─ pre.wxml (新手教程)
│    └─ travel (行程安排)
│           ├─ plan (行程安排)
│           │    ├─ main (主页面)
│           │    │    ├─ index (规划中行程主页面)
│           │    │    │    ...
│           │    │    │    └─ index.wxml
│           │    │    ├─ member (成员信息列表)
│           │    │    │    ├─ leader.wxml (组长信息页)
│           │    │    │    ...
│           │    │    │    └─ member.wxml (普通成员信息页)
│           │    │    ...
│           │    │    ├─ menu.wxml (有过往行程时的主界面)
│           │    │    └─ wish (愿望清单)
│           │    │           ├─ vote (投票)
│           │    │           │    ├─ fail (非组长发起投票导致失败页面)
│           │    │           │    │    ...
│           │    │           │    │    └─ fail.wxss
│           │    │           │    ├─ finish (结果展示)
│           │    │           │    │    ├─ finish.wxml (结束投票页面(仅组长可见))
│           │    │           │    │    ...
│           │    │           │    │    └─ result.wxml (展示投票结果)
│           │    └─ new (创建新行程)
│           │           ├─ create.wxml (创建行程)
│           │           └─ share.wxml (新行程分享邀请加入(分享之后跳转至愿望清单))
├─ asset (媒体文件)
│    └─ img (图像)
│           ├─ erweima.png
...           ...
│           └─ wechat.png
├─ components (组件库)
│    ├─ eat (干饭地点投票)
│    │    ...
│    │    └─ eat.wxml
│    ├─ half (半日日程投票)
│    │    ...
│    │    └─ half.wxml
│    ├─ main (主行程规划页面)
│    │    ...
│    │    └─ main.wxml
│    ├─ member (成员信息列表)
│    │    ...
│    │    └─ member.wxml
│    ├─ whole (一日日程投票)
│    │    ...
│    │    └─ whole.wxml
│    ├─ wish (未发起投票时的愿望清单页面)
│    │    ...
│    │    └─ wish.wxml
│    ├─ wish1 (组长发起投票后愿望清单主页面)
│    │    ...
│    │    └─ wish1.wxml
│    └─ wish2 (投票结束后愿望清单主页面)
│           ...
│           └─ wish2.wxml
├─ README.md
├─ app.js
├─ app.json
├─ app.wxss
├─ project.config.json
├─ project.private.config.json
└─ sitemap.json
```



## 前端

- asset：图片库
- Pages：所有文件
- components：组件库

- /Pages/homepage：欢迎页面

- /Pages/menu/menu：主菜单页面
- /Pages/menu/new_usr：新用户完善个人信息
- /Pages/menu/pre：新手教程

### 我的账号

-/Pages/id：我的账号页面

### 我的行程
- /Pages/travel/home/home：我的行程页面菜单

#### 行前准备
- /Pages/travel/preparation/index/index：行前准备主页面
- /components/list/list：物品清单
- /components/memory/memory：备忘录

- /components/message/message：当地信息
- /Pages/travel/preparation/message/eat/eat：当地饮食信息界面
- /Pages/travel/preparation/message/play/play：娱乐信息
- /Pages/travel/preparation/message/travel/travel：交通信息
- /Pages/travel/preparation/message/weather/weather：天气信息
- /Pages/travel/preparation/message/epidemic/epidemic：地方防疫政策相关信息

#### 行程安排

- /Pages/travel/plan/new/new：无过往行程时的主页面
- /Pages/travel/plan/new/create：创建行程
- /Pages/travel/plan/new/share：新行程分享邀请加入（分享之后跳转至愿望清单）

- /Pages/travel/plan/main/menu：有过往行程时的主界面
- /Pages/travel/plan/main/index/index：规划中行程主页面
- /components/main/main：主行程规划页面（点某一具体时间段跳转到计划打卡页面完成打卡）

- /components/wish/wish：未发起投票时的愿望清单页面
- /Pages/travel/plan/main/wish/vote/fail/fail：非组长发起投票导致失败页面
- /components/wish1/wish1：组长发起投票后愿望清单主页面（和下面那个二选1删因为我不知道用哪个）
- /Pages/travel/plan/main/wish/vote/index/index：组长发起投票后愿望清单主页面
- /components/half/half：半日日程投票
- /components/whole/whole：一日日程投票
- /components/eat/eat：干饭地点投票
- /Pages/travel/plan/main/wish/vote/vote：对某地点投票页面
- /Pages/travel/plan/main/wish/vote/finish/result：展示投票结果
- /Pages/travel/plan/main/wish/vote/finish/finish：结束投票页面（仅组长可见）
- /components/wish2/wish2：投票结束后愿望清单主页面（和下面那个二选1删因为我不知道用哪个
- /Pages/travel/plan/main/wish/wish/wish：投票结束后愿望清单主页面（用于展示目前所得愿望）
- /Pages/travel/plan/main/wish/wish/new：新增愿望

- /components/assistant/assistant：副日程页面
- /Pages/travel/plan/main/assistant/somewhere：附近某地点的详细展示

- /components/member/member：成员信息列表
- /Pages/travel/plan/main/member/leader：组长信息页
- /Pages/travel/plan/main/member/member：普通成员信息页

#### 行程跟进
- /Pages/travel/follow/index/index：行程跟进主页面
- /components/report/report：中途离开时行动报备
- /components/bill/bill：行程账单记录
- /components/checked/checked：出行地点打卡

#### 行程测评
- /Pages/travel/evaluation/index/index：行程评价主页面
- /components/eval/eval：行程满意度打分
- /components/note/note：旅行手札记录
- /components/share/share：旅行计划分享

### 社区分享

- /Pages/community/index/index：社区主页面
- /components/community/community：社区页面
- /Pages/community/plan/new：发布新动态
- /Pages/community/plan/view：查看某动态
- /Pages/community/plan/info：查看某人动态圈儿

- /components/history/history：浏览历史
- /components/star/star：收藏夹
- /components/id/id：个人主页

### 憨狗bot

- /Pages/HGBot/Home/Home：憨狗Bot主页面
- /Pages/HGBot/Rd/Rd：抽签页
- /Pages/HGBot/Vote/send：用户发起投票
- /Pages/HGBot/Vote/received：收到某用户发起的投票
- /Pages/HGBot/Whisper/send/getMsg：悄悄话信息录入
- /Pages/HGBot/Whisper/send/send：选择发送悄悄话
- /Pages/HGBot/Whisper/send/OK：悄悄话发送成功
- /Pages/HGBot/Whisper/received/received：收到某人的悄悄话
- /Pages/HGBot/Whisper/received/total：过往收到的所有悄悄话



在此总结一下问题

- 需要从后端传数据的一律没有具体函数
- 部分页面可能渲染起来会很卡
- 插入页面后导航栏不固定在底部的问题暂未解决
- `/components/list` 和 `/components/memory` 中的交互问题
- 到底哪些页面在跳转时需要记录上一个页面？

