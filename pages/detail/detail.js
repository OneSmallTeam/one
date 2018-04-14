// pages/detail/detail.js
var util = require('../../utils/util.js')
Page({
  data: {
    date:[],
    articleDetail:{}
  },
  onLoad: function (options) {
    console.log(options)
    var that = this
    wx.request({
      url: 'http://willlu.xin/article/detail/'+options.id, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        console.log(util.formatTime(new Date))
        var date = new Date(Date.parse(res.data.created))
        console.log(date)
        console.log(util.updateTime(new Date,date))
        that.setData({
          articleDetail: res.data,
          date: util.updateTime(new Date,date)
        })
      }
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

  },
  copy: function(e){
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.url,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})