//MicroApplication.js
//获取应用实例
const app = getApp()

Page({
  // data
  data: {
    userinfo: {},
    hasUserInfo: false,
    applicationData: [
      {
        title:"申请审批",
        itemDetails: [
          {
            title: "请假申请",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url:"/page/tabBar/MicroCampus/MicroCampus",
          },
          {
            title: "用印申请",
            iconUrl: "../../../image/MicroApplication/yongyin.png",
            url: "https://www.baidu.com",
          },
          {
            title: "审批",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
        ],
      },
      {
        title: "信息查询",
        itemDetails: [
          {
            title: "公告查询",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
          {
            title: "待办事项",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
          {
            title: "成绩查询",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
          {
            title: "课表查询",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
        ],
      },
      {
        title:"工具",
        itemDetails:[
          {
            title: "问卷",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
          {
            title: "投票",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
          {
            title: "排序",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
          {
            title: "报名",
            iconUrl: "../../../image/MicroApplication/qingjia.png",
            url: "https://www.baidu.com",
          },
        ]
      }
    ],
  },

  // onLoad
  onLoad: function () {

  },

})