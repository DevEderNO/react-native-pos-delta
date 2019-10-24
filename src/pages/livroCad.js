import React, {useState} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Alert, Picker} from 'react-native'
import { Platform } from '@unimodules/core'
import { TextInput, TouchableOpacity} from 'react-native-gesture-handler'
import api from '../services/api';
import DatePicker from 'react-native-datepicker'

export default function LivroCad() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [generos, setGenero] = useState([]);
    const [idGenero, setIdGenero] = useState('');
    const [volume, setVolume] = useState('');
    const [dataPublicacao, setDataPublicacao] = useState(Date());

    async function carregarGeneros(){
        const response = await api.get('/generos');
        setGenero(response.data);
    }

    carregarGeneros();

    async function handleSubmit() {
        try {
            const response = await api.post('/livros', 
            {
                nome,
                valor,
                genero:{idGenero},
                volume,
                dataPublicacao
            });
    
            Alert.alert('Livro salvo com sucesso!');
            setNome('');
            setValor('');
            setVolume('');
            setIdGenero('');
            setDataPublicacao(new Date())
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
            <Text style={styles.titulo}>Cadastro de Livro</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Nome: *</Text>
                <TextInput style={styles.input}
                    placeholder="Nome do Livro"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome} />
                <Text style={styles.label}>Valor: *</Text>
                <TextInput style={styles.input}
                    placeholder="Valor do Livro"
                    placeholderTextColor="#999"
                    keyboardType={'numeric'}
                    value={valor}
                    onChangeText={setValor} />
                <Text style={styles.label}>Volume: *</Text>
                <TextInput style={styles.input}
                    placeholder="Volume do Livro"
                    placeholderTextColor="#999"
                    keyboardType={'numeric'}
                    value={volume}
                    onChangeText={setVolume} />
                <Text style={styles.label}>Dt Publicacão: *</Text>
                <DatePicker
                    style={styles.data}
                    date={dataPublicacao}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2100-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        }// ... You can check the source to find the other keys.
                    }}
                    onDateChange={setDataPublicacao}
                />
                <Text style={styles.label}>Genero: *</Text>
                <Picker selectedValue={idGenero}
                    onValueChange={setIdGenero}>
                    {
                        generos.map((genero) =>{
                            return <Picker.Item key={genero.id} 
                                label={genero.descricao}
                                value={genero.id} />
                        })
                    }
                </Picker> 
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
        fontSize: 20,
        paddingBottom: 5
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginBottom: 20,
        borderRadius: 2
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
    },
    data: {
        width: '100%'
    }
});