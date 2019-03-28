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
      console.log(res)
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
  onChange(e){
      var userinfo = this.data.userinfo;
      var type = e.currentTarget.dataset.type;
      var value = e.detail;
        userinfo[type] = value;
        this.setData({
            userinfo:userinfo
        })
      console.log(type, value, userinfo)
  },
  next(e){
      wx.setStorageSync('userinfo', this.data.userinfo);
      wx.navigateTo({
          url: '/pages/app_agency/step-2/step-2',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setStorageSync('levelid', options.id)
    console.log(options)
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
    console.log(wx.getStorageSync('levelid'))
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