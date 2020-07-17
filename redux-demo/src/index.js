import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { get } from 'axios';


// redux 中的重要部分：action reducer state
const counterReducer = function(state ={conut:1},action){
  switch(action.type){
    case 'COUNT_ADD':
    return {
      ...state,count:state.count+1
    }
    default:
      return state;
    }
  } 

const store = createStore(counterReducer,
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) //创建一个store
console.log(store);
console.log(store.getState())

//想要改变reducer的值，需要dispatch一个action
// action里需要有两个参数 type(区别不同的action触发类型) payload(传递进去的数据)

store.dispatch({
  type: 'COUNT_ADD',
  payload:{}
})
console.log(store);
console.log(store.getState())

const getPostRequest = () =>{
  return get('')
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
