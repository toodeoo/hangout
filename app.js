//app.js
App({
    onLaunch: function () {
      
      wx.login({
        timeout: 1000,
        success(res){
          if(res.code){
            wx.request({
              url: 'https://localhost:8080/postCode',
              data: res.code,
              method: "POST"
            })
          }
        }
      })
      
    },
  

    globalData: {
      userInfo: null
    }
  })