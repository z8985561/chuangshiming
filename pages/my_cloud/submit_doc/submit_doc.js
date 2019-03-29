// pages/my_cloud/submit_doc/submit_doc.js
const app = getApp(),core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    docPic:''
  },
  submitDoc(){
    var that = this;
    core.upload(res=>{
      if (res.status==1){
        that.setData({
          docPic: res.url
        })
      }
    })
  },
  closePic(){
    this.setData({
      docPic: ''
    })
  },
  submitEvent(){
    if(!this.data.docPic){
      core.toast("请上传转账凭证","none")
      return;
    }
    //获取缓存里面的产品列表
    var stockList = wx.getStorageSync("stockList");
    if (!stockList.length){
      core.toast("未选择任何产品", "none")
      return;
    }
    core.post("url",{
      "stockList": stockList,//产品列表
      "docPic": this.data.docPic//凭证地址
    },res=>{
      if (res.error==0){
        core.success("下单成功");
        wx.redirectTo({
          url: '/pages/my_cloud/my_cloud',
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
    var that = this;
    core.get("order/create", {}, res => {
      that.setData({
        list: res
      })
    })
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