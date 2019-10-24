import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import generoCad from './pages/generoCad';
import GeneroList from './pages/generoList';
import LivroCad from './pages/livroCad';
import LivroList from './pages/livroList';

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
            
        }
    })
);

export default Routes;