// components/message/message.js
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
        list : [{
            text:"饮食",
            iconPath:"/asset/img/icon-eat.png",
        },{
            text:"娱乐",
            iconPath:"/asset/img/icon-play.png"
        },{
            text:"交通",
            iconPath:"/asset/img/icon-info.png"
        },{
            text:"天气",
            iconPath:"/asset/img/icon-weather.png"
        },{
            text:"防疫政策",
            iconPath:"/asset/img/icon-virus.png"
        }]

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

        switchPage : function(e){
            switch (e.currentTarget.id) {
                case '0':
                    wx.redirectTo({
                      url: '/Pages/travel/preparation/message/eat/eat',
                    })
                    break;
                case '1':
                    wx.redirectTo({
                        url: '/Pages/travel/preparation/message/play/play',
                      })
                    break
                case '2':
                    wx.redirectTo({
                        url: '/Pages/travel/preparation/message/travel/travel',
                      })
                    break
                case '3':
                    wx.redirectTo({
                        url: '/Pages/travel/preparation/message/weather/weather',
                      })
                    break
                case '4':
                    wx.redirectTo({
                        url: '/Pages/travel/preparation/message/epidemic/epidemic',
                      })
                    break
                default:
                    break;
            }
        }
    }
})
