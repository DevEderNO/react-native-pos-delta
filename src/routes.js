import {createAppContainer, DrawerItems} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FormGenero from './pages/FormGenero';
import FormAutor from './pages/FormAutor';
import GeneroList from './pages/generoList';
import FormLivro from './pages/FormLivro';
import LivroList from './pages/livroList';
import FormEndereco from './pages/FormEndereco';

const Routes = createAppContainer(
    createDrawerNavigator({
        FormGenero: {
            screen: FormGenero,
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
        FormLivro: {
            screen: FormLivro,
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
            screen: FormEndereco,
            navigationOptions:{
                drawerLabel: 'Cadastro de Endereço'
            }
        },
        FormAutor: {
            screen: FormAutor,
            navigationOptions:{
                drawerLabel: 'Cadastro de Autor'
            }
        }
    })
);

export default Routes;