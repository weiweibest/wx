//index.js
// 处理当前页面的逻辑
//获取应用实例
var app = getApp()
Page({
  // 处理按钮的点击事件
  btnTap:function(){
    // var 声明一个变量 that 变量名
    var that = this;
    // 调用微信接口，获取视频的临时文件路径
    wx.chooseVideo({
      // 资源类型 参数一：相册中选视频。参数二:相机录制视频
      sourceType: ['camera','album'],
      //录制视频的最长时间
      maxDuration:60,
      // 默认调用的是后置摄像头
      camera:['front','back'],
      //调用成功，返回视频的临时文件路径，res：视频的临时路径
      success:function(res){
        // 在控制台打印输出
        console.log(res);
        that.setData({
          // 冒号右侧 赋值 给冒号左侧
            src:res.tempFilePath
        })
      }
    })
  }
})
