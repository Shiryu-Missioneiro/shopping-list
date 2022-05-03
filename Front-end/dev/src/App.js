import './App.css';
import { Menu, Layout } from 'antd';
import { PlusSquareOutlined, UnorderedListOutlined } from '@ant-design/icons';
import  Routes  from './routes';
import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  let history = useHistory();
  return (
    <div className="main">
      <Layout className='main_content'>
        <Header className='header'>Header</Header>
          <Layout>
            <Sider className='menu'>
              <Menu className='menu_section'>
                <Menu.Item key={1} icon={<PlusSquareOutlined/>} onClick={() => history.push('/adicionar')} >
                  Adicionar Produto
                </Menu.Item>
                <Menu.Item key={2} icon={<UnorderedListOutlined/>} onClick={() => history.push('/produtos') } >
                  Listar Produtos
                </Menu.Item>
              </Menu>
            </Sider>
              <Content>
                <Routes />
              </Content>
          </Layout>
          <Footer className='footer'>Todos os direitos reservados</Footer>
      </Layout>
    </div>
  );
}

export default App;
