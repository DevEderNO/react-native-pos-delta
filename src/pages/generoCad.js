import React, {useState} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import api from '../services/api';
import TextInputLabelCustumizado from '../components/TextInputLabelCustumizado';
import TouchableOpacityCustomizado from '../components/TouchableOpacityCustomizado'

export default function GeneroCad() {
    const [descricao, setDescricao] = useState('');
    async function handleSubmit() {
        try {
            const response = await api.post('/generos', 
            {
                descricao
            });
    
            Alert.alert('Genero salvo com sucesso!');
            setDescricao('');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao realizar a operação!');
        }
    }
    return(
        <KeyboardAvoidingView 
            enabled 
            behavior="padding"
            style={styles.container} >
            <Text style={styles.titulo}>Cadastro de Genero</Text>
            <View style={styles.form}>
                <TextInputLabelCustumizado
                    label="Genero: *"
                    placeholder="Informe o genero"
                    value={descricao}
                    onChangeText={setDescricao}/>
                <TouchableOpacityCustomizado
                    label="Salvar"
                    onPress={handleSubmit}/>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    titulo : {
        fontSize: 20,
        paddingBottom: 5
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    botao: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    botaoTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});