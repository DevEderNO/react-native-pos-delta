import React, {useState} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import api from '../services/api';
import TextInputLabelCustom from '../components/TextInputLabelCustom';
import TouchableOpacityCustom from '../components/TouchableOpacityCustom'

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
                <TextInputLabelCustom
                    label="Genero: *"
                    placeholder="Informe o genero"
                    value={descricao}
                    onChangeText={setDescricao}/>
                <TouchableOpacityCustom
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
    }
});