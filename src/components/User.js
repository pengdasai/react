import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Info from './user/Info'
import Main from './user/Main'
class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='user'>
                <div className='content'>

                    <div className='left'>
                        <br/>
                        <Link to='/user'>个人中心</Link><br/>
                        <Link to='/user/info'>用户信息</Link><br/>
                    </div>

                    <div className='right'>
                        <Route exact path='/user' component={Main}></Route>
                        <Route path='/user/info' component={Info}></Route>
                    </div>

                </div>

            </div>
        )
    }

}

export default User;