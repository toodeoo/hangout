// Pages/wish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    list: [
      {
        iconPath: "/asset/img/icon-half.png",
        selectedIconPath: "/asset/img/icon-half0.png",
      },
      {
        iconPath: "/asset/img/icon-whole.png",
        selectedIconPath: "/asset/img/icon-whole0.png",
      },
      {
        iconPath: "/asset/img/icon-eat1.png",
        selectedIconPath: "/asset/img/icon-eat0.png",
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
    if(e.target.dataset.current == 0){
      const half = this.selectComponent('#half')
      wx.request({
        url: 'https://hangout.wang/hangout/wish/getWish?class=half&token=osDXq5IFPw3eERUD8LejfgAF0108&travelId=1',
        method: 'GET',
        success:(res)=>{
          console.log(res.data.wishList)
          half.setData({
            wishList: res.data.wishList
          })
        }
      })
    }
    else if(e.target.dataset.current == 1){
      const whole = this.selectComponent('#whole')
      wx.request({
        url: 'https://hangout.wang/hangout/wish/getWish?class=whole&token=osDXq5IFPw3eERUD8LejfgAF0108&travelId=1',
        method: 'GET',
        success:(res)=>{
          console.log(res.data.wishList)
          whole.setData({
            wishList: res.data.wishList
          })
        }
      })
    }
    else {
      const eat = this.selectComponent("#eat")
      wx.request({
        url: 'https://hangout.wang/hangout/wish/getWish?class=eat&token=osDXq5IFPw3eERUD8LejfgAF0108&travelId=1',
        method: 'GET',
        success:(res)=>{
          console.log(res.data.wishList)
          eat.setData({
            wishList: res.data.wishList
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const half = this.selectComponent('#half')
      wx.request({
        url: 'https://hangout.wang/hangout/wish/getWish?class=half&token=osDXq5IFPw3eERUD8LejfgAF0108&travelId=1',
        method: 'GET',
        success:(res)=>{
          console.log(res.data.wishList)
          half.setData({
            wishList: res.data.wishList
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})