// pages/app_agency/step-3/step-3.js
const app = getApp(), core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{
    idcard:'',
    idcard_pic: ["/static/images/icon-113.png", "/static/images/icon-114.png", "/static/images/icon-115.png"],
    },
    goodslist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodslist: wx.getStorageSync("goodsList")
    })
    
  },
onChange(e){
    var that = this;
    var userinfo = that.data.userinfo;
    var type = e.currentTarget.dataset.type
    userinfo[type]=e.detail;
    that.setData({
        userinfo:userinfo
    })
},
    upPic(e) {
        var that = this;
        var { index } = e.currentTarget.dataset;
        var json = this.data.userinfo;

        core.upload(res => {
            wx.showLoading({
                title: '上传中...',
            })
            console.log(res)
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
next(e){
    var that = this
    var userinfo = wx.getStorageSync('userinfo')
    var goods = wx.getStorageSync('goodsin');
    var idinfo = that.data.userinfo;
    var levelid = wx.getStorageSync('levelid');
    console.log(goods)
    core.get('member/info/agentApply',{userinfo:userinfo,goods:goods,idinfo:idinfo,levelid:levelid},function(res){
        console.log(res)
    })
    console.log(that.data.userinfo)
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