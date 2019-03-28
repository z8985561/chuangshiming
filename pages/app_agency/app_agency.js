// pages/app_agency/app_agency.js
var e = getApp(),
  t = e.requirejs("core"),
  a = e.requirejs("wxParse/wxParse"),
  r = e.requirejs("jquery");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    level:{},
    activeName: ''
  },
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getlevel();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getlevel(){
      var that  = this;
      t.get('member/getlevel',{},function(res){
          console.log(res)
          that.setData({
              level:res.level
          })
      })    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log(this.data)
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