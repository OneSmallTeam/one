App({
  onLaunch: function () {
    require('./sdk-v1.2.1.js')
    let clientID = '331368a7b398cb441d85'
    wx.BaaS.init(clientID)
    // wx.showTabBarRedDot({
    //   index: 1
    // })
      },
  onShow: function (options) {
    
  },
  onHide: function () {
    
  },
  onError: function (msg) {
    
  }
})
