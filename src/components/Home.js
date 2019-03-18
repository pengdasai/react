import React, { Component } from 'react';
import App from "../App";
//name:className
//for:htmlFor
//style:{{"":""}}
class Home extends Component{

    constructor(){
        super();
        //在这里可以定义数据
        this.state={
            name:'王培',
            age:30,
            userInfo:{
                username:'新开普'
            },
            color:'red',
            style:{
                color:'blue',
                fontSize:'40px'
            }
        }
    }

    render(){
        return (
            <div>
                <h2>根结点的组件</h2>
                <p>P标签</p>
                <p>绑定的数据：{this.state.name}</p>
                <p>绑定的数据：{this.state.age}</p>
                <p>绑定的对象数据：{this.state.userInfo.username}</p>
                <div className='red'>属性绑定</div>
                <label htmlFor="name">姓名</label>
                <input id='name'/>
                <div style={{color:'red'}}>行内样式</div>

                <div style={this.state.style}>行内样式</div>
            </div>
        )
    }
}

export default Home;