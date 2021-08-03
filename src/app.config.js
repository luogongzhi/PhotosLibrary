export default {
  pages: [
    'pages/index/index',
    'pages/detail/index',
    'pages/collect/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": 'pages/asset/home.png',
      "selectedIconPath": 'pages/asset/home.png',
    },{
      "pagePath": "pages/collect/index",
      "text": "我的收藏",
      "iconPath": 'pages/asset/collect.png',
      "selectedIconPath": 'pages/asset/collect.png',
    }]
  },
}
