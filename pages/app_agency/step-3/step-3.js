// pages/app_agency/step-3/step-3.js
var idcardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
const app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {
      idcard: '',
      idcard_pic: ["", "", ""],
    },
    goodslist: [],
    pic: ["/static/images/icon-113.png", "/static/images/icon-114.png", "/static/images/icon-115.png"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      goodslist: wx.getStorageSync("goodsList")
    })

  },
  onChange(e) {
    var that = this;
    var userinfo = that.data.userinfo;
    var type = e.currentTarget.dataset.type
    userinfo[type] = e.detail;
    that.setData({
      userinfo: userinfo
    })
  },
  upPic(e) {
    var that = this;
    var {
      index
    } = e.currentTarget.dataset;
    var json = this.data.userinfo;

    core.upload(res => {
      wx.showLoading({
        title: '上传中...',
      })
      if (res.status) {
        json.idcard_pic[index] = res.url;
        that.setData({
          userinfo: json
        })
        wx.hideLoading()
        wx.showToast({
          title: '上传成功！'
        })
      } else {
        wx.hideLoading()
        wx.showToast({
          title: '上传失败！',
          icon: "none"
        })
      }
    })
  },
  next(e) {
    // 验证信息
    console.log(e)
    var idFlag = idcardReg.test(this.data.userinfo.idcard); //验证身份证
    var picFlag = this.data.userinfo.idcard_pic.every(pic => { //验证是否上传证件照
      return pic != "";
    })
    if (!idFlag) {
      wx.showToast({
        title: '身份证错误！',
        icon: "none"
      })
      return;
    }
    if (!picFlag) {
      wx.showToast({
        title: '请上传证件照！',
        icon: "none"
      })
      return;
    }
    // 上传数据
    var that = this
    var userinfo = wx.getStorageSync('userinfo')
    var goods = wx.getStorageSync('goodsList');
    var idinfo = that.data.userinfo;
    userinfo.level = wx.getStorageSync('levelid');
    core.get('member/info/agentApply', {
      userinfo: userinfo,
      goods: goods,
      idinfo: idinfo
    }, function(res) {
      console.log(res);
      if (res.error == 0) {
          wx.showModal({
              title: '提示',
              content: '资料提交成功,结果将在1-2工作日反馈',
              showCancel:false,
              success(res) {
                  wx.redirectTo({
                      url: '/pages/member/index/index',
                  })
              }
          })
      }
    })
    console.log(that.data.userinfo)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})