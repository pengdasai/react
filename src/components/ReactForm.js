import React, { Component } from 'react';

class ReactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'form表单',
            name:'',
            sex:'1',
            city:'',
            cities:[
                '北京','上海','广州'
            ],
            hobbies:[
                {
                    'title':'吃饭',
                    'checked':true
                },
                {
                    'title':'睡觉',
                    'checked':true
                },
                {
                    'title':'写代码',
                    'checked':true
                }
            ],
            info:''
        }
    }
    //获取表单的值
    handelSubmit=(event)=>{
        //阻止submit的提交事件
        event.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobbies,this.state.info)
        //alert(this.state.name)
    };

    handelName=(event)=>{
        this.setState({
            name:event.target.value
        })
    };

    handelSex=(event)=>{
        this.setState({
            sex:event.target.value
        });
    };

    handelCity=(event)=>{
        this.setState({
            city:event.target.value
        })
    };
    handelBobby=(key)=>{
        var hobbies = this.state.hobbies;
        hobbies[key].checked=!hobbies[key].checked;
        this.setState({
            hobbies:hobbies
        })
    };

    handelInfo=(event)=>{
        this.setState({
            info:event.target.value
        })
    }

    render(){
        return(
            <div>
                <p>ReactForm</p>
                <p>{this.state.msg}</p>
                <form onSubmit={this.handelSubmit}>

                    姓名：<input type="text" value={this.state.name} onChange={this.handelName}/><br/>

                    性别：<input type="radio" value="1" checked={this.state.sex==1} onChange={this.handelSex}/>男
                    <input type="radio" value="2" checked={this.state.sex==2} onChange={this.handelSex}/>女<br/>

                    居住城市：<select value={this.state.city} onChange={this.handelCity}>
                                {
                                    this.state.cities.map(function (value,key) {
                                        return <option key={key}>{value}</option>
                                    })
                                }
                                </select><br/>
                    爱好：
                    {
                        this.state.hobbies.map((value,key)=> {
                            return(
                                    <span key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.handelBobby.bind(this,key)}/>{value.title}
                                    </span>
                            )
                        })
                    }<br/>

                    备注：<textarea value={this.state.info} onChange={this.handelInfo}></textarea><br/>
                        
                    <input type="submit" value="提交"/>

                </form>
            </div>
        )
    }
}

export default ReactForm;