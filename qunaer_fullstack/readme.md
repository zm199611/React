- 全栈项目
    一分为二的思想
    1. 前后端分离
    2. UI与数据(redux)分离
    城市数据怎么做
    - citydata 默认为null
        action-type
    - action setcitydata
    - 是否显示 isCitySelectorVisible boolean值
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE
        isLoadingCityData
        ACTION_SET_IS_LOADING_CITY_DATA

    - 后端API设计流程
        1. mongodb/mysql 写真后端
            mockAPI 解决了跨域问题
        2. 模块化输出api配置
        3. require一个json Mock.mock进行render
    - api ->action ->reducer ->connect ->组件 


    - 数据请求都放到actions中
        异步的action中，可以dispatch多个action