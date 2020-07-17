- react 小书
- react全家桶 = react + react-router + redux

react = 数据 + UI
效果: 数据不需要派发的方式来做，父组件 -> 子组件
redux 任何组件可以随时跟redux connect

搭建 store -> provider -> App
connect(mapStateToProps)
reducer 可以有很多个
1. 状态收归redux管理，由reducer函数提供
2. connect 借到组件之中去state，单一状态数，state.comments