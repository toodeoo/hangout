// Pages/travel/plan/main/member/leader.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: String,
    isLeader: 0,
    info:[

    ]
},

getChange_sex:function(e){
  wx.setStorageSync('sex', e.detail.value)
},

getChange_age:function(e){
  wx.setStorageSync('age', e.detail.value)
},

getChange_phone:function(e){
  wx.setStorageSync('phone', e.detail.value)
},

getChange_sosphone:function(e){
wx.setStorageSync('sosphone', e.detail.value)
},

getChange_work:function(e){
  wx.setStorageSync('work', e.detail.value)
},

  ret:function(){
    wx.navigateBack({
      delta: 1,
    })
  },

  onRet:function(){
    wx.redirectTo({
      url: '/Pages/menu/menu',
    })
},

  modify:function(){
      wx.request({
        url: 'https://hangout.wang/hangout/user/modifyMsg',
        method: 'POST',
        data: {
          username: this.data.username,
          sex: wx.getStorageSync('sex'),
          age: wx.getStorageSync('age'),
          phone: wx.getStorageSync('phone'),
          sosphone: wx.getStorageSync('sosphone'),
          work: wx.getStorageSync('work'),
          travelId: wx.getStorageSync('travelId'),
          token: wx.getStorageSync('token')
      },
      success: (res)=>{
        console.log(res.data)
      }
      })
      wx.navigateBack({
        delta: 1,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let travelId = wx.getStorageSync('travelId')
    wx.request({
      url: 'https://hangout.wang/hangout/member/details',
      method: "GET",
      data:{
        travelId: travelId,
        username: wx.getStorageSync('tempusername')
      },
      success: (res)=>{
        console.log(res.data)
        let isLeader = res.data.isLeader;
        this.setData({
          isLeader: isLeader,
          info: res.data,
          username: wx.getStorageSync('tempusername')
        })
        wx.removeStorageSync('tempusername')
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