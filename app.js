//app.js
App({
    data:{
      username: null,
      avatar: null,
      code: 0,
    },

    onLaunch: function () {
      wx.authorize({
        scope: 'scope.userInfo',
        success: ()=>{
          wx.getUserProfile({
            desc: '用户登录',
            success: (res)=>{
               this.username = res.userInfo.nickName
               this.avatar = res.userInfo.avatarUrl
               this.globalData.userInfo = res.userInfo
            },
            fail: (res)=>{
              console.log("11111")
            }
          })
        }
      })
      console.log(this.data.username)
      
      wx.checkSession({
        success: (res) => {
        },
        fail:()=>{
          wx.login({
            timeout: 3000,
            success:(res)=>{
              this.code = res.code
              console.log(this.code)
              wx.request({
                url: 'https://hangout.wang/hangout/user/login',
                method: 'POST',
                data: {
                  username: this.data.username,
                  avatar: this.data.avatar,
                  code: this.data.code
                },
                dataType: 'json',
                success:(res)=>{
                  console.log(res.data)
                  wx.setStorageSync('token', res.data.token)
                  this.globalData.token = res.token
                },
                fail:(res)=>{
                  console.log("1111")
                }
              })
            },
            fail: (res)=>{
              console.log("0000")
            }
          })
        }
      })
    },

    globalData: {
      userInfo: null,
      token: null
    }
  })