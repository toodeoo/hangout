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
      let token = wx.getStorageSync('token');
      let travelId = wx.getStorageSync('travelId');
      let time = that.data.dict[wx.getStorageSync('time')];
      wx.request({
        url: 'https://hangout.wang/hangout/travel/downloadImg',
        method: 'GET',
        data: {
          token: token,
          travelId: travelId,
          time: time
        },
        success: (res) => {
          console.log(res.data.travelImg)
          let path = res.data.travelImg.filePath
          let text = res.data.travelImg.text
          that.setData({
            imagePath: path,
            inputVal: text
          })
        }
      })
    },

    onRet:function(){
      wx.redirectTo({
        url: '/Pages/menu/menu',
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