Page({
  data: {
    newsList:[
      {
        id:"view",
        headUrl:"https://upload-images.jianshu.io/upload_images/2625770-6e4a87181c8318be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
        title:"张三",
        details:"你收到了一条新消息",
        time:"4月28日"
      },
      {
        id: "view",
        headUrl: "https://upload-images.jianshu.io/upload_images/2625770-6e4a87181c8318be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
        title: "李四",
        details: "你收到了一条新消息",
        time: "4月28日"
      },
      {
        id: "view",
        headUrl: "https://upload-images.jianshu.io/upload_images/2625770-6e4a87181c8318be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
        title: "王二",
        details: "你收到了一条新消息",
        time: "4月28日"
      },
      {
        id: "view",
        headUrl: "https://upload-images.jianshu.io/upload_images/2625770-6e4a87181c8318be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
        title: "麻子",
        details: "你收到了一条新消息",
        time: "4月28日"
      },
      {
        id: "view",
        headUrl: "https://upload-images.jianshu.io/upload_images/2625770-6e4a87181c8318be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
        title: "赵钱孙李",
        details: "你收到了一条新消息你收到了一条新消息你收到了一条新消息你收到了一条新消息你收到了一条新消息你收到了一条新消息",
        time: "4月28日"
      },
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

