import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Radio, Table } from 'antd';

interface Props {
    type: any
}

const date = ['用户数据', '身份数据', 'api接口权限', '身份和api接口关系', '视图接口权限', '身份和视图权限关系'];


@inject('type')
@observer


class Show extends React.Component<Props> {

    constructor(props: any) {
        super(props);

    }

    state = {
        value: '用户数据'
    }

    getItem = (e: any): void => {
        this.setState({
            value: e.target.value
        })
    }


    public render() {

        const columns = [
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '密码',
                dataIndex: 'password',
            },
            {
                title: '身份',
                dataIndex: 'status',
            },
        ];

        const datas = [
            {
                userName: "dingshaoshan",
                password: "3299309039efvdmfdvf m,vf,m",
                status: "出题者"
            },
            {
                userName: "dingshaoshan",
                password: "3299309039efvdmfdvf m,vf,m",
                status: "出题者"
            },
            {
                userName: "dingshaoshan",
                password: "3299309039efvdmfdvf m,vf,m",
                status: "出题者"
            }
        ]
        return (
            <div>
                <div>
                    <Radio.Group style={{ marginBottom: 8, margin: '10px' }} onChange={this.getItem} defaultValue='用户数据'>
                        {
                            date.map((item, index) => {
                                return <Radio.Button value={item} key={index}>{item}</Radio.Button>
                            })
                        }
                    </Radio.Group>
                </div>
                <h1>{this.state.value}</h1>
                <Table style={{ marginLeft: '20px' }} columns={columns} dataSource={datas} size="middle" />
            </div>
        )
    }
}

export default Show;