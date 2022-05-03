import { useHistory } from 'react-router-dom';
import './styles.css'
import Logo from '../assets/logo.jpg'
import { Button } from 'antd';

export default function Início(){
    const history = useHistory()

    async function listarProdutos(){
        history.push('/produtos')
    }
    return(
        <div className='incicio_container'>
            <section>
                <img src={Logo} alt='logo' className='center' />
                <br/>
                <Button className='center' onClick={listarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
}