import React, { Component } from 'react';

class Detail extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    //生命周期函数
    componentDidMount(){
        //获取动态路由的传值
        console.log(this.props.match.params.aid)
    }

    render(){
        return(
            <div>
                新闻详情组件

            </div>
        )
    }

}

export default Detail;