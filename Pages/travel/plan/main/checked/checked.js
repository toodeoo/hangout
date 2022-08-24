Page({
    /**
     * 页面的初始数据
     */
    data: {
        inputVal:"",
        src:"",
        imagePath: "",
        dict: {
          "早饭": "breakfast",
          "上午": "morning",
          "午饭": "lunch",
          "下午": "afternoon",
          "晚饭": "dinner"
        }
    },
    previous(){
        // 跳回上一页
        wx.navigateBack({
          delta: 1,
        })
    },
    // 上传图片
    uploadPhoto(){
        let that = this
        wx.chooseMedia({
            count: 1,
            mediaType: ['image','video'],
            sourceType: ['album', 'camera'],
            maxDuration: 30,
            camera: 'back',
            success: (res) => {
                that.setData({
                  imagePath: res.tempFiles[0].tempFilePath
                })
                wx.uploadFile({
                  filePath: res.tempFiles[0].tempFilePath,
                  name: 'file',
                  url: 'https://hangout.wang/hangout/travel/uploadImg',
                  formData:{
                    travelId: wx.getStorageSync('travelId'),
                    token: wx.getStorageSync('token'),
                    time: that.data.dict[wx.getStorageSync('time')],
                    text: this.data.inputVal //文字信息
                  },
                  success: (res)=>{
                    console.log(res)
                  },
                  fail: (res)=>{
                    console.log(res.errMsg)
                  }
                }).onProgressUpdate(
                  (res)=>{
                    console.log(res.progress)
                  }
                );
            }
          })
    },
    getImagePath: function(e) {
      let that = this;
      wx.request({
        url: 'https://hangout.wang/hangout/travel/downloadImg',
        method: 'GET',
        data: {
          token: wx.getStorageSync('token'),
          travelId: wx.getStorageSync('travelId'),
          time: that.data.dict[wx.getStorageSync('time')]
        },
        success: (res) => {
          let path = res.data.travelImg.filePath
          that.setData({
            imagePath: path
          })
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.id = options.id
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
      this.getImagePath()
      console.log(this.data.imagePath)
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