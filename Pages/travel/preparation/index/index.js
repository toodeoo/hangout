// Pages/travel/preparation/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0,
        list: [
          {
            iconPath: "/asset/img/icon-list.png",
            selectedIconPath: "/asset/img/icon-list0.png",
            text: "物品清单",
          },
          {
            iconPath: "/asset/img/icon-bill.png",
            selectedIconPath: "/asset/img/icon-bill0.png",
            text: "备忘录",
          },
          {
            iconPath: "/asset/img/icon-info.png",
            selectedIconPath: "/asset/img/icon-info0.png",
            text: "当地信息",
          },
        ],
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