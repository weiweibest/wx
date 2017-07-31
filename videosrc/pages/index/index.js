//index.js
//获取应用实例
var app = getApp()
Page({
  // 生命周期函数,页面初次渲染完成时调用
  onReady:function(res){
    // 获取video的上下文
    this.videoContext = wx.createVideoContext("myVideo");
  },
  // 输入框的内容默认为空
  inputValue:'',
  // 初始化数据
  data:{
    src:'',
    // 弹幕列表，默认的弹幕内容
    danmuList:[
      {
        // 文本内容
        text:'jay演唱会',
        // 字体颜色
        color:'#0f0',
        // 在第几秒显示
        time:1
      },
      {
        // 文本内容
        text: '人山人海',
        // 字体颜色
        color: 'green',
        // 在第几秒显示
        time: 3
      }
    ]
  },
  // 当输入框失去焦点
  inputBlur:function(e){
    // 赋值
    this.inputValue = e.detail.value;
    // 在控制台打印输入框的内容
    console.log(this.inputValue);
  },
  // 发送弹幕到视频上,点击发送弹幕按钮
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color:'blue'
    })
  }




})
