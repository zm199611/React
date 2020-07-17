import React, { Component } from 'react'; //按需加载  es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// let { a } = {a: 1, b: 2, c: 3}
// react facebook  高级 OO 
class CommentApp extends Component {
  constructor(){
    super();
    this.state = {
     comments: [{
        username:'朱明',
        content:'东理吴彦祖'
        },
        {
          username:'刘琦',
          content:'小黑妹'
        }]
      }
  }
  render() { // 接口
    const  { comments } = this.state;
    return (
      <div className="wrapper">
        {/* onSubmit是事件函数吗 */}
        {/* a href="" onclick></a>  目前已经学了state编码  props*/}
        {/* state：内部自己的状态属性 props：是外部传来的属性 是react中两种最重要的数据属性 */}
        {/* react组件  render负责页面输出，state是内部数据，props是外部数据 */}
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        {/* 伸手向父组件要什么？ 1.静态页面 2.动态化  props 显示评论列表 */}
        <CommentList b="2" comments = { comments }/>
      </div>
    )
  }
  handleSubmitComment(comment){
    console.log(comment);
  }
}


export default CommentApp;