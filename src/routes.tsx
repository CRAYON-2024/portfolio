import { Fragment } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ConfigProvider, Layout, Menu } from 'antd';
import { Footer } from './components/elements';
import Sider from 'antd/es/layout/Sider';
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined } from '@ant-design/icons';


const PRESERVED: {
  [key: string]: { default: React.ComponentType };
} = import.meta.glob('/src/pages/(_app|_404).tsx', {
  eager: true
});
const ROUTES: {
  [key: string]: { default: React.ComponentType };
} = import.meta.glob('/src/pages/**/[a-z[]*.tsx', {
  eager: true
});

const preserved: {
  _app?: React.ComponentType;
  _404?: React.ComponentType;
} = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, '');
  return { ...preserved, [key]: PRESERVED[file].default };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, component: ROUTES[route].default };
});


function App() {
  const App = preserved?.['_app'] || Fragment;
  const NotFound = preserved?.['_404'] || Fragment;
  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Poppins'
        }
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className='flex flex-col justify-center items-center py-8 px-4 fixed'>
            <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => navigate('/')}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />} onClick={() => navigate('/about')}>
              About
            </Menu.Item>
            <Menu.Item key="3" icon={<ProjectOutlined />} onClick={() => navigate('/works')}>
              Work
            </Menu.Item>
          </Menu>
        </Sider>

        <main className = "flex flex-col">
          <App>
            <Routes>
              {routes.map(({ path, component: Component = Fragment }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </App>
          <Footer />
        </main>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
