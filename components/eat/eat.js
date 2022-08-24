// components/eat/eat.js
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
      example: "示例愿望：KFC!今天星期四!",
      wishList: [],
      postlist: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
      onShow: function(e) {
        let that = this;
        let wish = {wish: this.data.wishList[e.target.id].wish, douzi: 0}
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
      },

      sendWish: function(e){
        console.log(e.detail.value);
      },

      addWish: function(e){
        wx.redirectTo({
          url: '/Pages/travel/plan/main/wish/wish/new',
        })
      },
      endVote: function(e){
          wx.showModal({
            title: '确定结束投票吗',
            success (res){
              if (res.confirm) {
                wx.redirectTo({
                  url: '/Pages/travel/plan/main/wish/wish/result',
                })
              }
            }
          })
        },
    }
})
