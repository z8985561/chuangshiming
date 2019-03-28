// pages/app_agency/notice/index.js
var e = getApp(), t = e.requirejs("core"), a = e.requirejs("wxParse/wxParse"), n = e.requirejs("jquery");
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        e.url(options)
        this.getlevel(options);

    },

    getlevel: function (options) {
        console.log(options)
        var that = this;
        t.get('member/getlevel', options, function (res) {
            if (res.error == 0) {
                a.wxParse("htmlcontent", "html", res.level.content, that, "5");
                that.setData({
                    level: res.level
                })
            } else {
                t.alert(res.message, wx.navigateBack());
            }
        })
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