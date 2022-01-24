Component({
    data:{
        selected : null,
        color : '#7B8B6F',
        selectedColor: "#000",
        list : [{
            pagePath : "/Pages/travel/follow/report/report",
            iconPath : "/asset/img/icon-report.png",
            selectedIconPath: "/asset/img/icon-report0.png",
            text: "行动报备"
        },{
            pagePath : "/Pages/travel/follow/bill/bill",
            iconPath : "/asset/img/icon-bill.png",
            selectedIconPath: "/asset/img/icon-bill0.png",
            text: "记账单"
        },{
            pagePath : "/Pages/travel/follow/checked/checked",
            iconPath : "/asset/img/icon-checked.png",
            selectedIconPath: "/asset/img/icon-checked0.png",
            text: "计划打卡"
        }]
    },
    attached(){

    },
    methods:{
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({url})
            // this.setData({
            //   selected: data.index
            // })
          }
    }
})