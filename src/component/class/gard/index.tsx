import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Divider, Tag, Button } from 'antd';
const { Column, ColumnGroup } = Table;

interface Props {
    type: any
}



@inject('type')
@observer


class Gard extends React.Component<Props> {

    constructor(props: any) {
        super(props);
        this.getListData();
    }

    state = {
        datas: []
    }

    getListData = async () => {

        const list = await this.props.type.getType();

    }


    public render() {

        const data = [
            {
                key: '1',
                name: 'Joe',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Joe',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            },
        ];

        return (
            <div>
                <Button style={{ width: '158px', height: '38px', marginBottom: '20px' }} type="primary">+添加班级</Button>
                <Table dataSource={data}>
                    <Column title="班级名" dataIndex="name" key="name" />
                    <Column title="课程名" dataIndex="age" key="age" />
                    <Column title="教师号" dataIndex="address" key="address" />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a>修改</a>
                                <Divider type="vertical" />
                                <a>删除</a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        )
    }
}

export default Gard;