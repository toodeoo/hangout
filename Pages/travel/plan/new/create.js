// Pages/travel/plan/new/create.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        go: ["请选择","黑龙江","吉林","辽宁","河北","河南","湖北","湖南","广东","广西","山东","山西","陕西","内蒙","宁夏","甘肃","青海","新疆","西藏","四川","云南","海南","安徽","江苏","浙江","福建","台湾","北京","天津","上海","重庆","香港","澳门","其他"],
        go_index: 0,
        arrive: ["请选择","上海","杭州","南京","苏州","其他"],
        arrive_index: 0
    },

    onRet:function(){
      wx.redirectTo({
        url: '/Pages/travel/home/home',
      })
  },

    goSelect:function(e){
        this.setData({
            go_index: e.detail.value
          })
    },

    arriveSelect:function(e){
        this.setData({
            arrive_index: e.detail.value
          })
    },

    ret:function(){
        wx.redirectTo({
          url: '/Pages/travel/plan/new/new',
        })
    },

    OK:function(){
        wx.redirectTo({
          url: '/Pages/travel/plan/new/share',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})