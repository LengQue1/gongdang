var app = getApp()

Page({
  data: {
    addressList: [

    ],
    height: 0,
    scrollY: true
  },
  swipeCheckX: 35, //激活检测滑动的阈值
  swipeCheckState: 0, //0未激活 1激活
  maxMoveLeft: 185, //消息列表项最大左滑距离
  correctMoveLeft: 175, //显示菜单时的左滑距离
  thresholdMoveLeft: 75,//左滑阈值，超过则显示菜单
  lastShowMsgId: '', //记录上次显示菜单的消息id
  moveX: 0,  //记录平移距离
  showState: 0, //0 未显示菜单 1显示菜单
  touchStartState: 0, // 开始触摸时的状态 0 未显示菜单 1 显示菜单
  swipeDirection: 0, //是否触发水平滑动 0:未触发 1:触发水平滑动 2:触发垂直滑动
  onLoad: function () {
    this.pixelRatio = app.data.deviceInfo.pixelRatio;
    var windowHeight = app.data.deviceInfo.windowHeight;
    var height = windowHeight;
    for (var i = 0; i < 5; i++) {
      var msg = {};
      msg.name = '' + '用户' + i;
      msg.address = '中和街道东裕路25号'
      msg.id =  i;
      msg.phone = '13413121855';
      msg.default = false;
      this.data.addressList.push(msg);
    }
    this.setData({ addressList: this.data.addressList, height: height });
  },

  ontouchstart: function (e) {
    if (this.showState === 1) {
      this.touchStartState = 1;
      this.showState = 0;
      this.moveX = 0;
      this.translateXMsgItem(this.lastShowMsgId, 0, 200);
      this.lastShowMsgId = "";
      return;
    }
    this.firstTouchX = e.touches[0].clientX;
    this.firstTouchY = e.touches[0].clientY;
    if (this.firstTouchX > this.swipeCheckX) {
      this.swipeCheckState = 1;
    }
    this.lastMoveTime = e.timeStamp;
  },

  ontouchmove: function (e) {
    if (this.swipeCheckState === 0) {
      return;
    }
    //当开始触摸时有菜单显示时，不处理滑动操作
    if (this.touchStartState === 1) {
      return;
    }
    var moveX = e.touches[0].clientX - this.firstTouchX;
    var moveY = e.touches[0].clientY - this.firstTouchY;
    //已触发垂直滑动，由scroll-view处理滑动操作
    if (this.swipeDirection === 2) {
      return;
    }
    //未触发滑动方向
    if (this.swipeDirection === 0) {
      console.log(Math.abs(moveY));
      //触发垂直操作
      if (Math.abs(moveY) > 4) {
        this.swipeDirection = 2;

        return;
      }
      //触发水平操作
      if (Math.abs(moveX) > 4) {
        this.swipeDirection = 1;
        this.setData({ scrollY: false });
      }
      else {
        return;
      }

    }
    //禁用垂直滚动
    // if (this.data.scrollY) {
    //   this.setData({scrollY:false});
    // }

    this.lastMoveTime = e.timeStamp;
    //处理边界情况
    if (moveX > 0) {
      moveX = 0;
    }
    //检测最大左滑距离
    if (moveX < -this.maxMoveLeft) {
      moveX = -this.maxMoveLeft;
    }
    this.moveX = moveX;
    this.translateXMsgItem(e.currentTarget.id, moveX, 0);
  },
  ontouchend: function (e) {
    this.swipeCheckState = 0;
    var swipeDirection = this.swipeDirection;
    this.swipeDirection = 0;
    if (this.touchStartState === 1) {
      this.touchStartState = 0;
      this.setData({ scrollY: true });
      return;
    }
    //垂直滚动，忽略
    if (swipeDirection !== 1) {
      return;
    }
    if (this.moveX === 0) {
      this.showState = 0;
      //不显示菜单状态下,激活垂直滚动
      this.setData({ scrollY: true });
      return;
    }
    if (this.moveX === this.correctMoveLeft) {
      this.showState = 1;
      this.lastShowMsgId = e.currentTarget.id;
      return;
    }
    if (this.moveX < -this.thresholdMoveLeft) {
      this.moveX = -this.correctMoveLeft;
      this.showState = 1;
      this.lastShowMsgId = e.currentTarget.id;
    }
    else {
      this.moveX = 0;
      this.showState = 0;
      //不显示菜单,激活垂直滚动
      this.setData({ scrollY: true });
    }
    this.translateXMsgItem(e.currentTarget.id, this.moveX, 500);
    //this.translateXMsgItem(e.currentTarget.id, 0, 0);
  },
  onDeleteMsgTap: function (e) {
    var that = this;
    wx.showModal({
      content: '是否要删除所选择的地址',
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
            that.deleteMsgItem(e);
          }, 1000)

        } else {

        }
      }
    });
    
  },
  onDeleteMsgLongtap: function (e) {
    console.log(e);
  },
  onMarkMsgTap: function (e) {
    this.touchStartState = 1;
    this.showState = 0;
    this.moveX = 0;
    this.translateXMsgItem(this.lastShowMsgId, 0, 200);
    this.lastShowMsgId = "";
    let tindex = Number(e.currentTarget.id.replace(/id-/, ''));
    let index = this.getItemIndex(e.currentTarget.id);
    let addressList = this.data.addressList.map((e) => {e.default=false;return e});
    addressList[index].default = true;
    this.setData({
      addressList: addressList
    });
  },
  onMarkMsgLongtap: function (e) {
    console.log(e);
  },
  getItemIndex: function (id) {
    var addressList = this.data.addressList;
    for (var i = 0; i < addressList.length; i++) {
      if (addressList[i].id === Number(id)) {
        return i;
      }
    }
    console.log('return -1')
    return -1;
  },
  deleteMsgItem: function (e) {
    var animation = wx.createAnimation({ duration: 200 });
    animation.height(0).opacity(0).step();
    this.animationMsgWrapItem(e.currentTarget.id, animation);
    var s = this;
    setTimeout(function () {
      var index = s.getItemIndex(e.currentTarget.id);
      s.data.addressList.splice(index, 1);
      s.setData({ addressList: s.data.addressList });
    }, 200);
    this.showState = 0;
    this.setData({ scrollY: true });
  },
  translateXMsgItem: function (id, x, duration) {
    var animation = wx.createAnimation({ duration: duration });
    animation.translateX(x).step();
    this.animationMsgItem(id, animation);
  },
  animationMsgItem: function (id, animation) {
    var index = this.getItemIndex(id);
    var param = {};
    var indexString = 'addressList[' + index + '].animation';
    param[indexString] = animation.export();
    this.setData(param);
  },
  animationMsgWrapItem: function (id, animation) {
    var index = this.getItemIndex(id);
    var param = {};
    var indexString = 'addressList[' + index + '].wrapAnimation';
    param[indexString] = animation.export();
    this.setData(param);
  },
})