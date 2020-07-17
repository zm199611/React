- 首页有问题
给数据建模  这种情况可以考虑加model层
数据业务封装在model里，
View Component显示，
数据的改动，由model负责， 分层的好处
    首页recommend有bug
    - 推荐的专辑图片有问题
    数据建模
    MVVM react 界面有数据驱动 前端设计模式
    MVC  Model View Controller 后端web开发模式 
1. 做react/vue项目，仿一个音乐项目
2. 做一个上线的业务  思路 架构(结构)  技能点

- react 组件  由组件component实例和一个CSS文件styl
    create-react-app  css/less
    不一定要用官方的create-react-app,下次自己的项目，可以把现在这个项目当作模板
    类文件夹大写，  一个文件夹一个组件， 便于维护与模块化
- 单页应用  Single  Page  Application (SPA) 只有一个页面的应用
    可以提升网站用户体验
    点击路由时，不会重新刷新整个页面，而是根据路由的配置，把相应的组件显示出来
- 根据界面  可以分析出,中间内容根据Route匹配
- loading组件 在哪个目录下创建?
    contaniners
    component目录为路由级组件
    Loading 服务于任何listAPI 列表组建  通用组件

1. 数据请求阶段, 显示loading
2. 数据来了,隐藏loading
父组件 要给loading传参

- api/ 分层的能力,职责分离是代码复杂,且大型化的前提