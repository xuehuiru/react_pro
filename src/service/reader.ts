import request from '../utils/request';

export let getReader = (params: object)=>{
    return request.get('/exam/questions/condition', params);
}

export let getAddexam = (params: object)=>{
    return request.get('/exam/subject', params);
}


export let getTypeExam = (params: object)=>{
    return request.get('/exam/examType', params);
}


export let getQuestionsType = (params: object)=>{
    return request.get('/exam/getQuestionsType', params);
}
