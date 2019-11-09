import React from 'react';
import { Icon } from 'native-base';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FormGenero from './pages/FormGenero';
import FormAutor from './pages/FormAutor';
import FormLivro from './pages/FormLivro';
import FormEndereco from './pages/FormEndereco';
import FormEditora from './pages/FormEditora'
import FormCliente from './pages/FormCliente'
import ListGenero from './pages/ListGenero';
import ListLivro from './pages/ListLivro';
import ListAutor from './pages/ListAutor';
import ListEditora from './pages/ListEditora'
import ListCliente from './pages/ListCliente'
import ListEndereco from './pages/ListEndereco'

const Routes = createAppContainer(
    createDrawerNavigator({
        FormGenero: {
            screen: FormGenero,
            navigationOptions:{
                drawerLabel: 'Cadastro de Genero',
                drawerIcon: () =>(
                    <Icon name="transgender"></Icon>
                )
            }
        },
        ListGenero: {
            screen: ListGenero,
            navigationOptions:{
                drawerLabel: 'Lista de Genero',
                drawerIcon: () =>(
                    <Icon name="list"></Icon>
                )
            }
            
        },
        FormLivro: {
            screen: FormLivro,
            navigationOptions:{
                drawerLabel: 'Cadastro de Livro',
                drawerIcon: () =>(
                    <Icon name="book"></Icon>
                )
            }
        },
        ListLivro:{
            screen: ListLivro,
            navigationOptions:{
                drawerLabel: 'Lista de Livros',
                drawerIcon: () =>(
                    <Icon name="list"></Icon>
                )
            }
        },
        FormAutor: {
            screen: FormAutor,
            navigationOptions:{
                drawerLabel: 'Cadastro de Autor',
                drawerIcon: () =>(
                    <Icon name="person"></Icon>
                )
            }
        },
        ListAutor:{
            screen: ListAutor,
            navigationOptions:{
                drawerLabel: 'Lista de Autor',
                drawerIcon: () =>(
                    <Icon name="list"></Icon>
                )
            }
        },
        FormEditora: {
            screen: FormEditora,
            navigationOptions:{
                drawerLabel: 'Cadastro de Editora',
                drawerIcon: () =>(
                    <Icon name="home"></Icon>
                )
            }
        },
        ListEditora:{
            screen: ListEditora,
            navigationOptions:{
                drawerLabel: 'Lista de Editora',
                drawerIcon: () =>(
                    <Icon name="list"></Icon>
                )
            }
        },
        FormCliente: {
            screen: FormCliente,
            navigationOptions:{
                drawerLabel: 'Cadastro de Cliente',
                drawerIcon: () =>(
                    <Icon name="person"></Icon>
                )
            }
        },
        ListCliente:{
            screen: ListCliente,
            navigationOptions:{
                drawerLabel: 'Lista de Cliente',
                drawerIcon: () =>(
                    <Icon name="list"></Icon>
                )
            }
        },
        CadastroEndereco: {
            screen: FormEndereco,
            navigationOptions:{
                drawerLabel: 'Cadastro de Endereço',
                drawerIcon: () =>(
                    <Icon name="map"></Icon>
                )
            }
        },
        ListEndereco: {
            screen: ListEndereco,
            navigationOptions:{
                drawerLabel: 'Lista de Endereço',
                drawerIcon: () =>(
                    <Icon name="list"></Icon>
                )
            }
        },
    })
);

export default Routes;