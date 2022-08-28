// Pages/wish/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    list: [
      {
        iconPath: "/asset/img/icon-half.png",
        selectedIconPath: "/asset/img/icon-half0.png",
      },
      {
        iconPath: "/asset/img/icon-whole.png",
        selectedIconPath: "/asset/img/icon-whole0.png",
      },
      {
        iconPath: "/asset/img/icon-eat1.png",
        selectedIconPath: "/asset/img/icon-eat0.png",
      },
    ],
  },

  switchTab: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      });
    }
    if (e.target.dataset.current === 0) {
      const half = this.selectComponent("#half");
      let travelId = wx.getStorageSync("travelId");
      let token = wx.getStorageSync("token");
      wx.request({
        url: "https://hangout.wang/hangout/wish/getWish?class=half",
        method: "GET",
        data: {
          token: token,
          travelId: travelId,
        },
        success: (res) => {
          console.log(res.data.wishList);
          half.setData({
            wishList: res.data.wishList,
          });
        },
      });
    } else if (e.target.dataset.current === 1) {
      const whole = this.selectComponent("#whole");
      let travelId = wx.getStorageSync("travelId");
      let token = wx.getStorageSync("token");
      wx.request({
        url: "https://hangout.wang/hangout/wish/getWish?class=whole",
        method: "GET",
        data: {
          token: token,
          travelId: travelId,
        },
        success: (res) => {
          console.log(res.data.wishList);
          whole.setData({
            wishList: res.data.wishList,
          });
        },
      });
    } else {
      const eat = this.selectComponent("#eat");
      let travelId = wx.getStorageSync("travelId");
      let token = wx.getStorageSync("token");
      wx.request({
        url: "https://hangout.wang/hangout/wish/getWish?class=eat",
        method: "GET",
        data: {
          token: token,
          travelId: travelId,
        },
        success: (res) => {
          console.log(res.data.wishList);
          eat.setData({
            wishList: res.data.wishList,
          });
        },
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage'],
    })
    const half = this.selectComponent("#half");
    wx.request({
      url: "https://hangout.wang/hangout/wish/getWish?class=half",
      method: "GET",
      data: {
        token: wx.getStorageSync("token"),
        travelId: wx.getStorageSync("travelId"),
      },
      success: (res) => {
        console.log(res.data.wishList);
        half.setData({
          wishList: res.data.wishList,
        });
      },
    });
    console.log("here is getWish")
    wx.setStorageSync("douzi", 200);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    let f = wx.getStorageSync("endVote");
    if (f === 1) {
      const half = this.selectComponent("#half").data.postlist;
      const whole = this.selectComponent("#whole").data.postlist;
      const eat = this.selectComponent("#eat").data.postlist;
      let isLeader = wx.getStorageSync("isLeader");
      let travelId = wx.getStorageSync("travelId");
      let data = {
        token: wx.getStorageSync("token"),
        isLeader: isLeader,
        travelId: travelId,
        item: [
          { class: "half", wishList: [] },
          { class: "whole", wishList: [] },
          { class: "eat", wishList: [] },
        ],
      };
      let temp = new Map();
      for (let i = 0; i < half.length; i++) {
        if (temp.has(half[i].wish)) {
          let j = temp.get(half[i].wish);
          j = j + half[i].douzi;
          temp.set(half[i].wish, j);
        } else {
          temp.set(half[i].wish, half[i].douzi);
        }
      }
      for (let [k, v] of temp) {
        data.item[0].wishList.push({ wish: k, douzi: v });
      }
      temp.clear();
      for (let i = 0; i < whole.length; i++) {
        if (temp.has(whole[i].wish)) {
          let j = temp.get(whole[i].wish);
          j = j + whole[i].douzi;
          temp.set(whole[i].wish, j);
        } else {
          temp.set(whole[i].wish, whole[i].douzi);
        }
      }
      for (let [k, v] of temp) {
        data.item[1].wishList.push({ wish: k, douzi: v });
      }
      temp.clear();
      for (let i = 0; i < eat.length; i++) {
        if (temp.has(eat[i].wish)) {
          let j = temp.get(eat[i].wish);
          j = j + eat[i].douzi;
          temp.set(eat[i].wish, j);
        } else {
          temp.set(eat[i].wish, eat[i].douzi);
        }
      }
      for (let [k, v] of temp) {
        data.item[2].wishList.push({ wish: k, douzi: v });
      }
      console.log(data);
      wx.request({
        url: "https://hangout.wang/hangout/wish/endVote",
        method: "POST",
        data: data,
        success: (res) => {
          if (isLeader == 1) {
            wx.setStorageSync("wishList", res.data.wishList);
            wx.setStorageSync("memberNum", res.data.memberNum);
            wx.redirectTo({
              url: "/Pages/travel/plan/main/wish/wish/result",
            });
          }
        },
      });
    }
    wx.removeStorageSync('endVote')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    const act = wx.getStorageSync('activityId');
    console.log(act)
      return {
          title: '您有一个新的行程邀请！',
          path: '/Pages/travel/plan/main/wish/wish/index?activityId=' + act,
    }
  },
});
