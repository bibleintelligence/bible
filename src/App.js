import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BookOutlined,
  YoutubeOutlined,
  AmazonOutlined,
  FireOutlined,
  SearchOutlined,
  DollarOutlined,
  StarOutlined
} from '@ant-design/icons';
import BiblePage from './BiblePage';
import PrayerPage from './PrayerPage';
import VersefinderPage from './VersefinderPage';
import PastorPage from './PastorPage';
import BookPage from './BookPage';
import VideoPage from './VideoPage';
//import DonationPage from './DonationPage';
import RevelationPage from './RevelationPage';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<BookOutlined />}>
              <Link to="/bible">Bible</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FireOutlined />}>
              <Link to="/prayer">Prayer</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SearchOutlined />}>
              <Link to="/versefinder">Finder</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/pastor">Pastor</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<AmazonOutlined />}>
              <Link to="/books">Books</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<YoutubeOutlined />}>
              <Link to="/videos">Videos</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<StarOutlined />}>
              <Link to="/revelation">Revelation</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '2px 0' }}>
          <h1 style={{ margin: '0', textAlign: 'center' }}>Bible Intelligence</h1>
           </Header>
          
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Bible Intelligence</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Routes>
                <Route path="/bible" element={<BiblePage />} />
                <Route path="/prayer" element={<PrayerPage />} />
                <Route path="/versefinder" element={<VersefinderPage />} />
                <Route path="/pastor" element={<PastorPage />} />
                <Route path="/books" element={<BookPage />} />
                <Route path="/videos" element={<VideoPage />} />
                <Route path="/revelation" element={<RevelationPage />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Bible Intelligence ©2023 Created by MJ</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
