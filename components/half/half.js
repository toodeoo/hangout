// components/half/half.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
      example: "  示例愿望：在家打麻将!!!",
      postlist: [],
      wishList:[
        // {
        //   wish: "去看海！",
        //   avatar: ['/asset/img/wechat.png', '/asset/img/icon-star.png']
        // },
        // {
        //   wish: "滑雪滑雪",
        //   avatar: ['/asset/img/icon-vote.png']
        // },
        // {
        //   wish: "play games",
        //   avatar: ['/asset/img/icon-weather.png', '/asset/img/link.png', '/asset/img/team.png']
        // },
        // {
        //   wish: "泡汤",
        //   avatar: ['/asset/img/share.png']
        // },
        // {
        //   wish: "treat or trick",
        //   avatar: ['/asset/img/subicon-up.png', '/asset/img/video.png']
        // }
    ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
      onShow: function(e) {
        let that = this;
        let wish = {wish: that.data.wishList[e.target.id].wish, douzi: 0}
        let origin  = wx.getStorageSync('douzi');
        wx.showModal({
          title: '你投入的豆子数是',
          placeholderText: '剩余的豆子数为' + origin,
          editable: true,
          success (res){
            if(res.confirm){
              let t = res.content;
              let x = origin - parseInt(t);
              wish.douzi = parseInt(t);
              let temp = that.data.postlist;
              temp.push(wish)
              that.setData({
                postlist: temp
              })
              wx.setStorageSync('douzi', x)
              wx.showToast({
                title: '剩余豆子数为' + x,
                icon: 'none'
              })
  
            }
          }
        })
        console.log(that.data.postlist)
      },

      sendWish: function(e){
        console.log(e.detail.value);
      },

      addWish: function(){
          wx.redirectTo({
            url: '/Pages/travel/plan/main/wish/wish/new',
          })
      },

      /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: '您有一个新的行程邀请！'
          })
        }, 2000)
      })
      return {
        title: '您有一个新的行程邀请！',
        path: '/Pages/travel/plan/main/wish/wish/index',
        promise 
      }
    }

    }
})
