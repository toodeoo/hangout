// Pages/HGBot/Whisper/received/received.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      whisper: null
    },
    
    onNext:function(){
        wx.navigateTo({
          url: '/Pages/HGBot/Whisper/received/total',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
      wx.getStorage({
        key: 'whisper',
        success: (res)=>{
          this.setData({
            whisper: res.data
          })
        },
        fail: ()=>{
          console.log("failed")
        }
      })
      wx.removeStorage({
        key: 'whisper',
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