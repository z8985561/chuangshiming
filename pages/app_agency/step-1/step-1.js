// pages/app_agency/step-1/step-1.js
const app = getApp(), core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{
      name:"",
      phone:"",
      address:"",
      pic: ["/static/images/icon-111.png","/static/images/icon-112.png"]
    }
  },
  upPic(e){
    var that = this;
    var {index} = e.currentTarget.dataset;
    var json = this.data.userinfo;

    core.upload(res=>{
      wx.showLoading({
        title: '上传中...',
      })
      if (res.status){
        json.pic[index] = res.url;
        that.setData({
          userinfo: json
        })
        wx.hideLoading()
        wx.showToast({
          title: '上传成功！'
        })
      }else{
        wx.hideLoading()
        wx.showToast({
          title: '上传失败！',
          icon:"none"
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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