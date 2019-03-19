import React, { Component } from 'react';

class Method extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'我是组件',
            user:'王培'
        }
    }
    //定义方法
    run(){
        alert('run method...')
    }

    getData(){
        alert(this.state.msg)
    }

    arrow=()=>{
        //箭头函数代表上下文
        alert(this.state.user)
    }

    setData=()=>{
        this.setState({
            msg:'test'
        })
    }

    setName=(str)=>{
        this.setState({
           user:str
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <h2>{this.state.user}</h2>

                <button onClick={this.run}>执行方法</button>

                <hr/>
                <button onClick={this.getData.bind(this)}>getData</button>

                <hr/>
                <button onClick={this.arrow}>arrow-getData</button>

                <hr/>
                <button onClick={this.setData}>changeData</button>


                <hr/>
                <button onClick={this.setName.bind(this,'新开普')}>传值</button>
            </div>
        )
    }
}

export default Method;