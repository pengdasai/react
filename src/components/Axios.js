//请求服务器数据
import React, { Component } from 'react';
import axios from 'axios';
class Axios extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    getData=()=> {
        //alert("test")
        var api = 'http://gc.ditu.aliyun.com/regeocoding?l=39.938133,116.395739&type=001';
        axios.get(api)
            .then((response)=> {
                console.log(response.data.result)
                this.setState({
                    list:response.data.result
                })
            })
            .catch(function (error) {
                console.log(error)
            });
    };

    render(){
        return(
            <div>
               ---- Axios获取服务器数据----<br/>
                <button onClick={this.getData}>连接</button>

                <hr/>

                <ul>
                    {
                        this.state.list.map((value, key) =>{
                            return <li key={key}>{value.title}</li>
                        })
                    }

                </ul>
            </div>

        )
    }

}

export default Axios;