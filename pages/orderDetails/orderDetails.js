// pages/orderDetails/orderDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {
      status: 0,
      Number: "32947123",
      time: "2018-06-20 19:32:20",
      goodsList:[
        {
          imgSrc: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=539237304,2363132111&fm=200&gp=0.jpg",
          title: "【预定可享受8折优惠预定可享受8折优惠预定可享受8折优惠预定可享受8折优惠】",
          price: "299.00",
          type: "大份/甜味",
          count: "4",
        },
        {
          imgSrc: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=539237304,2363132111&fm=200&gp=0.jpg",
          title: "【预定可享受8折优惠预定可享受8折优惠预定可享受8折优惠预定可享受8折优惠】",
          price: "199.00",
          type: "大份/甜味",
          count: "2",
        }
      ],
      freight: "2.00",
      total: "1596.00",
      customer: {
        seatNumber: "大厅A001",
        peopleNumber: "4",
        remarks: "如果食用食品应发就医，可在线申请理赔。尽量做的好吃点。"
      },
      distribution: {
        name: "张三",
        phone: "1341321822"
      }
    }
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