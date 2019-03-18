import React, { Component } from 'react';
import './assets/css/App.css';
//import Home from './components/Home'
import News from './components/News'
class App extends Component {
    //jsx语法
  render() {
    return (
      <div className="App">
        hello react
          <News/>
      </div>
    );
  }
}
//暴露出来便于调用
export default App;
