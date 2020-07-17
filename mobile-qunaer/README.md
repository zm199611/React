1. css reset
    normalize.css
    index.css  css移动业务的设置

2. 无状态组件的创建流程刻意练习
    - 组件插入父级组件中，思考props
    - 组键的类型如果是无状态的组件
        prop-types  css  propTypes
        形参props
        return (<div></div>)
    - props 解构出来的prop
    - 功能函数建议由父组件来打理
        纯粹的负责Render
        函数可以复用

3. 年轻的react hooks，全新的开发方式
    class Component -> function  函数式编程
    Class + constructor + 生命周期 + render() 冗杂
    -> function + react hooks函数
    - useCallback  缓存函数
    - useMemo
    以上两个都是性能优化函数

4. 状态组件的编写顺序
    - 数据

5. redux
    - 简单的redux项目结构
        store.js createStore reducers
            中间键 axios redux不支持异步，如果要使用异步，可以使用redux-thunk
        reducer.js combineReducers
        action.js  数据请求  状态改变的触发都由action负责
            ActionType 可读性


    - redux Api -> 设计状态(reducer + action) 
        初始值 from to  两个reducer函数
        函数  初始值  action return初始值
        状态会怎样变化  动作的声明 SET_FROM
        - switch case
        - 解构action { type,payload } action
        - actionTypes可读性
        - 把actions写出来
    - 数据组件化
        1. connect高阶返回组件
            connect({
                mapState
                mapDispatch
            })(Component)

    - reducer
        1. action的标准做法
        - 返回{ type:,payload: } 更新reducer
        状态
        - 组件里的事件，生命周期等功能
        主要是数据状态打交道  归为action来做
        - 所有的action export function
        在组件里引入需要的actions
        - bindActionCreators
        action  变成本地调用的函数
            dispatch
        - useMemo 缓存函数
        - connect 中去第二个函数返回action


        2. action
           from：北京 -> to:南昌
           两个action 
           修改的本质  redux

- from to的复盘
    1. redux哲学 是一个编程思想 
        - reducer概念(是一个纯函数)  返回一个状态以及接受状态的更新
        那一刻只有一个状态 与之相应，switch case
        - actions actionsTypes
            是更新reducer的使者 dispatch一个action
        from to 都有独立的reducer函数和action
        - exchangeFromTo()
            dispatch getState










    ```js
    const store = createStore(reducer);
    const State = ['赣州'，'南昌']；
    const reducer = (state, action) => {
    if (typeof state === 'undefined') {
        return 0;
    }
        switch (action.type) {
        case action.type = :
            return ;
        case :
            return ;
        default:
            return state;
    }
    } 
    ```

