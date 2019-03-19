import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }

    inputChange=(event)=>{
        //console.log('test')
        //获取表单的值
        console.log(event.target.value);
        //将输入的值赋值给username
        this.setState({
            username:event.target.value
        })
    };

    getInput=()=>{
        alert(this.state.username)
    }

    render(){
        return(
            <div>
                <h2>演示表单事件</h2>

                <input onChange={this.inputChange}/><button onClick={this.getInput}>取值</button>
            </div>
        )
    }
}

export default Form;