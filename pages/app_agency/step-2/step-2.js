// pages/app_agency/step-2/step-2.js
const app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    num: 0,
    price: 0,
    checked: false,
  },
  confirmEvent() {
    this.data.checked
    this.setData({
      checked: !this.data.checked
    })
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
        price: price.toFixed(2)
      })
    })
  },
  onSubmit() {
    if (!this.data.checked) {
      wx.showToast({
        title: '请同意代理协议',
        icon: 'none',
        duration: 1000,
      })
      return;
    } else if (this.data.num) {
      var json = [],
        index = 0;
      this.data.list.forEach(item => {
        if (item.hasoption == 0 && item.count > 0) {
          json[index] = {};
          json[index].id = item.id;
          json[index].count = item.count;
          json[index].price = item.price;
          json[index].optionid = 0;
          index++;
        } else if (item.hasoption == 1) {
          item.options.forEach(option => {
            if (option.count > 0) {
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
        key: "goodsList",
        data: json
      });
      wx.navigateTo({
        url: '/pages/app_agency/step-3/step-3',
      })
    }else{
      wx.showToast({
        title: '请选择产品',
        icon: 'none',
        duration: 1000,
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var that = this;
    core.get("goods/getAgentGoods", {}, res => {
      that.setData({
        list: res.goodslist
      })
    })
  },
  // getList(){
  //     var that = this;
  //     core.get('goods/getAgentGoods', {}, function (res) {
  //         console.log(res)
  //         that.setData({
  //             goodslist:res.goodslist
  //         })
  //     })
  // },
  //   next(e) {
  //       var that = this
  //       var goods = that.data.goods;
  //       console.log(goods)
  //       console.log(that.data.goods)
  //       wx.setStorageSync('goodsin', goods)

  //       // console.log(that.data.goods,wx.getStorageSync('goodsin'));return 
  //       if(that.data.checked){
  //           wx.navigateTo({
  //               url: '/pages/app_agency/step-3/step-3',
  //           })
  //       }else{
  //           wx.showToast({
  //               title: '请同意代理协议',
  //               icon: 'none',
  //               image: '',
  //               duration: 1000,
  //               success: function(res) {},
  //               fail: function(res) {},
  //               complete: function(res) {},
  //           })
  //       }

  //   },
  //   onChange(e){
  //       // [{ "id": "12429", "price": "398.00", "num": "1", "type": "goodsid" }, { "id": "24950", "price": "88.00", "num": "2", "type": "optionid", "pid": "12431" }, { "id": "24951", "price": "188.00", "num": "2", "type": "optionid", "pid": "12431" }]
  //       var that = this,item={};
  //       var index = e.currentTarget.dataset.index;
  //       var price = e.currentTarget.dataset.price;
  //       var id = e.currentTarget.dataset.id;
  //       var num = e.detail;
  //       var hasoption = e.currentTarget.dataset.hasoption;
  //       var goods = that.data.goods;
  //       item.id=id;
  //       item.price = price;
  //       item.num = num;
  //       item.hasoption=hasoption;
  //       goods[index] = item
  //       that.setData({
  //           goods:goods
  //       })  
  //   },
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