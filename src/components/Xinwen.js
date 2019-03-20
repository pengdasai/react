import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Xinwen extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {
                    aid:'1',
                    title:'新闻1'
                },
                {
                    aid:'2',
                    title:'新闻2'
                },
                {
                    aid:'3',
                    title:'新闻3'
                },
                {
                    aid:'4',
                    title:'新闻4'
                }
            ]
        }
    }

    render(){
        return(
            <div>
                我是xinwen组件<br/>
                <ul>
                    {
                        this.state.list.map((value,key)=> {
                            return (
                                <li key={key}>
                                    <Link to={`/detail/${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default Xinwen;