
//初始化数据
function tabbarinit() {
    return [
         { "current":0,
           "pagePath": "/Pages/travel/follow/report/report",
           "iconPath": "/asset/img/icon-report.png",
           "selectedIconPath": "/asset/img/icon-report0.png",
           "text": "行动报备"
         },
         {
           "current": 0,
           "pagePath": "/Pages/travel/follow/bill/bill",
           "iconPath": "/asset/img/icon-bill.png",
           "selectedIconPath": "/asset/img/icon-bill0.png",
           "text": "记账单"
   
         },
         {
           "current": 0,
           "pagePath": "/Pages/travel/follow/checked/checked",
           "iconPath": "/asset/img/icon-checked.png",
           "selectedIconPath": "/asset/img/icon-checked0.png",
           "text": "计划打卡"
         }
       ]
   
   }
   
   /**
    * tabbar主入口
    * @param  {String} bindName 
    * @param  {[type]} id       [表示第几个tabbar，以0开始]
    * @param  {[type]} target   [当前对象]
    */
   function tabbarmain(bindName = "tabdata", id, target) {
     var that = target;
     var bindData = {};
     var otabbar = tabbarinit();
     otabbar[id]["iconPath"] = otabbar[id]["selectedIconPath"]//换当前的icon
     otabbar[id]['current'] = 1;
     bindData[bindName] = otabbar
     that.setData({ bindData });
   }
   
   module.exports = {
     tabbar: tabbarmain
   }