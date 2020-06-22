# vue-elm-mall

## 线上预览

[http://123.56.124.33:5000/](http://123.56.124.33:5000/)

## 安装依赖

```
npm install
```

### 开启一个具有热重载功能的开发服务器

```
npm run serve
```

### 构建项目

```
npm run build
```

## 主要功能

- [x] 商品菜单联动导航展示
- [x] 添加移除商品到购物车
- [x] 购物车商品列表
- [x] 清空购物车
- [x] 确认支付提示
- [x] 查看商品详情
- [x] 商品评价
- [x] 店铺综合评论
- [x] 商家信息展示
- [x] 商家收藏
- [x] 商家详情弹窗
- [ ] 商品滚动列表菜单标题吸顶
- [ ] 页面布局优化

## 技术栈

`vue` `better-scroll` `lib-flexible`

`axios` `express` `node` `javascript`

`less` `css` `es6/7`

`webpack` `vue-cli`

## 项目目录

```
├── public
│ ├── data  // 服务端接口数据
│ │ ├── goods.json
│ │ ├── ratings.json
│ │ └── seller.json
│ ├── favicon.ico
│ └── index.html
├── server  // 服务端
│ ├── app.js  // 启动服务器入口
│ ├── package-lock.json
│ └── package.json
├── src   // 源代码
│ ├── assets  // 静态资源
│ │ ├── font.css
│ │ ├── logo.png
│ │ └── reset.css
│ ├── components   // 项目组件
│ │ ├── alert  // 提示弹窗
│ │ │ ├── main.js
│ │ │ └── main.vue
│ │ ├── confirm  // 带有取消和确认按钮的弹窗
│ │ │ ├── index.vue
│ │ │ └── main.js
│ │ ├── food-picker  // 食品选择器
│ │ │ └── index.vue
│ │ ├── header  // 页面头部
│ │ │ └── index.vue
│ │ ├── header-detail  // 页面头部详情弹窗
│ │ │ ├── close.svg
│ │ │ └── index.vue
│ │ ├── icon  // 通用图标组件
│ │ │ ├── index.vue
│ │ ├── rating  // 商品评分组件
│ │ │ └── index.vue
│ │ ├── scroll  // 通用滚动组件
│ │ │ └── index.vue
│ │ ├── shopping-cart  // 购物车
│ │ │ ├── index.vue
│ │ │ └── shopping_cart.svg
│ │ ├── star-score  //  评分星级组件
│ │ │ └── index.vue
│ │ ├── svg-icon   //  svg图标
│ │ │ └── index.vue
│ │ └── tab-bar  //  可切换的导航栏组件
│ │ └── index.vue
│ ├── helper  // 帮助工具
│ │ └── directive.js
│ ├── views  // 页面
│ │ ├── food-detail  // 商品详情
│ │ │ └── index.vue
│ │ ├── goods  // 商品页
│ │ │ └── index.vue
│ │ ├── ratings  // 评价页
│ │ │ └── index.vue
│ │ └── shop  // 商家店铺
│ │ └── index.vue
│ ├── App.vue  // 应用根组件
│ ├── main.js  // 应用入口
│ └── request.js  // http 请求示例
├── README.md
├── babel.config.js
├── dir.txt
├── package-lock.json
├── package.json
├── postcss.config.js
└── vue.config.js   // 项目配置
```

## 项目截图

<img src="./screenshots/good.png" width="40%"><img src="./screenshots/rating.png" width="40%"><img src="./screenshots/shop.png" width="40%"><img src="./screenshots/food-detail.png" width="40%"><img src="./screenshots/header-detail.png" width="40%"><img src="./screenshots/alert.png" width="40%"><img src="./screenshots/confirm.png" width="40%">

## 支持

本项目是借鉴 [https://github.com/ustbhuangyi/vue-sell](https://github.com/ustbhuangyi/vue-sell)此应用界面功能由个人独立完成（源代码不同）。项目技术实现上都是自己精心思考研究后开发出来的，与此同时也练习了一次`vue`项目的开发流程，个人完成项目开源后也是收获满满。希望对看到此开源项目的您会有技术上的帮助，喜欢的话请右上角`star`一下:grin:，谢谢！
