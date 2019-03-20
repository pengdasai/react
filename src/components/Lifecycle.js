import React, { Component } from 'react';
/*
* 常用的周期函数：
* 加载：componentWillMount render componentDidMount(DOM操作)
* 更新：componentWillUpdate render componentDidUpdate
* 销毁：componentWillUnmont
* */
class Lifecycle extends Component{
    constructor(props){
        console.log('构造函数');
        super(props);
        this.state={
            msg:'hello'
        }
    }
    //1:执行顺序
    shouldComponentUpdate(){
        return true;
    }
    //2
    componentWillMount(){
        console.log('组件要挂载')
    }
    //4
    componentDidMount(){
        console.log('组件挂载')
        //DOM操作在这里进行
        //请求数据在这
    }
    setData=()=>{
        this.setState({
            msg:'change data'
        })
    };
    //组件销毁
    componentWillUnmont(){

    }
    //3
    render(){
        console.log('渲染数据')
        return(
            <div>
                {this.state.msg}
                <button onClick={this.setData}></button>
            </div>
        )
    }

}

export default Lifecycle;