import React from 'react';//核心库
import ReactDOM from 'react-dom';//提供与DOM相关的功能
import './assets/css/index.css';
//引入app.js文件
import App from './App';
//加快运行速度的文件
import * as serviceWorker from './serviceWorker';
//把app组件渲染到root组件
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
