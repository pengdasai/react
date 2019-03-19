import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }

    inputChange=()=>{
        //通过ref获取输入的值
        //2
        let val= this.refs.username.value;
        this.setState({
            username:val
        });
    };

    getInput=()=>{
        alert(this.state.username)
    };

    //键盘事件
    inputKeyUp=(event)=>{
        console.log(event.keyCode);
        //enter键值为13
        if (event.keyCode==13){
            alert(event.target.value)
        }
    }

    render(){
        return(
            <div>
                <p>我是list组件</p>
                {/*1*/}
                <input ref= 'username' onChange={this.inputChange}/><button onClick={this.getInput}>取值</button>

                <p>键盘事件</p>
                {/*键盘抬起触发的时间*/}
                <input onKeyUp={this.inputKeyUp}/>
            </div>
        )
    }
}

export default List;