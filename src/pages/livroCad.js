import React, {useState} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Alert, Picker} from 'react-native'
import api from '../services/api';
import TextInputLabelCustom from '../components/TextInputLabelCustom'
import TouchableOpacityCustom from '../components/TouchableOpacityCustom'
import DatePickerCustom from '../components/DatePickerCustom'

export default function LivroCad() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [generos, setGenero] = useState([]);
    const [idGenero, setIdGenero] = useState('');
    const [volume, setVolume] = useState('');
    const [dataPublicacao, setDataPublicacao] = useState(new Date());

    async function carregarGeneros(){
        try {
            const response = await api.get('/generos');
            setGenero(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de generos');
        }
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
            enabled 
            behavior="padding"
            style={styles.container} >
            <Text style={styles.titulo}>Cadastro de Livro</Text>
            <View style={styles.form}>
                <TextInputLabelCustom
                    label="Nome: *"
                    placeholder="Nome do Livro"
                    value={nome}
                    onChangeText={setNome}/>
                <TextInputLabelCustom
                    label="Valor: *"
                    placeholder="Valor do Livro"
                    keyboardType={'numeric'}
                    value={nome}
                    onChangeText={setNome}/>
                <TextInputLabelCustom
                    label="Volume: *"
                    placeholder="Volume do Livro"
                    keyboardType={'numeric'}
                    value={volume}
                    onChangeText={setVolume}/>
                <DatePickerCustom
                    label="Data de publicação: *"
                    date={dataPublicacao}
                    onDateChange={setDataPublicacao}/>
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