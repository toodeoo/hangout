// components/list/list.js
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
        flag3: 0, 
        icon: ["/asset/img/icon-display1.png",
            "/asset/img/icon-display2.png"],
        star: ["/asset/img/icon-star.png",
            "/asset/img/redstar.png"],
        st: 0,
        display1 : 'none',
        display2: 'none',
        display3: 'none',
        pubBillNum: [1],
        priBillNum : [1]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onRet: function () {
            wx.reLaunch({
              url: "/Pages/travel/home/home",
            });
          },

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

        hitc: function () {
            this.setData({
                display3: this.data.flag3 == 1 ? 'none' : 'block',
                flag3: this.data.flag3 == 0 ? 1 : 0
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

        emphasize:function(){
            console.log(this.data.st)
            this.setData({
                st: this.data.st == 0 ? 1 : 0
            })
        },
    }
})
