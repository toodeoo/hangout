// components/main/main.js
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
        tripDetail: [
            [{
                    id: 1,
                    title: "早饭",
                    desc: "不吃了，点外卖"
                },
                {
                    id: 2,
                    title: "上午",
                    desc: "睡大觉",
                    nextDesc: "睡大觉"
                },
                {
                    id: 3,
                    title: "午饭",
                    desc: "随缘吃"
                },
                {
                    id: 4,
                    title: "下午",
                    desc: "烤花菜"
                },
                {
                    id: 5,
                    title: "晚饭",
                    desc: "群友下厨"
                }
            ]
        ],
        // 默认显示数值
        randomNum: 0,
        date: "07-21",
        displayDate: "07月21日",
        tripTitle: "圆南方群友的梦"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindDateChange(e) {
            console.log('picker发送选择改变，携带值为', e)
            let value = e.detail.value
            wx.showLoading({
                title: '加载中...',
                mask: true
            })
            setTimeout(() => {
                this.setData({
                    displayDate: value.split("-")[1] + "月" + value.split("-")[2] + "日",
                    date: value,
                    randomNum: this.data.randomNum ? (this.data.randomNum == 1 ? 2 : 0) : 1
                })
                // 更新界面
                wx.hideLoading()
            }, 500)
        },
        goCheck($event) {
            let opt = $event.currentTarget.dataset.opt
            console.log(opt, 'ashdjhasjdhjashsdja')
            wx.navigateTo({
                url: '/Pages/travel/plan/main/checked/checked',
            })
        },
        ret:function(){
            wx.redirectTo({
              url: '/Pages/travel/plan/main/menu',
            })
        },

        onRet:function(){
            wx.redirectTo({
              url: '/Pages/menu/menu',
            })
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
    
        },
    
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
    
        },
    
        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {
            if (typeof this.getTabBar === 'function' && this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 0
                })
            }
        },
    }
})
