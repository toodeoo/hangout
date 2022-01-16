// Pages/HGBot/Rd/Rd.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"洗后提",
        a:0,
        b:0,
        rd:0,
        display:'none'
    },

    onOK: function(){

    },

    onChange: function(){
        if(this.data.cnt.size != this.data.b - this.data.a + 1){
            this.getRd()
        }
        else {
            console.log("范围太小")
        }
    },

    getStart:function(e){
        this.data.cnt.clear()
        this.setData({
            a:e.detail.value
        })
    },

    getEnd:function(e){
        this.data.cnt.clear()
        this.setData({
            b:e.detail.value
        })
    },

    getRd:function(){
        const min = parseInt(this.data.a), max = parseInt(this.data.b)
        var t = function(min, max){
            return Number(Math.floor(Math.random()*(max - min + 1)))
        }
        var r = parseInt(t(min,max)) + parseInt(min)
        while(this.data.cnt.has(r)){
            r = parseInt(t(min,max))+parseInt(min)
        }
        this.setData({
            rd: r,
            display: 'block'
        })
        this.data.cnt.add(r)
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
        this.setData({
            cnt:new Set()
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})