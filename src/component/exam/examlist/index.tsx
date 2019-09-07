import * as React from 'react';

import { Input, Button, Select, Radio, Table } from 'antd';
const { Option } = Select;

const TypeData = ['周考一', '周考二', '周考三', '月考'];

const date = ['全部','进行中','已结束'];

class Addexam extends React.Component {

    constructor(props: any) {
        super(props);

    }


    public render() {

        const columns = [
            {
                title: '试卷信息',
                dataIndex: 'describe'
            },
            {
                title: '班级',
                dataIndex: 'name'
            },
            {
                title: '创建人',
                dataIndex: 'address'
            },
            {
                title: '开始时间',
                dataIndex: 'startTime'
            },
            {
                title: '结束时间',
                dataIndex: 'andTime'
            },
            {
                title: "操作",
                dataIndex: 'action'
            }
        ];

        const data = [
            {
                describe: '1',
                name: 'John',
                startTime: '2019-8-20',
                endTime: '2019-9-5',
                address: 'New York No. 1 Lake Park',
                action: "详情"
            },
            {
                describe: '2',
                name: 'John',
                startTime: '2019-8-20',
                endTime: '2019-9-5',
                address: 'New York No. 1 Lake Park',
                action: "详情"
            },
            {
                describe: '3',
                name: 'John',
                startTime: '2019-8-20',
                endTime: '2019-9-5',
                address: 'New York No. 1 Lake Park',
                action: "详情"
            },
        ];

        return (
            <div>
                <div>
                    <span>考试类型：</span>
                    <Select style={{ width: '200px', margin: 10, color: '#ccc' }}>
                        {
                            TypeData.map((item: any, index: any) => {
                                return <Option key={index}>{item}</Option>
                            })
                        }
                    </Select>
                    <span>课程：</span>
                    <Select style={{ width: '200px', margin: 10, color: '#ccc' }}>
                        {
                            TypeData.map((item: any, index: any) => {
                                return <Option key={index}>{item}</Option>
                            })
                        }
                    </Select>
                    <Button style={{ marginLeft: '100px', width: '150px' }} type="primary" icon="search">查询</Button>
                </div>
                <div style={{marginTop:'30px'}}>
                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <p>试卷列表</p>
                        <Radio.Group style={{ marginBottom: 8, margin: '10px',color:'skyblue' }} defaultValue='进行中'>
                        {
                            date.map((item, index) => {
                                return <Radio.Button value={item} key={index}>{item}</Radio.Button>
                            })
                        }
                    </Radio.Group>
                    </div>
                    <Table style={{ marginLeft: '20px' }} columns={columns} dataSource={data} size="middle" />
                </div>
            </div >
        )
    }
}

export default Addexam;