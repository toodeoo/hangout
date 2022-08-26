// Pages/travel/plan/main/wish/wish/result.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        arrive: ["请选择","半日行程","一日行程","干饭地点"],
        arrive_index: 0,
        member_num: 0,
        half: [],
        whole: [],
        eat: []
    },

    onOK: function(){
      wx.removeStorageSync('wishList')
        wx.redirectTo({
            url: '/Pages/travel/plan/main/menu',
          })
    },

    onRet: function(){
        wx.redirectTo({
          url: '/Pages/travel/plan/main/wish/wish/index',
        })
    },

    arriveSelect:function(e){
        this.setData({
            arrive_index: e.detail.value
          })
        if (e.detail.value == 1) {
            this.setData({ reply1: true })
           } else {
            this.setData({ reply1: false })
        }
        if (e.detail.value == 2) {
          this.setData({ reply2: true })
         } else {
          this.setData({ reply2: false })
        }
        if (e.detail.value == 3) {
          this.setData({ reply3: true })
         } else {
          this.setData({ reply3: false })
      }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let wishList = wx.getStorageSync('wishList')
      this.setData({
        half: wishList.half,
        whole: wishList.whole,
        eat: wishList.eat,
        member_num: wx.getStorageSync('memberNum')
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