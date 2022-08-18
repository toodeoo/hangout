var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: "",
        avatar: "",
        encryptedData: "",
        iv: ""
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
      setTimeout(function(){
        wx.redirectTo({
          url: '/Pages/menu/menu',/*此处应重定向至主页，此页面为欢迎页面 */
        })
      },2000
      );
      /* 或许可以做一个动画（等熟练一点再写吧） */
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
