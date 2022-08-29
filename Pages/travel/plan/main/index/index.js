// Pages/travel/plan/main/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
      currentTab : 0,
      list : [{
              iconPath: "/asset/img/icon-main.png",
              selectedIconPath: "/asset/img/icon-main0.png",
              text: "主日程"},{
              iconPath: "/asset/img/icon-wish.png",
              selectedIconPath: "/asset/img/icon-wish0.png",
              text: "愿望清单"
          },{
              iconPath: "/asset/img/icon-member.png",
              selectedIconPath: "/asset/img/icon-member0.png",
              text: "成员"
          }]
  },

  switchTab: function (e) {
      let that = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        });
      }

      if(e.target.dataset.current === 1){
        const m = this.selectComponent(".wish")
        let act = m.data.activity;
        wx.request({
          url: 'https://hangout.wang/hangout/travel/getWish?travelId=' + wx.getStorageSync('travelId'),
          method: 'GET',
          success:(res)=>{
            console.log(res.data)
            if(res.data.eat != undefined){
              for(let i of res.data.eat){
                let j = i.split(" ");
                console.log(j[0])
                let flag = 0;
                for(let k of act["餐饮"]){
                  if(k.value === j[1]){
                    flag = 1;
                    break;

                  }
                  else {
                    continue
                  }
                }
                if(flag == 0 || act["餐饮"].length == 0){
                  act["餐饮"] .push({key: j[0], value: j[1]});
                }
              }
            }
            if(res.data.place != undefined){
              for(let i of res.data.place){
                let j = i.split(" ");
                let flag = 0;
                for(let k of act["景点"]){
                  if(k.value === j[1]){
                    flag = 1;
                    break;

                  }
                  else {
                    continue
                  }
                }
                if(flag == 0 || act["景点"].length == 0){
                  act["景点"] .push({key: j[0], value: j[1]});
                }
              }
            }
            if(res.data.hotel != undefined){
              for(let i of res.data.hotel){
                let j = i.split(" ");
                let flag = 0;
                for(let k of act["住宿"]){
                  if(k.value === j[1]){
                    flag = 1;
                    break;

                  }
                  else {
                    continue
                  }
                }
                if(flag == 0 || act["住宿"].length == 0){
                  act["住宿"] .push({key: j[0], value: j[1]});
                }
              }
            }
            m.setData({
              activity: act
            })
          }
        })
      }
      else if(e.target.dataset.current === 2){
        const m = this.selectComponent("#member")
        let travelId = wx.getStorageSync('travelId')
        wx.request({
          url: 'https://hangout.wang/hangout/member/list?travelId='+travelId,
          method: "GET",
          success: (res)=>{
            let leader;
            let member = []
            for(let i of res.data.member){
              if(i.isLeader == 1){
                leader = i
              }
              else {
                member.push(i)
              }
            }
            m.setData({
              leader: leader,
              member: member
            })
          }
        })
      }
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