// pages/shopingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
    allSelect: true,
    shopingCartListLen: false,
    totalCount: 0,
    shopingCartList:[
      {
        id: 1,
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528532322356&di=a26444dd0aa5a176dd87924d3b7381a9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Db1a9c0ba042442a7ba03f5e5b83bc827%2F728da9773912b31b9fa937108d18367adbb4e1c6.jpg',
        title: '白酒法国酒庄红酒AOC  德国原装进口限量销售',
        price: 280.00,
        num: 3,
        checked: true
      },
      {
        id: 2,
        imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3631144518,2389993655&fm=200&gp=0.jpg',
        title: '白酒法国酒庄红酒AOC  德国原装进口限量销售',
        price: 380.00,
        num: 2,
        checked: false
      },
      {
        id: 3,
        imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3631144518,2389993655&fm=200&gp=0.jpg',
        title: '白酒法国酒庄红酒AOC  德国原装进口限量销售',
        price: 180.00,
        num: 4,
        checked: true
      }
    ]
  },
  SelectCheckbox: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setChecked(!this.data.shopingCartList[index].checked,index);
    this.isAllSelect();
    this.computePrice();
  },
  SelectAllCheckbox: function (e) {
    if (this.data.allSelect) {
      this.data.shopingCartList.forEach((e,i) => {
        this.setChecked(false,i);
      });
      this.setData({
        allSelect: false
      });
      this.computePrice();
    } else {
      this.data.shopingCartList.forEach((e, i) => {
        this.setChecked(true, i);
      });
      this.setData({
        allSelect: true
      });
      this.computePrice();
    }
  },
  setChecked: function(checked,index) {
    let curShop = "shopingCartList[" + index + "].checked";
    this.setData({
      [curShop]: checked
    });
  },
  isAllSelect: function() {
    let flag = true;
    for (let i = 0; i < this.data.shopingCartList.length; i++) {
      if (this.data.shopingCartList[i].checked) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      this.setData({
        allSelect: flag
      });
      return true;
    } else {
      this.setData({
        allSelect: flag
      });
      return false
    }
  },
  computePrice: function () {
    let selectList = this.data.shopingCartList.filter(e => e.checked);
    let totalPrice = 0;
    for (let i = 0; i < selectList.length;i++) {
      totalPrice += selectList[i].price * selectList[i].num;
    }
    this.setData({
      totalCount: selectList.length,
      totalPrice: totalPrice.toFixed(2)
    });
  },
  openConfirm: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    wx.showModal({
      content: '是否要删除选择的商品',
      confirmText: "确定",
      confirmColor: "#e12b44",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          let curShopingCartList =  that.data.shopingCartList;
          curShopingCartList.splice(index,1);
          if (curShopingCartList.length) {
            that.setData({
              shopingCartList: curShopingCartList
            });
            that.computePrice();
            that.isAllSelect();
            that.SetTabBarFnc(String(that.data.shopingCartList.length));
          } else {
            that.setData({
              shopingCartList: curShopingCartList,
              shopingCartListLen: false
            });
            that.RemoveTabBarFnc(1);
          }
          
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },
  SetTabBarFnc: function (str) {
    wx.setTabBarBadge({
      index: 1,
      text: str
    })
  },
  RemoveTabBarFnc: function (index) {
    wx.removeTabBarBadge({
      index:index
    })
  },
  atWill: function () {
    wx.switchTab({
      url: '/pages/index/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
  },
  Settlement: function () {
    let selectList = this.data.shopingCartList.filter(e => e.checked);
    if (selectList.length) {
      wx.navigateTo({
        url: '/pages/placeOrder/placeOrder',
      })
    } else {
      wx.showToast({
        title: '请至少选择一款商品',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.computePrice();
    this.isAllSelect();

    if(this.data.shopingCartList.length) {
      this.setData({
        shopingCartListLen: true
      });
    } else {
      this.setData({
        shopingCartListLen: false
      });
    }
    this.SetTabBarFnc(String(this.data.shopingCartList.length));

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