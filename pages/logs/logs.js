//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    tfboys:[
      {id:0,name:'小王'},
      { id: 0, name: '小红' },
      {id: 0, name: '小明' }
    ]

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
  
})
