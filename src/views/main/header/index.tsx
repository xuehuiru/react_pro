import * as React from 'react'
import { Menu, Dropdown, Button } from 'antd';
import './index.css';
const imgurl="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          个人中心
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          我的班级
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          设置
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );
class Nav extends React.Component {
    render() {
        return (
            <nav>
                <img src={imgurl} alt=""/>
                <p className="navp">
                    <span>

                    </span>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>chenmanjie</Button>
                    </Dropdown>
                </p>
            </nav>
        )
    }
}
export default Nav;