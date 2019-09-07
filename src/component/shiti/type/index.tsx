import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './index.css';
import { Table, Button, Input, Modal } from 'antd';

// const modal = Modal.info();

interface Props {
  type: any
}



@inject('type')
@observer


class Type extends React.Component<Props> {

  constructor(props: any) {
    super(props);
    this.getListData();
  }

  state = {
    datas: [],
    visible: false
  }

  getListData = async () => {

    const list = await this.props.type.getType();

    const data = [
      {
        key: list.data[0].questions_type_sort,
        id: list.data[0].questions_type_id,
        name: list.data[0].questions_type_text,
        address: '',
      },
      {
        key: list.data[1].questions_type_sort,
        id: list.data[1].questions_type_id,
        name: list.data[1].questions_type_text,
        address: '',
      },
      {
        key: list.data[2].questions_type_sort,
        id: list.data[2].questions_type_id,
        name: list.data[2].questions_type_text,
        address: '',
      },
      {
        key: list.data[3].questions_type_sort,
        id: list.data[3].questions_type_id,
        name: list.data[3].questions_type_text,
        address: '',
      },
      {
        key: list.data[4].questions_type_sort,
        id: list.data[4].questions_type_id,
        name: list.data[4].questions_type_text,
        address: '',
      }
    ];

    this.setState({
      datas: data,
    })
  }

  //确定按钮
  showModal = () => {
    this.setState({
      visible: true,
    });
  };


  //取消按钮
  hideModal = () => {
    this.setState({
      visible: false,
    });
    this.getListData();
  };

  public render() {

    const columns = [
      {
        title: '类型ID',
        dataIndex: 'id',
      },
      {
        title: '类型名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        dataIndex: 'address',
      },
    ];

    // modal.destroy();
    return (
      <div>
        <Button style={{ width: '158px', height: '38px', marginBottom: '20px' }} type="primary" onClick={this.showModal}>+添加类型</Button>
        <div className='modal'>
            <Modal style={{ 
              textAlign: 'center',
              width:'600px',
              height:'300px'}}
              title="创建新类型"
              visible={this.state.visible}
              onOk={this.hideModal}
              onCancel={this.hideModal}
            >
              <Input placeholder='请输入类型名称' style={{ border: 0, borderBottom: '1px solid #ccc', borderRadius: 0,width:'400px'}} />
              <br/>
              <Button style={{
                background: 'linear-gradient(-90deg,#4e75ff,#0139fd)',
                backgroundImage: 'linear-gradient(-90deg, rgb(78, 117, 255), rgb(1, 57, 253))',
                width: 120,
                height: 40,
                color: '#fff',
                marginTop: '30px',
              }} onClick={this.hideModal}>确定</Button>
              <Button style={{ 
                width: 80,
                height: 40,
                marginLeft:'10px'
              }} onClick={this.hideModal}>取消</Button>
            </Modal>
        </div> 
        <Table style={{ marginLeft: '20px' }} columns={columns} dataSource={this.state.datas} size="middle" />
      </div>
    )
  }
}

export default Type;