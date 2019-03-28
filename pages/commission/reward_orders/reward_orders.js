function getNowDate() {
  var year = new Date().getFullYear();
  var mon = new Date().getMonth() + 1;
  if (mon < 10) {
    mon = "0" + mon;
  }
  return year + "-" + mon;
}
const app = getApp(),
  core = app.requirejs("core")
// pages/commission/reward_orders/reward_orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    param:{
      type:1,
      time: getNowDate(),
      page:1,
      pagesize:10
    },
    list:[
      {
        nickname:"博文",
        avatar:"https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb:"/static/images/goods-1.png",
        title:"创视明洗发水奢耀柔润",
        goodsprice:"365.00",
        total: "2",
        statusstr: "已入账",
        ordersn:"SH20190319160350204222",
        price:"730.00",
        createtime:"2019-03-19 16:03:50",
        reward:"28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
      {
        nickname: "博文",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5dibJVwrj2eplYprLvAezibA217AXwYUnuKAibscLJn0zygUOmoD5A2JLXY7ibKbhI72zdO98CvASRLHfv9mZzm5Bw/132",
        thumb: "/static/images/goods-1.png",
        title: "创视明洗发水奢耀柔润",
        goodsprice: "365.00",
        total: "2",
        statusstr: "已入账",
        ordersn: "SH20190319160350204222",
        price: "730.00",
        createtime: "2019-03-19 16:03:50",
        reward: "28"
      },
    ]
  },
  // 时间选择事件
  bindTimeChange(e){
    var param = this.data.param;
    param.time = e.detail.value;
    param.page = 1;
    this.setData({
      param: param
    });
    this.getOrderList(param);
  },
  getMoreData(){
    this.getOrderList(this.data.param);
  },
  // 获取数据
  getOrderList(param){
    var that = this;
    param = param || that.data.param;
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    core.get("url", param,res=>{
      wx.hideLoading()
      if(res.error == 0){
        var list = this.data.list.concat(res.list)
        that.setData({
          list: list,
          ["param.page"]:that.param.page++
        })
      }else{
        wx.hideLoading()
        that.setData({
          show:false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面参数 options.type 1 区域奖励 2 代理奖励 3 一级奖励 4 二级奖励 5 销售奖励
    this.param.type = options.type
    this.getOrderList();
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