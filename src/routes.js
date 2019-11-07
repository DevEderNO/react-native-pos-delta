import React from 'react';
import { Icon } from 'native-base';

import {createAppContainer, DrawerItems} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FormGenero from './pages/FormGenero';
import FormAutor from './pages/FormAutor';
import ListGenero from './pages/ListGenero';
import FormLivro from './pages/FormLivro';
import FormEndereco from './pages/FormEndereco';
import ListAutor from './pages/ListAutor';
import FormEditora from './pages/FormEditora'
import ListEditora from './pages/ListEditora'

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
        CadastroEndereco: {
            screen: FormEndereco,
            navigationOptions:{
                drawerLabel: 'Cadastro de Endereço',
                drawerIcon: () =>(
                    <Icon name="map"></Icon>
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
                drawerLabel: 'Lista de Autores',
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
                drawerLabel: 'Lista de Editoras',
                drawerIcon: () =>(
                    <Icon name="list"></Icon>
                )
            }
        }
    })
);

export default Routes;