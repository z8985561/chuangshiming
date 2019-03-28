const app = getApp(),
  core = app.requirejs("core");
// pages/my_cloud/storehouse/storehouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    num: 0,
    price: 0
  },
  upCountEvent(e) {
    var {
      index,
      goods
    } = e.detail;
    var list = this.data.list;
    list[index] = goods;
    this.setData({
      list: list
    })
    this.sum();
  },
  // 计算总数 和 总额
  sum() {
    var num = 0;
    var price = 0;
    this.data.list.forEach(item => {
      if (item.hasoption == 0 && item.count) {
        var count = parseInt(item.count)
        num += count
        price += count * parseFloat(item.price);
      } else if (item.hasoption == 1) {
        item.options.forEach(option => {
          if (option.count) {
            var count = parseInt(option.count)
            num += count
            price += count * parseFloat(option.mprice);
          }
        })
      }
      this.setData({
        num: num,
        price: price * 100
      })
    })
  },
  onSubmit(){
    var json = [],index = 0;
    this.data.list.forEach(item => {
      if (item.hasoption == 0 && item.count > 0){
        json[index] = {};
        json[index].id = item.id;
        json[index].count = item.count;
        json[index].price = item.price;
        json[index].optionid = 0;
        index++;
      } else if (item.hasoption == 1){
        item.options.forEach(option=>{
          if (option.count > 0){
            json[index] = {};
            json[index].id = item.id;
            json[index].optionid = option.id;
            json[index].count = option.count;
            json[index].price = option.mprice;
            index++;
          }
        })
      }
    })
    console.log(json)
    wx.setStorage({
      key: "stockList",
      data: json
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    core.get("goods/getAgentGoods", {}, res => {
      that.setData({
        list: res.goodslist
      })
    })
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