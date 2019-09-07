import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Select, Button, Tag } from 'antd';
import './index.css';

const { Option } = Select;

interface Props {
    reader: any
}

@inject('reader')
@observer


class Reader extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    state = {
        data: [],
        questionData:[],
        ClassData:[]
    }


    getReaderList = async () => {

        const list = await this.props.reader.getReader();

        const examData= await this.props.reader.getTypeExam();

        console.log(examData)
        // const questiondata = await this.props.addexam.getQuestionsType();
        let data = [
            {
                "title": list.data[0].title,
                "text": list.data[0].questions_type_text,
                "subject_text": list.data[0].subject_text,
                "exam_name": list.data[0].exam_name,
                "user_name": list.data[0].user_name,
                "exam_id": list.data[0].exam_id,
                "questions_stem": list.data[0].questions_stem,
                "questions_answer": list.data[0].questions_answer
            },
            {
                "title": list.data[1].title,
                "text": list.data[1].questions_type_text,
                "subject_text": list.data[1].subject_text,
                "exam_name": list.data[1].exam_name,
                "user_name": list.data[1].user_name,
                "exam_id": list.data[1].exam_id,
                "questions_stem": list.data[1].questions_stem,
                "questions_answer": list.data[1].questions_answer
            },
            {
                "title": list.data[2].title,
                "text": list.data[2].questions_type_text,
                "subject_text": list.data[2].subject_text,
                "exam_name": list.data[2].exam_name,
                "user_name": list.data[2].user_name,
                "exam_id": list.data[2].exam_id,
                "questions_stem": list.data[2].questions_stem,
                "questions_answer": list.data[2].questions_answer
            },
            {
                "title": list.data[3].title,
                "text": list.data[3].questions_type_text,
                "subject_text": list.data[3].subject_text,
                "exam_name": list.data[3].exam_name,
                "user_name": list.data[3].user_name,
                "exam_id": list.data[3].exam_id,
                "questions_stem": list.data[3].questions_stem,
                "questions_answer": list.data[3].questions_answer
            },
            {
                "title": list.data[4].title,
                "text": list.data[4].questions_type_text,
                "subject_text": list.data[4].subject_text,
                "exam_name": list.data[4].exam_name,
                "user_name": list.data[4].user_name,
                "exam_id": list.data[4].exam_id,
                "questions_stem": list.data[4].questions_stem,
                "questions_answer": list.data[4].questions_answer
            },
            {
                "title": list.data[6].title,
                "text": list.data[6].questions_type_text,
                "subject_text": list.data[6].subject_text,
                "exam_name": list.data[6].exam_name,
                "user_name": list.data[6].user_name,
                "exam_id": list.data[6].exam_id,
                "questions_stem": list.data[6].questions_stem,
                "questions_answer": list.data[6].questions_answer
            }
        ]


        // let classList = [
        //     {
        //         "exam_name":examdata.data[0].exam_name
        //     },
        //     {
        //         "exam_name":examdata.data[1].exam_name
        //     },
        //     {
        //         "exam_name":examdata.data[2].exam_name
        //     },
        //     {
        //         "exam_name":examdata.data[3].exam_name
        //     },
        // ]

        // let questionList = [
        //     {
        //         "questions_type_text":questiondata.data[0].questions_type_text
        //     },
        //     {
        //         "questions_type_text":questiondata.data[1].questions_type_text
        //     },
        //     {
        //         "questions_type_text":questiondata.data[2].questions_type_text
        //     },
        //     {
        //         "questions_type_text":questiondata.data[3].questions_type_text
        //     },
        //     {
        //         "questions_type_text":questiondata.data[4].questions_type_text
        //     },
        // ]
        this.setState({
            data: data,
            // ClassData:classList,
            // questionData:questionList
        })

        console.log(this.state)
    }

    componentDidMount() {
        this.getReaderList();
    }


    public render() {
        return (
            <div>
                <div style={{ paddingLeft: '50px' }}>
                    <ul style={{ display: "flex", marginTop: '30px', flexWrap: 'wrap' }}>
                        <li style={{ lineHeight: '40px' }}>课程类型：</li>
                        <li style={{ lineHeight: '40px' }}>all</li>
                        {
                            this.state.data.map((item: any, index: any) => {
                                return <li style={{ marginLeft: '50px', lineHeight: '40px' }} key={index}>{item.subject_text}</li>
                            })
                        }
                    </ul>
                    <div style={{ display: 'flex',width:'900px',justifyContent:'space-between' }}>
                        考试类型：
                        <Select style={{ width: '200px',color: '#ccc',marginLeft:'30px'}}>
                            {/* {
                                TypeData.map((item: any, index: any) => {
                                    return <Option key={index}>{item}</Option>
                                })
                            } */}
                        </Select>
                        <span style={{marginLeft:'20px'}}>题目类型：</span>
                        <Select style={{ width: '200px',color: '#ccc',marginLeft:'20px'}}>
                            {/* {
                                TypeData.map((item: any, index: any) => {
                                    return <Option key={index}>{item}</Option>
                                })
                            } */}
                        </Select>
                        <Button style={{ marginLeft: '100px', width: '150px' }} type="primary" icon="search">查询</Button>
                    </div>
                </div>

                <div style={{ marginTop: '50px' }}>
                    {
                        this.state.data.map((item: any, index: any) => {
                            return <div key={index} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '110px', borderBottom: '1px solid #ccc' }}>
                                <div style={{ marginTop: '20px' }}>
                                    <p>{item.title}</p>
                                    <div>
                                        <Tag color="blue">{item.text}</Tag>
                                        <Tag color="geekblue">{item.subject_text}</Tag>
                                        <Tag color="orange">{item.exam_name}</Tag>
                                    </div>
                                    <b style={{ color: '#0139FD', lineHeight: '30px', fontWeight: 'normal' }}>{item.user_name}发布</b>
                                </div>
                                <a style={{ lineHeight: '110px' }}>编辑</a>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Reader;