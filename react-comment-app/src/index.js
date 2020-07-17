import React from 'react';
import ReactDOM from 'react-dom'; // index.js  入口文件
import CommentApp from './CommentApp'; // 模块机制 
import './index.css';//像js一样引用  css  in  js
//不再使用link


ReactDOM.render(
  // react 的组件世界
  <CommentApp />,
  // 真实DOM
  document.getElementById('root')
)