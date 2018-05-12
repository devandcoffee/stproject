import * as React from 'react';
import { Layout } from 'antd';
import { Menu } from '../Menu';
import { Navbar } from '../Navbar';

const { Sider, Content } = Layout;

import './App.css';

class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed } = this.state;

    return (
      <Layout className="app-full-layout">
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu />
        </Sider>
        <Layout>
          <Navbar isSideBardCollapsed={collapsed} toggleSideBar={this.toggle} />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
