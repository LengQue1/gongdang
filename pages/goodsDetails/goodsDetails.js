// pages/goodsDetails/goodsDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPoP: false,
    addDisabled: false,
    subDisabled: true,
    count: 1,
    maxCount: 5,
    cartNum: 2,
    swiperData: {
      indicatorDots: true,
      autoplay: false,
      interval: 2000,
      duration: 500,
      circular: true
    },
    goodsDetails: {
      id: 0,
      goodsTitle: "【预定可享受8折优惠】爆款热卖蛋糕本店特别推荐！口感超好！",
      price: "127.00",
      volume: "365",
      isBook: true,
      goodsImg: "http://img1.imgtn.bdimg.com/it/u=1581936646,2577335817&fm=27&gp=0.jpg",
      bannerImgSrc:[
        'http://img1.imgtn.bdimg.com/it/u=1581936646,2577335817&fm=27&gp=0.jpg',
        'http://img01.taopic.com/170905/318754-1FZ5091H056.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3102980024,2773277089&fm=214&gp=0.jpg'
      ],
      spec: [
        {
          id: 1,
          name: 'c超大型',
          select: true
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
      ],
      details: '<div class="module-content" data-desc-xtpl="mui/desc-mods/custommodule/index">    <div class="mui-custommodule mdv-custommodule" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/custommodule/index">        <div class="mui-custommodule-item">            <img style="width:100%;" class="lazyImg" src="https://img.alicdn.com/imgextra/i4/333751672/TB2xwZ1n8DH8KJjSspnXXbNAVXa_!!333751672-0-scmitem6000.jpg" aria-label="商品详情图">        </div>        <div class="mui-custommodule-item">            <img  style="width:100%;" class="lazyImg" src="https://img.alicdn.com/imgextra/i4/333751672/TB2qkpPonnI8KJjy0FfXXcdoVXa_!!333751672-0-scmitem6000.jpg" aria-label="商品详情图">        </div>        <div class="mui-custommodule-item">            <img style="width:100%;" class="lazyImg" src="//img.alicdn.com/imgextra/i2/333751672/TB2s2cmekfb_uJkSnfoXXb_epXa_!!333751672-0-scmitem6000.jpg_2200x2200Q50s50.jpg_.webp" aria-label="商品详情图">        </div>        <div class="mui-custommodule-item">            <img style="width:100%;" class="lazyImg" src="//img.alicdn.com/imgextra/i1/333751672/TB2Am7bejgy_uJjSZPxXXanNpXa_!!333751672-0-scmitem6000.jpg_2200x2200Q50s50.jpg_.webp" aria-label="商品详情图">        </div>        <div class="mui-custommodule-item">            <img style="width:100%;" class="lazyImg" src="//img.alicdn.com/imgextra/i3/333751672/TB2WI0Rob_I8KJjy1XaXXbsxpXa_!!333751672-0-scmitem6000.jpg_2200x2200Q50s50.jpg_.webp" aria-label="商品详情图">        </div>        <div class="mui-custommodule-item">            <img style="width:100%;" class="lazyImg" src="//img.alicdn.com/imgextra/i2/333751672/TB27qXBfXTM8KJjSZFlXXaO8FXa_!!333751672-0-scmitem6000.jpg_2200x2200Q50s50.jpg_.webp" aria-label="商品详情图">        </div>        <div class="mui-custommodule-item">            <img style="width:100%;" class="lazyImg" src="//img.alicdn.com/imgextra/i2/333751672/TB2d4sbejgy_uJjSZK9XXXvlFXa_!!333751672-0-scmitem6000.jpg_2200x2200Q50s50.jpg_.webp" aria-label="商品详情图">        </div>        <div class="mui-custommodule-item">            <img style="width:100%;" class="lazyImg" src="//img.alicdn.com/imgextra/i2/333751672/TB26331n8DH8KJjSspnXXbNAVXa_!!333751672-0-scmitem6000.jpg_2200x2200Q50s50.jpg_.webp" aria-label="商品详情图">        </div>    </div></div>'
    }
  },
  jumpShopCart: function () {
    wx.switchTab({
      url: '/pages/shopingCart/shopingCart',
    });
  },
  buyMethods: function (e) {
    this.animation.translateY(0).step();
    this.setData({
      showPoP: true
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
    let newspec = this.data.goodsDetails.spec.map((e) => {
      e.select = false
      return e;
    });
    newspec[index].select = true;
    let goodsDetails = this.data.goodsDetails;
    goodsDetails.spec = newspec;
    this.setData({
      goodsDetails: goodsDetails
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
    console.log('sub' + curCount)
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
    }, 1000)
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