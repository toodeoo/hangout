// components/member/member.js
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
      leader: Object,
      member:[]
  },

    /**
     * 组件的方法列表
     */
    methods: {

        goto:function(e){
          wx.setStorageSync('tempusername', this.data.leader.username)
            wx.navigateTo({
              url: '/Pages/travel/plan/main/member/member',
            })
        },
        goto2:function(e){
          wx.setStorageSync('tempusername', this.data.member[e.currentTarget.dataset.index].username)
            wx.navigateTo({
              url: '/Pages/travel/plan/main/member/member',
            })
        },
        onRet:function(){
            wx.redirectTo({
              url: '/Pages/menu/menu',
            })
        },

        ret:function(){
            wx.redirectTo({
              url: '/Pages/travel/plan/main/menu',
            })
        },
    },
})
