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
      origin: 200,
      wishList: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
      onShow: function(e) {
        console.log(e.target.id);
        let origin  = this.data.origin;
        wx.showModal({
          title: '你投入的豆子数是',
          editable: true,
          success (res){
            if(res.confirm){
              let t = res.content;
              let x = origin - parseInt(t);
              wx.showToast({
                title: '剩余豆子数为' + x,
                icon: 'none'
              });
              r = x;
            }
          }
        });
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
                wx.request({
                  url: 'url',
                })
                wx.redirectTo({
                  url: '/Pages/travel/plan/main/wish/wish/result',
                })
              }
            }
          })
        },
    }
})
