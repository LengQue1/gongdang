// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPoP:false,
    addDisabled: false,
    subDisabled: true,
    count: 1,
    maxCount: 5,
    goodsListTitle: '送亲友',
    animationData: {},
    detaileGoods: {},
    goodsList: [
      {
        id:0,
        goodsImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528896848628&di=6c6ba08522bd3ac131975f0301065aa4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9922720e0cf3d7ca4a050f58f91fbe096b63a928.jpg",
        goodsTitle: "【预定可享受8折优惠】爆款热卖蛋糕本店特别推荐！口感超好",
        isBook: true,
        goodsPrice: "17.00",
        spec: [
          {
            id: 1,
            name: 'c超大型',
            select:true
          },
          {
            id: 2,
            name: 'b大型',
            select: false
          },
          {
            id: 3,
            name: '小型',
            select: false
          },
          {
            id: 4,
            name: '迷你',
            select: false
          },
          {
            id: 4,
            name: '加巧克力',
            select: false
          }
        ]
      },
      {
        id:1,
        goodsImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528896848628&di=6c6ba08522bd3ac131975f0301065aa4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9922720e0cf3d7ca4a050f58f91fbe096b63a928.jpg",
        goodsTitle: "【预定可享受8折优惠】爆款热卖蛋糕本店特别推荐！口感超好",
        isBook: false,
        goodsPrice: "24.00",
        spec: [
          {
            id: 1,
            name: 'c超大型',
            select:true
          },
          {
            id: 2,
            name: 'b大型',
            select:false
          },
          {
            id: 3,
            name: '小型',
            select:false
          },
          {
            id: 4,
            name: '迷你',
            select:false
          }
        ]
      },
      {
        id:2,
        goodsImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528896848628&di=6c6ba08522bd3ac131975f0301065aa4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9922720e0cf3d7ca4a050f58f91fbe096b63a928.jpg",
        goodsTitle: "【预定可享受8折优惠】爆款热卖蛋糕本店特别推荐！口感超好",
        isBook: true,
        goodsPrice: "34.00",
        spec: [
          {
            id: 1,
            name: 'c超大型',
            select:true
          },
          {
            id: 2,
            name: 'b大型',
            select:false
          },
          {
            id: 3,
            name: '小型',
            select:false
          },
          {
            id: 4,
            name: '迷你',
            select:false
          }
        ]
      }
    ]
  },
  buyMethods: function (e) {
    this.animation.translateY(0).step();

    this.setData({
      showPoP: true,
      detaileGoods: this.data.goodsList[e.currentTarget.dataset.index]
    });
    this.setData({
      animationData: this.animation.export()
    });
  },
  maskTap: function () {
    this.setData({
      showPoP: false
    });
    this.animation.translateY('100%').step();
    this.setData({
      animationData: this.animation.export()
    });
  },
  specTap: function (e) {
    let index = e.currentTarget.dataset.index;
    let newspec = this.data.detaileGoods.spec.map((e)=>{
      e.select = false
     return e;
    });
    newspec[index].select = true;
    let detaileGoods = this.data.detaileGoods;
    detaileGoods.spec = newspec;
    this.setData({
      detaileGoods: detaileGoods
    });
  },
  bindCountChange: function (e) {
    let value = e.detail.value;
    if (value >= this.data.maxCount) {
      this.setData({
        count: this.data.maxCount,
        addDisabled: true,
        subDisabled: false
      });
      return;
    }
    if (value <= 1) {
      this.setData({
        count: 1,
        subDisabled: true,
        addDisabled: false
      });
      return;
    }
    this.setData({
      count: value,
      subDisabled: false,
      addDisabled: false
    })
  },
  subCount: function () {
    let curCount = this.data.count;
    console.log('sub'+curCount)
    if (this.data.subDisabled) {
      return;
    } 
    curCount--;
    this.setData({
      count: curCount,
      addDisabled: false
    });
    if (curCount <= 1) {
      this.setData({
        subDisabled: true
      })
    }
  },
  addCount: function () {
    let curCount = this.data.count;
    console.log('add' + curCount)
    if (this.data.addDisabled) {
      return;
    }
    curCount++;
    this.setData({
      count: curCount,
      subDisabled: false
    });
    if (curCount >= this.data.maxCount) {
      this.setData({
        count: curCount,
        addDisabled: true
      });
    }
  },
  addCart: function () {
    wx.showLoading({
      title: '正在提交中',
    });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '已加入购物车',
        icon: 'none'
      });
      this.setData({
        showPoP: false,
        count: 1,
        subDisabled: true
      });
    },1000)
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
    this.animation = wx.createAnimation({ duration: 500, timingFunction: "ease", });
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