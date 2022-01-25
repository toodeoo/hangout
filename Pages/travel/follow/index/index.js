// Pages/travel/follow/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    list: [
      {
        iconPath: "/asset/img/icon-report.png",
        selectedIconPath: "/asset/img/icon-report0.png",
        text: "行动报备",
      },
      {
        iconPath: "/asset/img/icon-bill.png",
        selectedIconPath: "/asset/img/icon-bill0.png",
        text: "记账单",
      },
      {
        iconPath: "/asset/img/icon-checked.png",
        selectedIconPath: "/asset/img/icon-checked0.png",
        text: "计划打卡",
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
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
