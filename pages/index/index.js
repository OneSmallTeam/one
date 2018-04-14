Page({
  data: {
    tapId:"",
    articles:[],
    currentPage:1,
    loading:""
  },

  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://willlu.xin/article/getPageList?page='+that.data.currentPage,
      data:{},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          articles: res.data.list
        })
      }
    })
  },
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
    this.setData({
      currentPage: 1
    })
    this.onLoad()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    that.setData({
      loading: "../../images/loading.gif",
      currentPage: that.data.currentPage+1
    })
    wx.request({
      url: 'http://willlu.xin/article/getPageList?page=' + that.data.currentPage,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var list = that.data.articles.concat(res.data.list)
        that.setData({
          articles: list
        })
        
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  toDetail: function(e){
    this.setData({
      width: "80%"
    })
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.dataset.id
    })
  }
})