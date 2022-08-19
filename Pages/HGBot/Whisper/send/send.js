// Pages/HGBot/Whisper/send/send.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      username: ['未选择'],
      user_id: 0,
    },
  
    send:function(){
        wx.request({
          url: 'https://hangout.wang/hangout/whisper/write',
          method: 'POST',
          data: {
              text: wx.getStorage({
                key: 'text',
                success(res){
                  console.log("调用2后结果为"+res.data)
                }
              }),
              person: wx.getStorage({
                key: 'person',
                success(res){
                  console.log("调用2后结果为"+res.data)
                }
              })
          },
          dataType: 'json',
          success: (res)=>{
            console.log(res.data)
          },
          fail: (res)=>{
            console.log("error")
          }
        })
  
          wx.redirectTo({
            url: '/Pages/HGBot/Home/Home',
          })
    },

    userSelect:function(e){
        this.setData({
            user_id: e.detail.value
          })
        wx.setStorage({
            key:'person',
            data:this.data.username[this.data.user_id],
          })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.request({
        url: 'https://hangout.wang/hangout/whisper/allUser?token=' + wx.getStorageSync('token'),
        method: 'GET',
        success:(res)=>{
          console.log(res.data)
          let code = res.data.code
          if(code == 1){
            let new_username = this.data.username.concat(res.data.username)
            this.setData({
              username: new_username
            })
          }
          else{
            wx.showModal({
              content: '请刷新页面！',
              success (res) {
              }
            })
          }
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