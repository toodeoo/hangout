// Pages/menu/menu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    onLogIn:function(){
      wx.navigateTo({
        url: '/Pages/travel/plan/new/create',
      })
    },

    onTrval:function(){
      wx.navigateTo({
        url: '/Pages/travel/plan/main/menu',
      })
    },

    onCommunity:function(){
      wx.navigateTo({
        url: '/Pages/menu/pre',
      })
    },

    onHGBot:function(){
      wx.navigateTo({
        url: '/Pages/HGBot/Home/Home',
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.request({
        url: 'https://hangout.wang/hangout/user/msg',
        method: 'GET',
        data:{
          token: wx.getStorageSync('token')
        },
        success: (res)=>{
          wx.setStorageSync('username', res.data.username)
        }
      })
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