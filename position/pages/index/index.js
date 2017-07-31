//index.js
//获取应用实例
var app = getApp()
Page({
  // 初始化数据
  data: {
   text:"Page location"
  },
  // 监听定位到当前位置
  btnPosi:function(){
    wx.getLocation({
      // 返回gps坐标
      type:'wgs84',
      success: function(res) {
        console.log(res);
        wx.openLocation({
          latitude:res.latitude, //纬度
          longitude:res.longitude, //经度
          name:'苏州街', //位置名
          address:'苏州街-长远天地大厦b2' //地址的详细说明
        })
      },
    })
  }
 
})
