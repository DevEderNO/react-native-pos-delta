import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
import FormEmprestimo from './pages/FormEmprestimo';
import ListEmprestimo from './pages/ListEmprestimo';

const Routes = createAppContainer(
    createDrawerNavigator({
        FormGenero: {
            screen: FormGenero,
            navigationOptions:{
                drawerLabel: 'Cadastro de Genero',
                drawerIcon: () =>(
                    <Icon name="grunt" style={styles.icon}></Icon>
                )
            }
        },
        ListGenero: {
            screen: ListGenero,
            navigationOptions:{
                drawerLabel: 'Lista de Genero',
                drawerIcon: () =>(
                    <Icon name="list-ul" style={styles.icon}></Icon>
                )
            }
            
        },
        FormLivro: {
            screen: FormLivro,
            navigationOptions:{
                drawerLabel: 'Cadastro de Livro',
                drawerIcon: () =>(
                    <Icon name="book" style={styles.icon}></Icon>
                )
            }
        },
        ListLivro:{
            screen: ListLivro,
            navigationOptions:{
                drawerLabel: 'Lista de Livros',
                drawerIcon: () =>(
                    <Icon name="list-ul" style={styles.icon}></Icon>
                )
            }
        },
        FormAutor: {
            screen: FormAutor,
            navigationOptions:{
                drawerLabel: 'Cadastro de Autor',
                drawerIcon: () =>(
                    <Icon name="user-tie" style={styles.icon}></Icon>
                )
            }
        },
        ListAutor:{
            screen: ListAutor,
            navigationOptions:{
                drawerLabel: 'Lista de Autor',
                drawerIcon: () =>(
                    <Icon name="list-ul" style={styles.icon}></Icon>
                )
            }
        },
        FormEditora: {
            screen: FormEditora,
            navigationOptions:{
                drawerLabel: 'Cadastro de Editora',
                drawerIcon: () =>(
                    <Icon name="leanpub" style={styles.icon}></Icon>
                )
            }
        },
        ListEditora:{
            screen: ListEditora,
            navigationOptions:{
                drawerLabel: 'Lista de Editora',
                drawerIcon: () =>(
                    <Icon name="list-ul" style={styles.icon}></Icon>
                )
            }
        },
        FormCliente: {
            screen: FormCliente,
            navigationOptions:{
                drawerLabel: 'Cadastro de Cliente',
                drawerIcon: () =>(
                    <Icon name="user" style={styles.icon}></Icon>
                )
            }
        },
        ListCliente:{
            screen: ListCliente,
            navigationOptions:{
                drawerLabel: 'Lista de Cliente',
                drawerIcon: () =>(
                    <Icon name="list-ul" style={styles.icon}></Icon>
                )
            }
        },
        CadastroEndereco: {
            screen: FormEndereco,
            navigationOptions:{
                drawerLabel: 'Cadastro de Endereço',
                drawerIcon: () =>(
                    <Icon name="map" style={styles.icon}></Icon>
                )
            }
        },
        ListEndereco: {
            screen: ListEndereco,
            navigationOptions:{
                drawerLabel: 'Lista de Endereço',
                drawerIcon: () =>(
                    <Icon name="list-ul" style={styles.icon}></Icon>
                )
            }
        },
        FormEmprestimo: {
            screen: FormEmprestimo,
            navigationOptions:{
                drawerLabel: 'Emprestimo',
                drawerIcon: () =>(
                    <Icon name="clock" style={styles.icon}></Icon>
                )
            }
        },
        ListEmprestimo: {
            screen: ListEmprestimo,
            navigationOptions:{
                drawerLabel: 'Lista de Emprestimo',
                drawerIcon: () =>(
                    <Icon name="list-ul" style={styles.icon}></Icon>
                )
            }
        },
    })
);

export default Routes;

const styles = StyleSheet.create({
    icon:{
        fontSize:20
    },
    iconGenero:{color:'brown'}
})