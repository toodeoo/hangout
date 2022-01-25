// components/note/note.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    pages: [1],
    path: "",
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

    insertImg: function (name, path) {
      let qurey = this.createSelectorQuery();
      qurey
        .select(name)
        .context(function (res) {
          (this.editorCtx = res.context),
            this.editorCtx.insertImage({
              src: path,
              width: "100rpx",
              height: "100rpx",
            });
        })
        .exec();
    },

    insertPic: function () {
      const name = "#editor" + this.data.pages[this.data.pages.length - 1];
      let that = this;
      wx.chooseMedia({
        count: 10,
        camera: "back",
        success(res) {
          that.insertImg(name, res.tempFiles[0].tempFilePath);
        },
      });
    },

    insertPage: function () {
      let that = this;
      const length = that.data.pages.length;
      that.setData({
        pages: that.data.pages.concat([length + 1]),
      });
    },
  },
});
