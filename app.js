//app.js
App({
  data: {
    username: "未知",
    avatar:
      "https://github.com/topdeoo/topdeoo.github.io/blob/main/img/avatar.png",
    code: 0,
  },

  onLaunch: function (e) {
    let shareTicket_ = e.shareTicket;
    wx.authorize({
      scope: "scope.userInfo",
      success: () => {
        wx.getUserProfile({
          desc: "用户登录",
          success: (res) => {
            this.username = res.userInfo.nickName;
            this.avatar = res.userInfo.avatarUrl;
            this.globalData.userInfo = res.userInfo;
          },
          fail: (res) => {
            console.log("11111");
          },
        });
      },
    });
    console.log(this.data.username);

    wx.checkSession({
      success: (res) => {},
      fail: () => {
        wx.login({
          timeout: 3000,
          success: (res) => {
            this.data.code = res.code;
            console.log(this.data.code);
            wx.request({
              url: "https://hangout.wang/hangout/user/login",
              method: "POST",
              data: {
                username: this.data.username,
                avatar: this.data.avatar,
                code: this.data.code,
                phoneCode: "",
              },
              dataType: "json",
              success: (res) => {
                console.log(res.data);
                wx.setStorageSync("token", res.data.token);
                this.globalData.token = res.token;
              },
              fail: (res) => {
                console.log(res.errMsg);
              },
            });
          },
          fail: (res) => {
            console.log("0000");
          },
        });
      },
    });

    wx.authPrivateMessage({
      shareTicket: shareTicket_,
      success: (res) => {
        wx.request({
          url: "https://hangout.wang/hangout/travel/share",
          method: "POST",
          data: {
            encryptedData: res.encryptedData,
            iv: res.iv,
            token: wx.getStorageSync("token"),
          },
          success: (res) => {
            console.log(res.data);
            wx.setStorageSync("travelId", res.data.travelId);
          },
        });
      },
    });
  },

  globalData: {
    userInfo: null,
    token: null,
  },
});
