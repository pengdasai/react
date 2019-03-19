import React, { Component } from 'react';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }

    inputChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    setUsername=()=>{
        this.setState({
            username:'新开普'
        })
    }

    render(){
        return(
            <div>
                <p>双向绑定:model改变影响view视图，反过来view视图改变影响model数据</p>

                <input value={this.state.username} onChange={this.inputChange}/>

                <p>{this.state.username}</p>

                <button onClick={this.setUsername}>改变值</button>
            </div>
        )
    }
}

export default Todolist;