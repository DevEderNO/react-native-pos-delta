import React, {useState} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Alert, Picker} from 'react-native'
import api from '../services/api';
import DatePicker from 'react-native-datepicker'
import TextInputLabelCustumizado from '../components/TextInputLabelCustumizado'
import TouchableOpacityCustomizado from '../components/TouchableOpacityCustomizado'

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
                <TextInputLabelCustumizado
                    label="Nome: *"
                    placeholder="Nome do Livro"
                    value={nome}
                    onChangeText={setNome}/>
                <TextInputLabelCustumizado
                    label="Valor: *"
                    placeholder="Valor do Livro"
                    keyboardType={'numeric'}
                    value={nome}
                    onChangeText={setNome}/>
                <TextInputLabelCustumizado
                    label="Volume: *"
                    placeholder="Volume do Livro"
                    keyboardType={'numeric'}
                    value={volume}
                    onChangeText={setVolume}/>
                <Text style={styles.label}>Dt Publicacão: *</Text>
                <DatePicker
                    style={styles.data}
                    date={dataPublicacao}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
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