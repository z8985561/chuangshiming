var t = getApp(),
  e = t.requirejs("core");
Page({
  data: {
    loaded: !1,
    list: []
  },
  onLoad: function(e) {
    t.url(e)
  },
  onShow: function() {
    this.getList()
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
  },
  getList: function() {
    var t = this;
    e.get("member/address/get_list", {}, function(e) {
      t.setData({
        loaded: !0,
        list: e.list,
        show: !0
      })
    })
  },
  select: function(s) {
    var i = e.pdata(s).index;
    var id = e.pdata(s).id;
    e.get("member/address/set_default", {
      id: id
    }, function (t) {
      e.toast("设置成功");
    })
    t.setCache("orderAddress", this.data.list[i], 30), wx.navigateBack();
  }
})