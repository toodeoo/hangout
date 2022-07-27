Page({
    /**
     * 页面的初始数据
     */
    data: {
        username: "Silhouette",
        tripList:[
            {
                id:1,
                title:"wow！好好吃！",
                destination:"武汉",
                number:8,
                checked:false 
            },
            {
                id:2,
                title:"圆南方群友的梦 ",
                destination:"东北",
                number:8,
                checked:false 
            },
            {
                id:3,
                title:"想去海边！",
                destination:"舟山",
                number:7,
                checked:false 
            }
        ]
    },
    goTrip($event){
        let index = $event.currentTarget.dataset.index
        let newTripList = this.data.tripList
        newTripList.map(it=> it.checked = false)
        newTripList[index].checked = !newTripList[index].checked 
        this.setData({
            tripList:newTripList
        })
        // 跳转到对应的页面
        wx.navigateTo({
          url: '/Pages/travel/plan/main/index/index',
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