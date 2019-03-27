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
// pages/commission/my-integral/my-integral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    param: {
      active: 1, //1收入 2支出
      startDate: getNowDate(),
      endtDate: getNowDate(),
      page: 1,
      pagesize: 10
    },
    list: [{
        title: "二级销售奖励..",
        time: "2018-12-04",
        num: "+17"
      },
      {
        title: "销售奖励..",
        time: "2018-12-04",
        num: "+48"
      },
      {
        title: "二级销售奖励..",
        time: "2018-12-04",
        num: "+17"
      },
      {
        title: "销售奖励..",
        time: "2018-12-04",
        num: "+48"
      },
      {
        title: "二级销售奖励..",
        time: "2018-12-04",
        num: "+17"
      },
      {
        title: "销售奖励..",
        time: "2018-12-04",
        num: "+48"
      },
      {
        title: "二级销售奖励..",
        time: "2018-12-04",
        num: "+17"
      },
      {
        title: "销售奖励..",
        time: "2018-12-04",
        num: "+48"
      },
      {
        title: "二级销售奖励..",
        time: "2018-12-04",
        num: "+17"
      },
      {
        title: "销售奖励..",
        time: "2018-12-04",
        num: "+48"
      },
    ]
  },
  onChangType(e) {
    var param = {
            active: e.currentTarget.dataset.index, //1收入 2支出
            startDate: getNowDate(),
            endtDate: getNowDate(),
            page: 1,
            pagesize: 10
          };
    this.setData({
      param: param,
      show:true
    })
  this.getDataList(this.data.param)

  },
  // 分页事件
  getMoreData() {
    console.log("more...");
    this.getDataList(this.data.param)
  },
  // 筛选事件
  screenEvent(){
    this.getDataList(this.data.param)
  },
  // 请求事件
  getDataList(param){
    var that = this;
    core.get("url", param,res=>{
      if (res.error == 0){
        that.setData({
          list:res.list,
          ['param.page']: that.data.param.page++
        })
      }else{
        that.setData({
          show:false
        })
      }
    })
  },
  startDateChange(e){
    this.setData({
      ['param.startDate']:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getDataList(this.data.param)
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