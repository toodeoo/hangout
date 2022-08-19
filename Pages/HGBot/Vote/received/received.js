// Pages/HGBot/Vote/recevied/recevied.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array:[
          // {
          // "name": "Nihao",
          // "checked": false
          // },
          // {
          //   "name": "昨天",
          //   "checked": false
          // }
        ],
        vote:[]
    },

    checkboxChange(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    
        const items = this.data.array
        const values = e.detail.value
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
          items[i].checked = false
    
          for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
            if (items[i].value === values[j]) {
              items[i].checked = true
              this.setData({
                'vote[i]' : array[i].name + '+1'
              })
              break
            }
          }
        }
        console.log(this.data.vote)
    },

    onOK:function(){
      wx.request({
        url: 'https://hangout.wang/hangout/vote/vote',
        method: 'POST',
        data:{
          token: wx.getStorageSync('token'),
          vote: this.data.vote,
        },
        success:(res)=>{
          console.log(res.data.code)
        }
      })
      wx.redirectTo({
        url: '/Pages/HGBot/Home/Home',
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.request({
        url: 'https://hangout.wang/hangout/vote/getVote?token=' + wx.getStorageSync('token'),
        method: 'GET',
        success:(res)=>{
          console.log(res.data)
          this.setData({
            vote: res.data.vote,
            array: res.data.vote,
          })
          for (let i = 0, lenI = this.data.array.length; i < lenI; ++i) {
            this.setData({
              ['array['+ i + ']']: {"name": this.data.array[i].split('+')[0], checked: false}
            })
          }
          console.log(this.data.array)
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