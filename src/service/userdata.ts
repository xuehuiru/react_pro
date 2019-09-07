import request from '../utils/request';

export let getUserData = ()=>{
    return request.get('/user/view_authorit');
}


export let getUserid = ()=>{
    return request.get('/user/identity');
}

export let getUserAuthority = ()=>{
    return request.get('/api_authority');
}
