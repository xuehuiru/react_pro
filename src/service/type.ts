import request from '../utils/request';

// 获取试题
export let getType = ()=>{
    return request.get('/exam/getQuestionsType');
}