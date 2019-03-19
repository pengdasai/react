import React, { Component } from 'react';
import storage from '../module/storage'
class DoList extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                // {
                //     title:'新开普',
                //     checked:true
                // },
                // {
                //     title:'北京迪科',
                //     checked:false
                // },
                // {
                //     title:'上海树维',
                //     checked:true
                // }
            ]
        }
    }

    deleteData=(key)=>{
        let temp = this.state.list;
        temp.splice(key,1);
        this.setState({
            list:temp
        });
        //缓存数据
        storage.set('todoList',temp)
    };

    addData=(e)=>{
        if (e.keyCode==13){
            let title = this.refs.title.value;
            //alert(title)
            let temp = this.state.list;
            temp.push({
                title:title,
                checked:false
            });

            this.setState({
                list:temp
            });
            this.refs.title.value='';
            //缓存数据
            storage.set('todoList',temp)
        }
    };

    checkboxChange=(key)=>{
      let temp = this.state.list;
      temp[key].checked=!temp[key].checked;
      this.setState({
          list:temp
      });
      //缓存数据
        storage.set('todoList',temp)
    };

    //生命周期函数
    componentDidMount(){
        //获取缓存的数据
        var todoList =  storage.get('todoList');
        if (todoList){
            this.setState({
                list:todoList
            })
        }
    }
    render(){
        return(
            <div>

                <input ref="title" onKeyUp={this.addData}/>

                <h2>待办事件</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=> {
                            if (!value.checked){
                                return(
                                    <li key={key}>
                                        {value.title}
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                        --<button onClick={this.deleteData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <hr/>

                <h2>已完成事件</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=> {
                            if (value.checked){
                                return(
                                    <li key={key}>
                                        {value.title}
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                        --<button onClick={this.deleteData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default DoList;