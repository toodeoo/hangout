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
        isOpenMap:{
            "餐饮":true,
            "景点":true,
            "住宿":true
        },
        activity:{
            "餐饮":[
                {key:"Yuky：",value:"东北吃撸串"},
                {key:"Austin：",value:"有一家店味道很不错"},
                {key:"阿夕：",value:"不要辣、不要香菜"}
            ],
            "景点":[],
            "住宿":[
                {key:"洗后提：",value:"隔音好点而就行"}
            ],
        },
        tripTitle: "圆南方群友的梦"
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
