// Pages/community/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab : 0,
        list : [{
          iconPath: "/asset/img/icon-share1.png",
          selectedIconPath: "/asset/img/icon-share0.png",
          text: "社区",
        },{
          iconPath: "/asset/img/icon-history.png",
          selectedIconPath: "/asset/img/icon-history0.png",
          text: "浏览历史",
        },{
          iconPath: "/asset/img/icon-fav.png",
          selectedIconPath: "/asset/img/icon-fav0.png",
          text: "收藏",
        },{
          iconPath: "/asset/img/icon-id1.png",
          selectedIconPath: "/asset/img/icon-id0.png",
          text: "个人主页",
        }]
    },

    switchTab: function (e) {
        let that = this;
        if (this.data.currentTab === e.target.dataset.current) {
          return false;
        } else {
          that.setData({
            currentTab: e.target.dataset.current,
          });
        }
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