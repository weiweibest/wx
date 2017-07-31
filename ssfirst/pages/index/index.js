//index.js
//获取应用实例
var app = getApp()
Page({
  // 初始化数据
  data: {
    // 冒号右侧 赋值给 冒号左侧
    motto: 'Hello World 郭威',
    userInfo: {}
  },
  //事件处理函数，实现页面跳转
  bindViewTap: function() {

    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 页面加载出来
  onLoad: function () {
    // 用作调试代码
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      // 打印用户信息
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
