// Pages/travel/plan/new/share.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    onRet:function(){
        wx.redirectTo({
          url: '/Pages/menu/menu',
        })
    },

    ret:function(){
        wx.redirectTo({
          url: '/Pages/travel/plan/new/create',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      // options 中的 scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
      var scene = decodeURIComponent(options.scene)
      //
      var query = options.query.dentistId // 3736
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