import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Input, Select, Button,Modal } from 'antd';
const { Option } = Select;
const { confirm } = Modal;
import './index.css';


import Editor from 'for-editor'

interface Props {
    reader: any
}



@inject('reader')
@observer


class Add extends React.Component<Props> {

    constructor(props: any) {
        super(props);
        this.getAddexamdata();
    }

    
    //初始化值
    state = {
        value:'',
        values:"",
        ClassValue:'',
        TypeValue:"",
        examValue:"",
        text:"",
        TypeData:[],
        questionData:[],
        ClassData:[],
        msg:''
    }

    //获取select数据
    getAddexamdata = async () => {

        const classdata= await this.props.reader.getAddexam();
        const list= await this.props.reader.getTypeExam();
        const questiondata = await this.props.reader.getQuestionsType();
        
        let data = [
            {
                "exam_name":list.data[0].exam_name
            },
            {
                "exam_name":list.data[1].exam_name
            },
            {
                "exam_name":list.data[2].exam_name
            },
            {
                "exam_name":list.data[3].exam_name
            },
        ]

        let classList = [
            {
                "subject_text":classdata.data[0].subject_text
            },
            {
                "subject_text":classdata.data[1].subject_text
            },
            {
                "subject_text":classdata.data[2].subject_text
            },
            {
                "subject_text":classdata.data[3].subject_text
            },
            {
                "subject_text":classdata.data[4].subject_text
            },
            {
                "subject_text":classdata.data[5].subject_text
            },
            {
                "subject_text":classdata.data[6].subject_text
            },
            {
                "subject_text":classdata.data[7].subject_text
            },
            {
                "subject_text":classdata.data[8].subject_text
            },
            {
                "subject_text":classdata.data[9].subject_text
            }
        ]

        let questionList = [
            {
                "questions_type_text":questiondata.data[0].questions_type_text
            },
            {
                "questions_type_text":questiondata.data[1].questions_type_text
            },
            {
                "questions_type_text":questiondata.data[2].questions_type_text
            },
            {
                "questions_type_text":questiondata.data[3].questions_type_text
            },
            {
                "questions_type_text":questiondata.data[4].questions_type_text
            },
        ]



       this.setState({
        TypeData:data,
        ClassData:classList,
        questionData:questionList
       })

    }
    
    //获取输入的题目主题
    handleChange=(value: any) =>{
        this.setState({
            value:value
        })
    }

     //获取输入的题目主题
     handleChanges=(values: any) =>{
        this.setState({
            values:values
        })
    }

    //获取题目标题
    getValue = (e: any) => {
        this.setState({
            text: e.target.value
        })
    }

    //获取考试类型
    typeChange = (value: any) => {
        this.setState({
            TypeValue: value
        })
    }

    //获取考试类型
    examChange = (value: any) => {
        this.setState({
            examValue: value
        })
    }

    //获取考试类型
    ClassChange = (value: any) => {
        this.setState({
            ClassValue:value
        })
    }

    //关闭弹框
    closeConfirm(){
        Modal.destroyAll();
    }

    //提交
    showConfirm=()=> {
        const { value,ClassValue,examValue,TypeValue,text,values} = this.state;

        const reg=new RegExp(/[\u4e00-\u9fa5]{4,20}/);
        if(text===''){
           this.setState({
               msg:'题目标题不能为空'
           })
        }else if(!reg.test(text)){
            this.setState({
                msg:'请输入正确的题目标题，应该是4-20位汉字'
            })
        }else{
            this.setState({
                msg:''
            })
        }
        confirm({
            title: '你确定要添加这道试题吗?',
            content: <div style={{textAlign:'center'}}>
               <p style={{lineHeight:'40px'}}>真的要添加吗？</p>
               <Button style={{ 
                    width: 80,
                    height: 40
                }} onClick={this.closeConfirm}>取消</Button>
               <Button style={{
                background: 'linear-gradient(-90deg,#4e75ff,#0139fd)',
                backgroundImage: 'linear-gradient(-90deg, rgb(78, 117, 255), rgb(1, 57, 253))',
                width: 120,
                height: 40,
                color: '#fff',
                marginLeft:'10px'
                }} onClick={this.closeConfirm}>确定</Button>
            </div>,
            okText: '是',
            cancelText:'否'
        });
      }

    public render() {
        const { value,values,TypeData,ClassData,questionData,msg} = this.state;
        return (
            <div>
                <h1 style={{ fontSize: '18px' }}>题目信息</h1>
                <p style={{ lineHeight: "30px" }}>题干</p>
                <Input style={{ width: '500px' }} placeholder='请输入题目标题，不超过20个字' onChange={this.getValue} />
                <p style={{color:'red'}}>{msg}</p>
                <p style={{ lineHeight: "30px", marginTop: '20px' }}>题目主题</p>
                <Editor style={{ height: '300px' }} value={value} onChange={this.handleChange} />
                <p style={{ lineHeight: "30px", marginTop: '20px' }}>请选择考试类型：</p>
                <Select style={{ width: '200px' }} onChange={this.typeChange} defaultValue='周考一'>
                   {
                        TypeData.map((item: any, index: any) => {
                            return <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
                        })
                    }
                </Select>
                <p style={{ lineHeight: "30px", marginTop: '20px' }}>请选择课程类型：</p>
                <Select style={{ width: '200px' }} onChange={this.examChange} defaultValue='javascript上'>
                    {
                        ClassData.map((item: any, index: any) => {
                            return <Option value={item.subject_text} key={index}>{item.subject_text}</Option>
                        })
                    }
                </Select>
                <p style={{ lineHeight: "30px", marginTop: '20px' }}>请选择题目类型：</p>
                <Select style={{ width: '200px' }} onChange={this.ClassChange} defaultValue='简答题'>
                    {
                        questionData.map((item: any, index: any) => {
                            return <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
                        })
                    }
                </Select>
                <p style={{ lineHeight: "30px", marginTop: '20px', fontSize: "16px" }}>答案信息</p>
                <Editor style={{ height: '300px' }} value={values} onChange={this.handleChanges} />
                <Button style={{
                    background: 'linear-gradient(-90deg,#4e75ff,#0139fd)',
                    backgroundImage: 'linear-gradient(-90deg, rgb(78, 117, 255), rgb(1, 57, 253))',
                    width: 120,
                    height: 40,
                    color: '#fff',
                    marginTop: '10px'
                }}  onClick={this.showConfirm}>提交</Button>
            </div>

        )
    }
}

export default Add;