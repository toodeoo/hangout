// components/wish/wish.js
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
      class:["/","餐饮","景点","住宿"],
      class_index: 0,
        isOpenMap:{
            "餐饮":true,
            "景点":true,
            "住宿":true
        },
        activity:{
            "餐饮":[],
            "景点":[],
            "住宿":[],
        },
        tripTitle: wx.getStorageSync('theme'),
        dict: {
          "餐饮": "eat",
          "景点": "place",
          "住宿": "hotel"
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
      
      classSelect:function(e){
        let flag = this.data.class[e.detail.value]
        console.log(flag)
        let username = wx.getStorageSync('username')
        let act = this.data.activity
        wx.showModal({
          title: "输入你的愿望",
          editable: true,
          success: (res)=>{
            if(res.confirm){
              wx.request({
                url: 'https://hangout.wang/hangout/travel/postWish',
                method: 'POST',
                data:{
                  token: wx.getStorageSync('token'),
                  class: this.data.dict[flag],
                  text: res.content,
                  travelId: wx.getStorageSync('travelId')
                },
                success: (res)=>{
                  console.log(res.data.code)
                }
              })
              act[flag].push({key: username + "： ", value: res.content})
              this.setData({
                activity: act
              })
            }
          }
        })
      },

        onRet:function(){
            wx.redirectTo({
              url: '/Pages/menu/menu',
            })
        },

        modalOpen($event){
            let key = $event.currentTarget.dataset.key;
            let old = this.data.isOpenMap
            old[key] = !old[key]
            this.setData({
                isOpenMap:old
            })
        },
        ret:function(){
            wx.redirectTo({
              url: '/Pages/travel/plan/main/menu',
            })
        },
    }

})
