// pages/my_cloud/order/order.js
const app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    param: {
      page: 1,
      status: "",
      type:'is_jinhuo'
    },
    list: [],
    show:true
  },
  onChange(e){
    if (e.detail.title == "全部"){
      this.data.param.status = "";
    } else if (e.detail.title == "待审核"){
      this.data.param.status = 0;
    } else if (e.detail.title == "已审核"){
      this.data.param.status = 3;
    }
    this.data.param.page = 1;
    this.setData({
      list:[]
    })
    this.getOrderData();
  },
  //获取订单列表
  // status 0 全部 1 待审核 2已审核
  getOrderData() {
    var that = this;
    var param = this.data.param;
    core.get("order/get_list", param,
    res => {
      console.log(res)
      if (res.error == 0 && res.list.length){
        var list = that.data.list.concat(res.list)
        that.setData({
          list: list,
          ["param.page"]: ++this.data.param.page
        })
      }else{
        that.setData({
          show:false
        })
      }
    })
  },
  getMoreData(){
    this.getOrderData();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getOrderData();
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