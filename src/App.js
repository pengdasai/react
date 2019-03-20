import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Index from "./components/Index";
//import Xinwen from "./components/Xinwen";
//import Detail from "./components/Detail";
//import Axios from "./components/Axios";
//import Home from './components/Home'
//import News from './components/News'
//import Form from './components/Form'
//import Method from "./components/Method";
//import List from "./components/List";
//import Todolist from "./components/Todolist";
//import ReactForm from "./components/ReactForm";
//import Todo from './components/Todo'
//import Menu from './components/Menu'
//import Pcontent from './components/Pcontent'
import User from './components/User'
import Main from './components/Main'
import routes from './moduel/routes'
class App extends Component {
    //jsx语法
  render() {
    return (
        <Router>
            <div>
                <Link to='/'>首页</Link><br/>
                <Link to='/user'>用户</Link><br/>
                <hr/>
                {
                    routes.map((route,key)=>{
                        if (route.exact){
                            return <Route key={key} exact path={route.path} component={route.component} routes={routes.routes}/>;
                        }else {
                            return <Route key={key} path={route.path} component={route.component} routes={routes.routes}/>
                        }
                    })
                }
            </div>
        </Router>
    );
  }
}
//暴露出来便于调用
export default App;
