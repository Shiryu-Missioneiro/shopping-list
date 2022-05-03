import './styles.css';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useHistory, useLocation } from 'react-router-dom';
import { message, Input, Button, InputNumber } from 'antd';

export default function EditarProdutos(){

    const history = useHistory()
    const location = useLocation()
    const [ produtoEdit, setProdutoEdit ] = useState({})

    useEffect(() => {
        setProdutoEdit({...location.state})
    }, [location])

    async function handleSubmitEdit(produtoEdit){
        api.patch(`/item/${produtoEdit.id}`, produtoEdit)
        .then((response) => {
            if(response.status === 200){
                message.success("Produto editado com sucesso!", 5, true)
                history.push('/produtos')
            }
        })
        .catch((err) => {
            message.error("Algo de muito errado aconteceu! " + err.response.data.message[0], 5)
        })
    }

    return(
        <div className='produto_container'>
            <h1>Editar Produto</h1>
            <br/>
            <div className='produto_edit'>
                <div className='produto_campo'>
                    <span className='produto_label'>Nome do Produto: </span>
                    <Input value={produtoEdit?.name} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return{...produtoEdit, name: e.target.value};
                        });
                    }} />
                </div>

                <div className='produto_campo'>
                    <span className='produto_label'>Descrição do Produto: </span>
                    <Input value={produtoEdit?.description} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return{...produtoEdit, description: e.target.value};
                        });
                    }}/>
                </div>

                <div className='produto_campo'>
                    <span className='produto_label'>Quantidade do Produto: </span>
                    <InputNumber value={produtoEdit?.quantity} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return{...produtoEdit, quantity:e}
                        })
                    }}/>
                </div>

                <Button type='primary' className='editar_btn' 
                onClick={() => handleSubmitEdit(produtoEdit)}>Editar</Button>
            </div>
        </div>
    )
}