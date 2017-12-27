// pages/微信/index.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     array:[
//       {
//         image:"../../public/icons/weixin-a.png",
//         info:"这是一张圣诞美图"
//       },
//       {
//         image: "../../public/icons/call-a.png",
//         info: "这是一张圣诞美图"
//       },
//       {
//         image: "../../public/icons/find-a.png",
//         info: "这是一张圣诞美图"
//       },
//        {
//         image: "../../public/icons/me-a.png",
//         info: "这是一张圣诞美图"
//       },
//        {
//          image: "../../public/icons/weixin-a.png",
//          info: "这是一张圣诞美图"
//        },
//        {
//          image: "../../public/icons/call-a.png",
//          info: "这是一张圣诞美图"
//        },
//        {
//          image: "../../public/icons/me-a.png",
//          info: "这是一张圣诞美图"
//        },
//        {
//          image: "../../public/icons/weixin-a.png",
//          info: "这是一张圣诞美图"
//        }
//     ]

//   },
//   turn:function(){
//     console.log('turn...ss')
//      wx.navigateTo({
//        url: '../call/logs',
//      })
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })


Page({
  data: {
    inputShowed: false,
    inputVal: "",
    // time:(new Date()).toLocaleTimeString(),
    array: [
      {
        image: "../../public/icons/weixin-a.png",
        info: "李梦琪",
       // time: (new Date()).toLocaleTimeString(),
       msg:"干嘛呢",
       time:(new Date()).toLocaleTimeString()
      },
      {
        image: "../../public/icons/call-a.png",
        info: "张警方",
        msg: "何时",
        time: (new Date()).toLocaleTimeString()

      },
      {
        image: "../../public/icons/find-a.png",
        info: "王淑兰",
        msg: "何地",
        time: (new Date()).toLocaleTimeString()
      },
      {
        image: "../../public/icons/me-a.png",
        info: "陈晓琳",
        msg: "开心吗",
        time: (new Date()).toLocaleTimeString()
      }
    ]
  },

  onLoad: function (options) {
    //  var time=new Date();
    //  var now=time.toLocaleTimeString();
    //  this.setData({
    //    times=now
    //  })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});