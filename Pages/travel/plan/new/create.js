// Pages/travel/plan/new/create.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      region:[]    //定义一个空数组用来存放选择地具体是哪一个省市区
    },

    getUserProvince:function(e)
    {
       this.setData({
           region:e.detail.value     //将用户选择的省市区赋值给region
       })
    },

    onRet:function(){
      wx.redirectTo({
        url: '/Pages/menu/menu',
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