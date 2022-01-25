// components/eval/eval.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    id: "洗后提",
    num0: 12,
    num1: 10,
    num2: 8,
    wjxscore: 0,
    userstars: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRet: function () {
      wx.reLaunch({
        url: "/Pages/travel/home/home",
      });
    },
    //星星点击事件
    starTap: function (e) {
      var that = this;
      var index = e.currentTarget.dataset.index; //获取当前点击的是第几颗星星
      var tempuserstars = this.data.userstars; //暂存星星数组
      var len = tempuserstars.length; //获取星星数组的长度
      for (var i = 0; i < len; i++) {
        if (i <= index) {
          //小于等于index的是满心
          tempuserstars[i] = "/asset/img/icon-star.png";
          that.setData({
            wjxscore: i + 1,
          });
        } else {
          //其他是空心
          tempuserstars[i] = "/asset/img/icon-star0.png";
        }
        //重新赋值就可以显示了
        that.setData({
          userstars: tempuserstars,
        });
      }
    },
  },
  pageLifetimes:{
    show: function () {
      const path = '/asset/img/icon-star0.png'
      for(var i = 0;i < 5;i++){
        this.setData({
          userstars:this.data.userstars.concat([path])
        })
      }
    },
  }
});
