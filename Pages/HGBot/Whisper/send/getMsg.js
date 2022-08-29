
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      code: 0,
      username: null,
      src: ['/asset/img/hangou1.png', '/asset/img/hangout3.png']
    },

    getText:function(options){
      wx.removeStorage({
        key: 'text',
      })
        wx.setStorage({
          key:'text',
          data:options.detail.value,
        })
      },

    ret:function(){
      wx.reLaunch({
        url: '/Pages/HGBot/Home/Home',
      })
  },

    navToNext:function(){
        wx.navigateTo({
          url: '/Pages/HGBot/Whisper/send/send',
        })
    },

    onNext:function(){
        wx.navigateTo({
          url: '/Pages/HGBot/Whisper/received/total',
        })
    },

    click:function(){
      if(this.data.code == 1){
        wx.navigateTo({
          url: '/Pages/HGBot/Whisper/received/received',
        })
      }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.request({
        url: 'https://hangout.wang/hangout/whisper/newMsg?username=' + wx.getStorageSync('username'),
        method: "GET",
        success: (res)=>{
          console.log(res.data)
          this.setData({
            code: res.data.code
          })
          if(res.data.code == 1){
            let whisper = res.data.whisper
            console.log(whisper)
            wx.setStorageSync('whisper', whisper)
          }
        },
        fail: (res)=>{
          console.log("11111")
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