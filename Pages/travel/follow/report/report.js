Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  methods:{
    onRet:function(){
      wx.redirectTo({
        url: '/Pages/travel/home/home',
      })
    }
  }
})