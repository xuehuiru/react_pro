import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import './index.css';
import { Route } from 'react-router-dom';
import Type from '../../component/shiti/type';
import Add from '../../component/shiti/add';
import Reader from '../../component/shiti/reader'
import Class from '../../component/class/class';
import Gard from '../../component/class/gard';
import Adduser from '../../component/user/addUser';
import Show from '../../component/user/show';
import Addexam from '../../component/exam/addexam';
import examList from '../../component/exam/examlist';
import Start from '../../component/exam/start';
import ClassStart from '../../component/exam/classStart';
import Nav from './header/index';

@inject()
@observer
class MainPage extends React.Component {
    state = {
        collapsed: false,
        title: '添加试题'
    };

    onCollapse = (collapsed: any) => {
        // console.log(collapsed);
        this.setState({ collapsed });
    };
    constructor(props: any) {
        super(props);
    }

    getValue = (item: any) => {
        this.setState({
            title: item.target.innerHTML
        })
    }

    public render() {
        return (
            <Layout>
                <Header className="header"><Nav /></Header>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>试题管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to='/main/add' onClick={this.getValue}>添加试题</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/main/type' onClick={this.getValue}>试题分类</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/main/reader' onClick={this.getValue}>查看试题</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="team" />
                                        <span>用户管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="4"><Link to='/main/adduser' onClick={this.getValue}>添加用户</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/main/show' onClick={this.getValue}>用户展示</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>考试管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6"><Link to='/main/addexam' onClick={this.getValue}>添加考试</Link></Menu.Item>
                                <Menu.Item key="7"><Link to='/main/examlist' onClick={this.getValue}>试题列表</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="team" />
                                        <span>班级管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="8"><Link to='/main/gard' onClick={this.getValue}>班级管理</Link></Menu.Item>
                                <Menu.Item key="9"><Link to='/main/class' onClick={this.getValue} >教室管理</Link></Menu.Item>
                                <Menu.Item key="10"><Link to='/main/start' onClick={this.getValue}>学生管理</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>阅卷管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="11"><Link to='/main/classStart'>待批班级</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <h2 style={{ width: "100%", height: "80px", textIndent: '30px', lineHeight: '80px', background: '#eee' }}>{this.state.title}</h2>
                        <Content style={{ margin: '0 16px', borderRadius: '100px', background: '#eee' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route path='/main/type' component={Type}></Route>
                                <Route path='/main/add' component={Add}></Route>
                                <Route path='/main/reader' component={Reader}></Route>
                                <Route path='/main/Gard' component={Gard}></Route>
                                <Route path='/main/class' component={Class}></Route>
                                <Route path='/main/adduser' component={Adduser}></Route>
                                <Route path='/main/show' component={Show}></Route>
                                <Route path='/main/addexam' component={Addexam}></Route>
                                <Route path='/main/examlist' component={examList}></Route>
                                <Route path='/main/start' component={Start}></Route>
                                <Route path='/main/classStart' component={ClassStart}></Route>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default MainPage;