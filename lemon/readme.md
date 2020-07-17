- 没有使用reate-react-app  react开发的脚手架
    从0开始构建一个react项目 webpack工具 开发打包工具
    react的开发流程 webpack  ts react + react-router redux
    1. webpack 开发流程工具
    2. webpack-cli  commend line 开发工具的命令行工具
    3. webpack-dev-server  在3000端口上启动应用

    - scripts webpack-dev-server  3000运行dev项目

    - typescript  tsconfig.json根目录下的ts配置
      
    - @babel/core  做js编译的核心  es6->es5

    - bootstrp前端css框架

    1. src未来是我们的开发目录，业务代码在这里
        index.ts entry 入口文件
        index.html 是显示的模板
        webpack webpack-cli
        webpack.config.js 来负责 webpack-dev-server --open
    2. 浏览器不支持ts，所以需要安装 .ts typescript awsome-typescript-loader tsconfig.json
        .ts->.js
    3. @babel/cli @babel/core @babel/preset-env负责转码


    搭建完开发流程


    react react-dom