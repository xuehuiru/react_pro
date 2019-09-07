import {observable, action} from 'mobx'
import {getReader,getAddexam,getQuestionsType,getTypeExam} from '../../service/index'

class Reader{
    @observable list: object[] = [];

    
    //查看试题
    @action async getReader(params: any): Promise<any>{
        let result: any = await getReader(params);
        // console.log('result...', result);
        this.list=result;
        return this.list;
    }

    //
    @action async getAddexam(params: any): Promise<any>{
        let result: any = await getAddexam(params);
        // console.log('result...', result);
        this.list=result;
        return this.list;
    }

    @action async getTypeExam(params: any): Promise<any>{
        let result: any = await getTypeExam(params);
        // console.log('result...', result);
        this.list=result;
        return this.list;
    }

    @action async getQuestionsType(params: any): Promise<any>{
        let result: any = await getQuestionsType(params);
        // console.log('result...', result);
        this.list=result;
        return this.list;
    }
}

export default Reader;