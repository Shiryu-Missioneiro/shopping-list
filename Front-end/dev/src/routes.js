import React from "react";
import { Route, Switch } from "react-router-dom";
import Produtos from './pages/Produtos';
import Início from './pages/Início';
import AdicionarProduto from "./pages/Adicionar Produtos";
import DetalhesProduto from './pages/Detalhes Produtos';
import EditarProdutos from './pages/Editar Produtos';

export default function Routes(){
    return(
            <Switch>
                <Route path='/' exact component={Início}/>
                <Route path='/produtos' component={Produtos}/>
                <Route path='/adicionar' component={AdicionarProduto}/>
                <Route path='/detalhes/:id' component={DetalhesProduto}/>
                <Route path='/editar/:id' component={EditarProdutos}/>
            </Switch>
    )
}