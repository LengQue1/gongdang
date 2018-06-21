// pages/orderList/orderList.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoad: true,
    tabs: ["全部", "进行中", "已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    GoodsList: [
      {
        id: 0,
        imgSrc: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3811669672,1421790443&fm=27&gp=0.jpg",
        title: "特质蛋糕",
        text: "【预定可享受8折优惠】爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕【预定可享受8折优惠】爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕",
        count: "6",
        type: "店内就餐",
        price: "128.00"
      },
      {
        id: 1,
        imgSrc: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3811669672,1421790443&fm=27&gp=0.jpg",
        title: "特质蛋糕",
        text: "【预定可享受8折优惠】爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕【预定可享受8折优惠】爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕爆款热卖蛋糕",
        count: "2",
        type: "店内就餐",
        price: "158.00"
      }
    ]
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
      isLoad: true
    });
    setTimeout(() => {
      this.setData({
        isLoad: false
      })
    }, 1000)
  },
  deletedOrder: function (e) {
    let index = e.currentTarget.dataset.index;
    let that = this;
    let curGoodsList = that.data.GoodsList;
    
    wx.showModal({
      content: '是否要删除所选择的订单',
      confirmText: "确定",
      confirmColor: "#e12b44",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) { 
          wx.showLoading({
            title: '正在处理中'
          });
          setTimeout(() => {
            wx.hideLoading();
            curGoodsList.splice(index, 1);
            that.setData({
              GoodsList: curGoodsList
            });
          }, 1000)

        } else {
   
        }
      }
    })
  },
  OrderDetail: function (e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/orderDetails/orderDetails?id='+index,
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    setTimeout(()=> {
      this.setData({
        isLoad: false
      })
    },1000)
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