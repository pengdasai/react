import React, { Component } from 'react';
const axios = require('axios');
class Menu extends Component{
    constructor(props){
        super(props);
    }
    requestData=()=>{
        var api = '';
        axios.get(api)
            .then((res)=> {
                console.log(res)
            })
            .catch((err)=> {
                console.log(err)
            })
    }
    //一加载就请求数据
    componentDidMount(){
        this.requestData();
    }

    render(){
        return(
            <div>
                菜单组件
            </div>
        )
    }

}

export default Menu;