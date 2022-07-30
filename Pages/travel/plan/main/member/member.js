
Page({

    /**
     * 页面的初始数据
     */
    data: {
      id:["洗后提"],
      info:[
        {key:"性别",value:"黄油小狗"},
        {key:"年龄",value:"3岁"},
        {key:"联系电话",value:"12345678910"},
        {key:"紧急联系人",value:"12345678910"},
        {key:"分工",value:"吃"}
      ]
  },

    ret:function(){
        wx.navigateBack({
          delta: 1,
        })
    },

    modify:function(){
        wx.navigateTo({
          url: '/Pages/id/id',
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