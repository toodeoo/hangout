// Pages/HGBot/Whisper/received/total.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      whisper: [
        // {
        //   time: '2022-08-18 17:19:05',
        //   text: '这是一句悄悄话1'
        // },
        // {
        //   time: '2022-08-18 17:29:05',
        //   text: '这是一句悄悄话1'
        // },
    ],
      code: 0
  },

    ret:function(){
        wx.reLaunch({
          url: '/Pages/HGBot/Home/Home',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.request({
        url: 'https://hangout.wang/hangout/whisper/historyMsg?username='+app.globalData.userInfo.nickName,
        method: "GET",
        success: (res)=>{
          console.log(res.data)
          this.setData({
            code: res.data.code,
            whisper: res.data.whisper
          })
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