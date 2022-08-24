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
      leader:[],
      member:[]
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
    },
    ready: function(){
      let travelId = wx.getStorageSync('travelId')
      wx.request({
        url: 'https://hangout.wang/hangout/member/list?travelId='+travelId,
        method: "GET",
        success: (res)=>{
          let leader;
          let member = []
          for(let i of res.data.member){
            if(i.isLeader == 1){
              leader = i
            }
            else {
              member.push(i)
            }
          }
          console.log(leader)
          console.log(member)
          this.setData({
            leader: leader,
            member: member
          })
        }
      })
    }
})
