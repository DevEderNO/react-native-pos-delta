import {createAppContainer, DrawerItems} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import generoCad from './pages/generoCad';
import GeneroList from './pages/generoList';
import LivroCad from './pages/livroCad';
import LivroList from './pages/livroList';
import EnderecoCad from './pages/enderecoCad';

import Ionicons from 'react-native-vector-icons'

import { Text, Image } from 'react-native';
import { Container,Content,Header,Left,Body,Icon } from 'native-base'

const MyNavigator = createDrawerNavigator({
    Home: HomeComponent,
    Profile: ProfileComponent
})

const Routes = createAppContainer(
    createDrawerNavigator({
        CadastroGenero: {
            screen: generoCad,
            navigationOptions:{
                drawerLabel: 'Cadastro de Genero'
            }
        },
        ListaGenero: {
            screen: GeneroList,
            navigationOptions:{
                drawerLabel: 'Lista de Genero'
            }
            
        },
        CadastroLivro: {
            screen: LivroCad,
            navigationOptions:{
                drawerLabel: 'Cadastro de Livro'
            }
        },
        ListaLivro: {
            screen: LivroList,
            navigationOptions:{
                drawerLabel: 'Lista de Livro'
            }
        },
        CadastroEndereco: {
            screen: EnderecoCad,
            navigationOptions:{
                drawerLabel: 'Cadastro de Endereço'
            }
        }
    })
);

export default Routes;