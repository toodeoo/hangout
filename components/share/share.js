// components/share/share.js
//TODO: 上传到社区函数未实现，生成的图片需要从服务器端传来
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
      list:[{
        path:"/asset/img/icon-download.png",
        text:"下载图片" 
    },{
        path:"/asset/img/subicon-share.png",
        text:"分享"
    },{
        path:"/asset/img/subicon-up.png",
        text:"上传到社区"
    }],
    picPath: ""
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
        
        genPic:function () {
          var query = this.createSelectorQuery()
          query.select('#pic').context(function(res) {
            this.editorCtx = res.context,
            this.editorCtx.insertImage({
              src: picPath//后端传数据进来，保存为data中的变量picPath
            })
          })
        },

        switchFun:function(e) {
          console.log(e)
          if(e.currentTarget.id==0){
            this.download()
          }else if(e.currentTarget.id==1){
            this.share()
          }else{
            this.upload()
          }
        },

        download:function() {
          wx.downloadFile({
            url: this.data.picPath,
          })
        },

        share:function(){
          wx.showShareImageMenu({
            path: this.data.picPath,
          })
        },
        upload:function () {
          wx.uploadFile({
            filePath: this.data.picPath,
            name: 'name',//key值
            url: 'url',//服务器地址
          })
        }
    }
})
