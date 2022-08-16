
// Pages/homepage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: "",
        avatar: "",
        encryptedData: "",
        iv: ""
  },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.authorize({
        scope: 'scope.userInfo',
        success: ()=>{
          wx.getUserProfile({
            desc: '用户登录',
            success: (res)=>{
              this.setData({
               username: res.userInfo.nickName,
               avatar: res.userInfo.avatarUrl,
               encryptedData: res.encryptedData,
               iv: res.iv
              })
            },
            fail: (res)=>{
              console.log("11111")
            }
          })
        }
      })
      console.log(this.data.username)
      let data = {
        username: "",
        avatar: "",
        code: 0,
        encryptedData: "",
        iv: ""
      }
      data.username = this.data.username
      data.iv = this.data.iv
      data.encryptedData = this.data.encryptedData
      data.avatar = this.data.avatar
      wx.login({
        timeout: 3000,
        success:(res)=>{
          data.code = res.code
          wx.request({
            url: 'https://hangout.wang/hangout/user/login',
            method: 'POST',
            data: data,
            dataType: 'json',
            success:(res)=>{
              console.log(res.data)
              wx.setStorageSync('token', res.data.token)
            },
            fail:(res)=>{
              console.log("1111")
            }
          })
        },
        fail: (res)=>{
          console.log("0000")
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
      setTimeout(function(){
        wx.redirectTo({
          url: '/Pages/menu/menu',/*此处应重定向至主页，此页面为欢迎页面 */
        })
      },2000
      );
      /* 或许可以做一个动画（等熟练一点再写吧） */
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
