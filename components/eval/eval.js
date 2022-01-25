// components/eval/eval.js
var pageData = {}
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i);
}
Page(pageData)

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
        id:"洗后提",
        num0:12,
        num1:10,
        num2:8,
        wjxScore: 5,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //星星点击事件
    starTap : function (e){
        var that = this;
        var index = e.currentTarget.dataset.index;//获取当前点击的是第几颗星星
        var tempUserstars = this.data.userstars; //暂存星星数组
        var len = tempuserstars.length; //获取星星数组的长度
        for (var i = 0; i < len; i++) {
            if (i <= index) { //小于等于index的是满心
                tempUserstars[i] = "../img / sx.png" ;
                that.setData ( {
                wjxscore: i + 1,})
            } 
            else { //其他是空心
                tempuserstars[i]= "../img/ kx.png"
            }
    //重新赋值就可以显示了
        that.setData ( {
        userstars : tempuserstars})
        }}
}
})
