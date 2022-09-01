let app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        username: "",
        tripList:[
            // {
            //     id:1,
            //     title:"wow！好好吃！",
            //     destination:"武汉",
            //     number:8,
            //     checked:false 
            // },
            // {
            //     id:2,
            //     title:"圆南方群友的梦 ",
            //     destination:"东北",
            //     number:8,
            //     checked:false 
            // },
            // {
            //     id:3,
            //     title:"想去海边！",
            //     destination:"舟山",
            //     number:7,
            //     checked:false 
            // }
        ]
    },
    goTrip($event){
        // let index = $event.currentTarget.dataset.index
        let id = $event.currentTarget.dataset.id
        console.log(id)
        // let newTripList = this.data.tripList
        // newTripList.forEach(it=> it.checked = false)
        // newTripList[index].checked = !newTripList[index].checked 
        // this.setData({
        //     tripList:newTripList
        // })

        wx.setStorageSync('travelId', id)
        let len = this.data.tripList.length
        let t = len - id - 1
        if(len == 1){
          t = 0
        }
        console.log(this.data.tripList)
        wx.setStorageSync('theme', this.data.tripList[t].theme)
        
        // 跳转到对应的页面
        wx.navigateTo({
          url: '/Pages/travel/plan/main/index/index?id=' + id,
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
      let token = wx.getStorageSync('token')
      this.setData({
        username: wx.getStorageSync('username')
      })
      wx.request({
        url: 'https://hangout.wang/hangout/travel/list',
        method: 'GET',
        data: { token: token},
        success: (res) => {
          console.log(res.data.travelIntro)
          this.setData({
            tripList: res.data.travelIntro
          })
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