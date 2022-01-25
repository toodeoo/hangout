// components/bill/bill.js
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
        flag1: 0,
        flag2: 0,
        icon: ["/asset/img/icon-display1.png",
            "/asset/img/icon-display2.png"
        ],
        list: ["日期", "时间", "价格"],
        display1 : 'none',
        display2: 'none',
        pubBillNum: [1],
        priBillNum : [1]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        hit: function () {
            this.setData({
                display1: this.data.flag1 == 1 ? 'none' : 'block',
                flag1: this.data.flag1 == 0 ? 1 : 0
            })
        },

        hit2: function () {
            this.setData({
                display2: this.data.flag2 == 1 ? 'none' : 'block',
                flag2: this.data.flag2 == 0 ? 1 : 0
            })
        },

        addPub: function(){
            const length = this.data.pubBillNum.length
            this.setData({
                pubBillNum:this.data.pubBillNum.concat([length+1])
            })
        },

        addPrivate: function(){
            const length = this.data.priBillNum.length
            this.setData({
                priBillNum:this.data.priBillNum.concat([length+1])
            })
        },

        onRet: function () {
            wx.reLaunch({
              url: "/Pages/travel/home/home",
            });
          },
    }
})