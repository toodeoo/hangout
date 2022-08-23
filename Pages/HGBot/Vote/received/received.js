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
      const list = e.detail.value;
      this.setData({
        vote: list
      })
      console.log(this.data.vote)
    },

    onOK:function(){
      let data = [];
      const vote = this.data.vote;
      const arr = this.data.array;
      for(let i = 0, j = 0; i < arr.length; i++){
        if(arr[i].name === vote[j]){
          data.push(vote[j] + "+1");
          j++;
        }
        else {
          data.push(arr[i].name + "+0");
        }
      }
      console.log(data)
      wx.request({
        url: 'https://hangout.wang/hangout/vote/vote',
        method: 'POST',
        data:{
          token: wx.getStorageSync('token'),
          vote: data,
        },
        success:(res)=>{
          console.log(this.data.code)
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
          console.log(res.data.vote)
          // this.setData({
          //   array: res.data.vote,
          // })
          let arr = [], vote = res.data.vote;
          for(let i = 0; i < vote.length; i++){
            arr.push({"name": vote[i].split("+")[0], "checked": false})
          }
          console.log(arr);
          this.setData({
            array: arr
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