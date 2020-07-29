- router
    1. react-router
        react-router-dom
        react-router-config

    2. react-router 嵌套
       config routes配置一下清晰了
       当路由比较复杂时，传统的手写router/route配置难以维护，企业级的router配置方案react-router-config，清晰，可维护的routes/index.js配置
       layout app 里总有几套皮肤，匹配那个级别所有路由的routes react-router-config  renderRouters(route.routes)



- search 业务
    接口文档
    - 热门搜索
     /search/hot
     参数为null
     返回值 result.hot
    - 搜索建议
      /suggest?keyword=
      参数 keyword
      返回值 album
    - 搜索结果
      /search?keyword=