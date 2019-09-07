// 一级路由
import Login from '../views/login';
import Main from '../views/main';
import Type from '../component/shiti/type';
import Gard from '../component/class/gard';
import Class from '../component/class/class';
import Adduser from '../component/user/addUser';
import Show from '../component/user/show';
import Add from '../component/user/addUser/add';
import Update from '../component/user/addUser/update';
import Addexam from '../component/exam/addexam';
import examList from '../component/exam/examlist';
import Start from '../component/exam/start';
import ClassStart from '../component/exam/classStart';


export default {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/main/type',
            component: Type
        },{
            path:"/main/gard",
            component:Gard
        },{
            path:"/main/class",
            component:Class
        },{
            path:"/main/adduser",
            component:Adduser,
            children:[{
                    path:"/main/adduser/add",
                    component:Add
                },{
                    path:'/main/adduser/update',
                    component:Update
                }
            ]
        },{
            path:"/main/show",
            component:Show
        },{
            path:"/main/addexam",
            component:Addexam
        },{
            path:"/main/examlist",
            component:examList
        },{
            path:"/main/start",
            component:Start
        },{
            path:"/main/classStart",
            component:ClassStart
        }]
    },{
        path: '/login',
        component: Login
    }]
}