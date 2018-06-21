// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    phone: "",
    code: "",
    time: 60,
    hidden: true,
    region: ['广东省', '惠州市', '惠城区'],
    DetailedAddress: ""
  },
  phoneBlur: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  validatePhone: function (phone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
      return false;
    } else {
      return true;
    }
  },
  getCode: function () {
    if (this.validatePhone(this.data.phone)) {
      wx.showToast({
        title: '验证码已发送'
      });
      this.timeOut();
    } else {
      wx.showToast({
        title: '请输入正确的手机号码！',
        icon: 'none'
      });
    }
  },
  timeOut: function () {
    if (this.data.time === 0) {
      this.setData({
        time: 60
      });
      this.setData({
        hidden: true
      });
    } else {
      this.setData({
        hidden: false
      });
      setTimeout(() => {
        this.setData({
          time: this.data.time - 1
        });
        this.timeOut();
      }, 1000)
    }
  },
  formSubmit: function (e) {
    let dataValue = e.detail.value;
    console.log(dataValue);
    if (dataValue.name === '') {
      wx.showToast({
        title: '姓名不能为空！',
        icon: 'none'
      });
      return;
    }
    if (dataValue.phone === '') {
      wx.showToast({
        title: '手机号码不能为空！',
        icon: 'none'
      });
      return;
    }
    if (!(this.validatePhone(dataValue.phone))) {
      wx.showToast({
        title: '手机号码不正确！',
        icon: 'none'
      });
      return;
    }
    if (dataValue.code === '') {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none'
      });
      return;
    }

    if (dataValue.DetailedAddress === '') {
      wx.showToast({
        title: '详细地址不能为空',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '正在提交中',
    });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '提交成功！',
      });
    }, 2000)

  },
  formReset: function () {
    console.log('rest')
  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let id = options.id;
    console.log(id)
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