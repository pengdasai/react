import React, { Component } from 'react';
import '../assets/css/index.css';
//待办事件案例
class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    addData=()=>{
        //alert(this.refs.title.value);
        var temp = this.state.list;
        temp.push(this.refs.title.value);
        this.refs.title.value='';
        this.setState({
            list:temp
        })
    };

    deleteData=(key)=>{
        //alert(key)
        var temp = this.state.list;
        temp.splice(key,1);
        this.setState({
            list:temp
        })
    };

    render(){
        return(
            <div>
                <h2>待办事件列表</h2>
                <input  ref="title"/><br/>

                <button onClick={this.addData}>增加</button><br/>

                <ul className='list'>
                    {
                        //使用this要注意this的指向，修改为箭头函数
                        this.state.list.map((value,key)=> {
                            return (
                                <li key={key}>{value}<button onClick={this.deleteData.bind(this,key)}>删除</button></li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }

}

export default Todo;