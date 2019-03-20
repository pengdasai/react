//路由模块化
import Main from "../components/Main";
import User from "../components/User";
import Info from '../components/user/Info'

let routes=[
    {
        path:"/",
        component:Main,
        exact:true
    },
    {
        path:'/user',
        component:User,
        routes:[
            {
            path:'/user/info',
            component:Info
            },
        ]
    }
];

export default routes;