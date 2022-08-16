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
      id1:["洗后提"],
      labordiv:["吃"],
      labordiv2:["付钱"]
  },

    /**
     * 组件的方法列表
     */
    methods: {
        goto:function(){
            wx.navigateTo({
              url: '/Pages/travel/plan/main/member/leader',
            })
        },
        goto2:function(){
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
    }
})
