import React, {useState} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import { Platform } from '@unimodules/core'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import api from '../services/api';
import TextInputLabelCustumizado from '../components/TextInputLabelCustumizado';

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
            enabled={Platform.OS == 'ios'} 
            behavior="padding"
            style={styles.container} >
            <View style={styles.form}>
                <Text style={styles.titulo}>Cadastro de Genero</Text>
                <TextInputLabelCustumizado
                    label="Genero: *"
                    placeholder="Informe o genero"
                    placeholderTextColor="#999"
                    value={descricao}
                    onChangeText={setDescricao}/>
                    <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
                        <Text style={styles.botaoTexto}>Salvar</Text>
                    </TouchableOpacity>
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
        fontSize: 20
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