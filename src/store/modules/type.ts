import {observable, action} from 'mobx'
import {getType} from '../../service/index'

class Question{
    @observable list: object[] = [];

    // 获取所有试题类型
    @action getType: ()=>Promise<any> = async ()=>{
        let result: any = await getType();
        this.list = result;
        return this.list;
    }   
}

export default Question;