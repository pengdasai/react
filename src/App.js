import React, { Component } from 'react';
import './assets/css/App.css';
import Axios from "./components/Axios";
//import Home from './components/Home'
//import News from './components/News'
//import Form from './components/Form'
//import Method from "./components/Method";
//import List from "./components/List";
//import Todolist from "./components/Todolist";
//import ReactForm from "./components/ReactForm";
//import Todo from './components/Todo'
//import Dolist from './components/DoList'
class App extends Component {
    //jsx语法
  render() {
    return (
      <div className="App">
        hello react
        <Axios/>
      </div>
    );
  }
}
//暴露出来便于调用
export default App;
