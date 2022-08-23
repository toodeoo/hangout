// Pages/HGBot/Vote/Vote.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userName: "   ",
      //app.globalData.userInfo.nickName,
      array:[1,2],
      vote: []
  },

  onOK: function(){
    wx.request({
      data: {
        token: wx.getStorageSync('token'),
        vote: this.data.vote
      },
      url: 'https://hangout.wang/hangout/vote/createVote',
      method: "POST",
      success: (res) => {
        console.log(res)
        // this.setData({
        //     code: res.data.code,
        //     whisper: res.data.whisper
        // })
      }
    })
    wx.redirectTo({
      url: '/Pages/HGBot/Home/Home',
    })
    //sumbit到后台保存
  },

  onAdd: function(){
      const length = this.data.array.length
      this.data.array = this.data.array.concat([length + 1])
      this.setData({
          array:this.data.array
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

  // 设置输入框的值到vote里
  getInput(e){
    console.log(e.detail)
    this.data.vote[e.target.dataset.index] = e.detail.value
    this.setData({
        vote: this.data.vote
    })
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