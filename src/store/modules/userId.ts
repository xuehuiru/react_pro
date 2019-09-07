import {observable, action} from 'mobx'
import {getUserData,getUserid,getUserAuthority} from '../../service/index'

class Userid{
    @observable list: object[] = [];

    @action async getUserData(): Promise<any>{
        let result: any = await getUserData();
        console.log('result...', result);
        this.list=result;
        return this.list;
    }

    @action async getUserid(): Promise<any>{
        let result: any = await getUserid();
        console.log('result...', result);
        this.list=result;
        return this.list;
    }

    @action async getUserAuthority(): Promise<any>{
        let result: any = await getUserAuthority();
        console.log('result...', result);
        this.list=result;
        return this.list;
    }
}

export default Userid;