import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import api from '../services/api';
import { FlatList } from 'react-native-gesture-handler';
import TouchableOpacityCustom from '../components/TouchableOpacityCustom'

export default function LivroList() {
    const [livros, setLivros] = useState([]);
    async function carregarLivros() {
        const response = await api.get('/livros'); 
        setLivros(response.data);
    }
    carregarLivros();
    return(
        <View style={styles.container}>
           <Text style={styles.titulo}>Lista de Livro</Text>
           <FlatList data={livros} 
             style={styles.lista}
             keyExtractor={Livro => `${Livro.id}`}
             renderItem={({item}) => (
                 <View style={styles.container}>
                   <View style={styles.card}>
                     <Text style={styles.label} >Id: {item.id}</Text>
                     <Text style={styles.label}>Nome: {item.nome}</Text>
                     <Text style={styles.label}>Valor: {item.valor}</Text>
                     <Text style={styles.label}>Volume: {item.volume}</Text>
                     <Text style={styles.label}>Genero: {item.genero.descricao}</Text>
                     <Text style={styles.label}>Dt. Publicação: {item.dataPublicacao}</Text>
                     <TouchableOpacityCustom 
                        onPress = {async ()=>{ const id = item.id; await api.delete(`/livros/${id}`)}}
                        label="Excluir"
                     />
                   </View>
                 </View>
             ) }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#311b92',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    lista: {
        paddingHorizontal: 20
    },
    titulo: {
        fontSize: 18,
        marginTop: 30,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444'
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10
    }
});