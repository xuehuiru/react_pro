import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Radio } from 'antd';
import { Input, Button, Select } from 'antd';
const { Option } = Select;
import { Route, NavLink, Redirect } from 'react-router-dom';

import Add from './add';
import Update from './update';

const userData = ['管理员', '出题者', '浏览者'];

interface Props {
    userdata: any
}

@inject('userdata')
@observer


class Adduser extends React.Component<Props> {

    constructor(props: any) {
        super(props);
        this.getUserData();

    }

    state = {
        loading: false
    }

    enterLoading = () => {
        this.setState({ loading: true });
    };

    getUserData = async () => {

        console.log(this.props.userdata);
        const list = await this.props.userdata.getUserData();
        const AuthorityData = await this.props.userdata.getUserAuthority();
        console.log(list, AuthorityData);
    }

    public render() {

        return (
            <div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ flex: 1, height: "320px", border: '1px solid #ccc' }}>
                        <Radio.Group style={{ marginBottom: 8, margin: '10px' }} defaultValue="a">
                            <Radio.Button value="a"><NavLink to='/main/adduser/add'>添加用户</NavLink></Radio.Button>
                            <Radio.Button value="b"><NavLink to='/main/adduser/update'>更新用户</NavLink></Radio.Button>
                        </Radio.Group>
                        <Route path='/main/adduser/add' component={Add} />
                        <Redirect from='/main/adduser' to='/main/adduser/add' />
                        <Route path='/main/adduser/update' component={Update} />
                    </div>
                    <div style={{ flex: 1, height: "320px", border: '1px solid #ccc' }}>
                        <Radio.Group style={{ marginBottom: 8, margin: '10px' }}>
                            <Radio.Button>添加身份</Radio.Button>
                        </Radio.Group>
                        <br />
                        <Input style={{ width: '95%', margin: 10 }} size="default" placeholder="请输入身份名称" />
                        <br />
                        <Button style={{
                            background: 'linear-gradient(-90deg,#4e75ff,#0139fd)',
                            backgroundImage: 'linear-gradient(-90deg, rgb(78, 117, 255), rgb(1, 57, 253))',
                            width: 100,
                            color: '#fff',
                            margin: '10px'
                        }}>确定</Button>
                        <Button style={{ margin: '10px' }}>重置</Button>
                    </div>
                    <div style={{ flex: 1, height: "200px", border: '1px solid #ccc' }}>
                        <Radio.Group style={{ marginBottom: 8, margin: '10px' }}>
                            <Radio.Button>添加Api接口权限</Radio.Button>
                        </Radio.Group>
                        <br />
                        <Input style={{ width: "95%", margin: 10 }} size="default" placeholder="请输入api接口权限名称" />
                        <Input style={{ width: "95%", margin: 10 }} size="default" placeholder="请输入api接口权限url" />
                        <Input style={{ width: "95%", margin: 10 }} size="default" placeholder="请输入api接口权限方法" />
                        <br />
                        <Button style={{
                            background: 'linear-gradient(-90deg,#4e75ff,#0139fd)',
                            backgroundImage: 'linear-gradient(-90deg, rgb(78, 117, 255), rgb(1, 57, 253))',
                            width: 100,
                            color: '#fff',
                            margin: '10px'
                        }} loading={this.state.loading} onClick={this.enterLoading}>确定</Button>
                        <Button style={{ margin: '10px' }}>重置</Button>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ flex: 1, height: "220px", border: '1px solid #ccc' }}>
                        <Radio.Group style={{ marginBottom: 8, margin: '10px' }}>
                            <Radio.Button>添加试图接口权限</Radio.Button>
                        </Radio.Group>
                        <br />
                        <Select style={{ width: '200px', margin: 10, color: '#ccc' }} defaultValue='请选择已有视图'>

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
                    </div>
                    <div style={{ flex: 1, height: "220px", border: '1px solid #ccc' }}>
                        <Radio.Group style={{ marginBottom: 8, margin: '10px' }}>
                            <Radio.Button>给身份设置Api接口权限</Radio.Button>
                        </Radio.Group>
                        <br />
                        <Select style={{ width: '200px', margin: 10, color: '#ccc' }} defaultValue='请选择身份id'>
                            {
                                userData.map((item: any, index: any) => {
                                    return <Option key={index} value={item}>{item}</Option>
                                })
                            }
                        </Select>
                        <br />
                        <Select style={{ width: '200px', margin: 10, color: '#ccc' }} defaultValue='请选择api接口权...'>

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
                    </div>
                    <div style={{ flex: 1, height: "220px", border: '1px solid #ccc' }}>
                        <Radio.Group style={{ marginBottom: 8, margin: '10px' }}>
                            <Radio.Button>给身份设置视图权限</Radio.Button>
                        </Radio.Group>
                        <br />
                        <Select style={{ width: '200px', margin: 10, color: '#ccc' }} defaultValue='请选择身份id'>
                            {
                                userData.map((item: any, index: any) => {
                                    return <Option key={index} value={item}>{item}</Option>
                                })
                            }
                        </Select>
                        <br />
                        <Select style={{ width: '200px', margin: 10, color: '#ccc' }} defaultValue='请选择视图权限...'>

                        </Select>
                        <br />
                        <Button style={{
                            background: 'linear-gradient(-90deg,#4e75ff,#0139fd)',
                            backgroundImage: 'linear-gradient(-90deg, rgb(78, 117, 255), rgb(1, 57, 253))',
                            width: 100,
                            color: '#fff',
                            margin: '10px'
                        }} loading={this.state.loading} onClick={this.enterLoading}>确定</Button>
                        <Button style={{ margin: '10px' }}>重置</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Adduser;