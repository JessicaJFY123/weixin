// pages/call/link.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    message: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      user: options
    })
  wx.setNavigationBarTitle({
    title: options.info,
  })
    
  },


  bindKeyInput: function (e) {
    console.log(e);
    console.log(e.detail.value);
    this.setData({
      //将获取到的name值放入数据中
      message: e.detail.value
    })
  },


  send: function () {
  //  console.log(e)
   //console.log(this.data.message)
   // var news={message:this.}
  

    // var news = { message: this.data.message}
    // var message = this.data.message;
    // message.push(news);
    this.setData({
      message: this.data.message
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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