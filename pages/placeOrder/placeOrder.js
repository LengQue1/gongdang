// pages/placeOrder/placeOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {
      orderType: "外卖配送",
      orderTypeList: ['外卖配送', '店内自取', '店内就餐'],
      goodsList: [
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
      remarks: "如果食用食品应发就医，可在线申请理赔。尽量做的好吃点。",
      customer: {
        seatNumber: "大厅A001",
        seatNumberList: ["大厅A001", "大厅A002", "大厅A003", "大厅A004","大厅A005"],
        peopleNumber: "4"
      },
      outFood: {
        consigneeName: "张三",
        consigneeNameList: ["张三", "李四", "王五"],
        date: "请选择送货时间"
      },
      SelfExtraction: {
        time: "请选择送达时间",
        Name: "张三",
        NameList: ["张三", "李四", "王五"],
      }
    }
  },
  buyMethods: function () {

  },
  orderType: function() {
    let that = this;
    wx.showActionSheet({
      itemList: that.data.order.orderTypeList,
      success: function (res) {
        if (!res.cancel) {
          that.setData({
            "order.orderType": that.data.order.orderTypeList[res.tapIndex]
          });
        }
      }
    });
  },
  tableTap: function () {
    let that = this;
    wx.showActionSheet({
      itemList: that.data.order.customer.seatNumberList,
      success: function (res) {
        if (!res.cancel) {
          that.setData({
            "order.customer.seatNumber": that.data.order.customer.seatNumberList[res.tapIndex]
          });
        }
      }
    });
  },
  consigneeNameTap: function () {
    let that = this;
    wx.showActionSheet({
      itemList: that.data.order.outFood.consigneeNameList,
      success: function (res) {
        if (!res.cancel) {
          that.setData({
            "order.outFood.consigneeName": that.data.order.outFood.consigneeNameList[res.tapIndex]
          });
        }
      }
    });
  },
  SelfExtractionNameTap: function () {
    let that = this;
    wx.showActionSheet({
      itemList: that.data.order.SelfExtraction.NameList,
      success: function (res) {
        if (!res.cancel) {
          that.setData({
            "order.SelfExtraction.Name": that.data.order.SelfExtraction.NameList[res.tapIndex]
          });
        }
      }
    });
  },
  bindDateChange: function (e) {
    this.setData({
      "order.outFood.date": e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      "order.SelfExtraction.time": e.detail.value
    })
  },
  tableNum: function () {

  },
  peopleChange: function (e) {
    let value = e.detail.value;
    this.setData({
      "order.customer.peopleNumber": value
    });
  },
  changeRemarks: function (e) {
    let value = e.detail.value;
    this.setData({
      "order.remarks": value
    });
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