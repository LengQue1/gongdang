//index.js
//获取应用实例
const app = getApp()
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    tab1isLoad: false,
    tab2isLoad: false,
    swiperData: {
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528977747882&di=4fa58fd121bbb65b264d8df6a1729035&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ff07591c1af7a801216a3edd0d50.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528976525453&di=5b598db802640fdb97e71d87937d9f5d&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F11%2F64%2F68%2F24bOOOPICa9_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528976525471&di=dabc19556e7b3823a978ed223abff1fc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018a68591c18d9b5b3086ed401055a.png%401280w_1l_2o_100sh.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      circular: true
    },
    classify: [
      { src: '../../images/classify-01.png', text: '下午茶蛋糕', link: "/pages/classifyList/classifyList", classifyId: 0 },
      { src: '../../images/classify-02.png', text: '生日蛋糕', link: "/pages/classifyList/classifyList", classifyId: 1 },
      { src: '../../images/classify-03.png', text: '儿童蛋糕', link: "/pages/classifyList/classifyList", classifyId: 2 },
      { src: '../../images/classify-04.png', text: '家庭气氛蛋糕', link: "/pages/classifyList/classifyList", classifyId: 3 }
    ],
    tabs1: {
      tabs: ["特价区", "新品区", "热卖区"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0
    },
    tabs2: {
      tabs: ["送长辈", "送恩师", "送朋友"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0
    },
    shopInfo: {
      shopPortrait: "../../images/head_icon.png",
      shopName: "大楼王饼屋",
      time: "03-27",
      likeNum: "999",
      shopTitle: "宝贝们今天周四啦~，我们新上架了一批蛋糕哦！今天预定或者下单有8折优惠！快点给甜甜投单吧！今天的自拍好看吗！！QWQ",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528450634579&di=8c9e82a6b80b9f70919747ca4e8a14e9&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F86%2F03%2F72S58PICXyh_1024.jpg"
    },
    videoInfo: {
      videoSrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      videoTitle: "甜甜家工坊制作大赏",
      videoMsg: "这么专业的厨房你见过吗？",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528977274278&di=6e4c02dcb3120c094f41ec122fdcceb0&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F24%2F47%2F09658PICbFu_1024.jpg"
    },
    Breakfast: [
      {
        imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
        title: "爆款热卖蛋糕",
        price: "17.00",
        link: "/pages/goodsDetails/goodsDetails",
        goodsId: 1
      },
      {
        imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
        title: "爆款热卖蛋糕",
        price: "20.00",
        link: "/pages/goodsDetails/goodsDetails",
        goodsId: 2
      },
      {
        imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
        title: "爆款热卖蛋糕",
        price: "17.00",
        link: "/pages/goodsDetails/goodsDetails",
        goodsId: 1
      },
      {
        imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
        title: "爆款热卖蛋糕",
        price: "20.00",
        link: "/pages/goodsDetails/goodsDetails",
        goodsId: 2
      },
      {
        imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
        title: "爆款热卖蛋糕",
        price: "17.00",
        link: "/pages/goodsDetails/goodsDetails",
        goodsId: 1
      },
      {
        imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
        title: "爆款热卖蛋糕",
        price: "20.00",
        link: "/pages/goodsDetails/goodsDetails",
        goodsId: 2
      }
    ],
    tabsContent1: {
      moreGoods: "/pages/goodsList/goodsList",
      goodsList: [
        {
          imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529652404&di=f471e64ccd6e0396798db1060eb25dea&imgtype=jpg&er=1&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150605%2F0042040339598853_b.jpg",
          title: "爆款热卖蛋糕",
          price: "17.00",
          link: "/pages/goodsDetails/goodsDetails",
          goodsId: 1
        },
        {
          imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529057278288&di=c44d9a1649feb2259bb893749f29e9e9&imgtype=0&src=http%3A%2F%2Fpic29.photophoto.cn%2F20131225%2F0042040383815494_b.jpg",
          title: "爆款热卖蛋糕",
          price: "40.00",
          link: "/pages/goodsDetails/goodsDetails",
          goodsId: 2
        }
      ]
    },
    tabsContent2: {
      moreGoods: "/pages/goodsList/goodsList",
      goodsList: [
        {
          imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
          title: "爆款热卖蛋糕",
          price: "17.00",
          link: "/pages/goodsDetails/goodsDetails",
          goodsId: 1
        },
        {
          imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528455084521&di=3d8ccabf8f6c2c049c208f95d74edae1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F32%2F09T58PICfs4_1024.jpg",
          title: "爆款热卖蛋糕",
          price: "40.00",
          link: "/pages/goodsDetails/goodsDetails",
          goodsId: 2
        }
      ]
    }

  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          "tabs1.sliderLeft": (res.windowWidth / that.data.tabs1.tabs.length - sliderWidth) / 2,
          "tabs1.sliderOffset": res.windowWidth / that.data.tabs1.tabs.length * that.data.tabs1.activeIndex,
          "tabs2.sliderLeft": (res.windowWidth / that.data.tabs2.tabs.length - sliderWidth) / 2,
          "tabs2.sliderOffset": res.windowWidth / that.data.tabs2.tabs.length * that.data.tabs2.activeIndex
        });
      }
    });

  },
  tabClick1: function (e) {
    this.setData({
      "tabs1.sliderOffset": e.currentTarget.offsetLeft,
      "tabs1.activeIndex": e.currentTarget.id,
      tab1isLoad: true
    });
    setTimeout(() => {
      this.setData({
        tab1isLoad: false
      })
    }, 500)
  },
  tabClick2: function (e) {
    this.setData({
      "tabs2.sliderOffset": e.currentTarget.offsetLeft,
      "tabs2.activeIndex": e.currentTarget.id,
      tab2isLoad: true
    });
    setTimeout(() => {
      this.setData({
        tab2isLoad: false
      })
    }, 500)
  }
})
