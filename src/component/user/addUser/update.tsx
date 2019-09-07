import * as React from 'react';

import { Input, Button, Select } from 'antd';
const { Option } = Select;

const userData = ['管理员', '出题者', '浏览者'];

const userId=['zhaoxiaoru','liuyu','chenmanjie','yihang','dingshaoshan','heinan']

class Update extends React.Component {

    constructor(props: any) {
        super(props);

    }

    public render() {

        return (
            <div>
                <Select style={{ width: '200px', margin: 10, color: '#ccc' }} defaultValue='请选择身份id'>
                    {
                        userId.map((item:any,index:any)=>{
                            return <Option value={item}>{item}</Option>
                        })
                    }
                </Select>
                <br />
                <Input style={{ width: '95%', margin: 10 }} size="default" placeholder="请输入用户名" />
                <Input style={{ width: '95%', margin: 10 }} size="default" placeholder="请输入密码" />
                <Select style={{ width: '200px', margin: 10, color: '#ccc' }} defaultValue='请选择身份id'>
                {
                        userData.map((item: any, index: any) => {
                            return <Option key={index} value={item}>{item}</Option>
                        })
                    }
                </Select>
                <br />
                <Button style={{
                    background: 'linear-gradient(-90deg,#4e75ff,#0139fd)',
                    backgroundImage: 'linear-gradient(-90deg, rgb(78, 117, 255), rgb(1, 57, 253))',
                    width: 100,
                    color: '#fff',
                    margin: '10px'
                }}>确定</Button>
                <Button style={{ margin: '10px' }}>重置</Button>
            </div >
        )
    }
}

export default Update;