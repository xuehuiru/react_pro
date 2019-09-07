// 引入子模块
import User from './modules/user';
import Type from './modules/type';
import Reader from './modules/reader';
import Userid from './modules/userId';

// 实例化模块
const user = new User();
const type = new Type();
const reader = new Reader();
const userdata = new Userid();

// setInterval(()=>{
//     user.isLogin = !user.isLogin;
//     // console.log('user...', user);
// }, 1000);

export default {
    user,
    type,
    reader,
    userdata
}