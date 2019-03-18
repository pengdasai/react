import React, { Component } from 'react';
import logo from '../assets/image/logo.svg';
class News extends Component{
    constructor(props){
        super(props);//用于父子组件传值
        this.state={
            msg:'新闻',
            list:[
                'apple',
                'banana',
                'orange'
            ],
            list2:[
                <h2>h2</h2>,
                <h2>h2</h2>
            ],
            list3:[
                {title:'新华日报1'},
                {title:'新华日报2'},
                {title:'新华日报3'},
            ]
        }
    }

    render(){
        var listRes=this.state.list.map(function (value,key) {
            return <li>{value}</li>
        })
        return(
          <div>
              {this.state.msg}
              <img src={logo}/>
              <hr/>
              {this.state.list2}
              <hr/>
              {listRes}
              <hr/>
              <ul>
              {
                  this.state.list3.map(function (value, key) {
                      return (<li key={key}>{value.title}</li>)
                  })
              }
              </ul>
          </div>
        )
    }
}

export default News;