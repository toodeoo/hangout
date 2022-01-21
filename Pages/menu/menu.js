// Pages/menu/menu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * button 点击事件
     * 顺序为：我的账号->我的行程->社区分享->憨狗bot
     * 此跳转可返回
     * 返回的按键自定义问题未解决
     */
    onLogIn:function(){
      wx.navigateTo({
        url: '',
      })
    },

    onTrval:function(){
      wx.navigateTo({
        url: '/Pages/preparation/home/home',
      })
    },

    onCommunity:function(){
      wx.navigateTo({
        url: '',
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