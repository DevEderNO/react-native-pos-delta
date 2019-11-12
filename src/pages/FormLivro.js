import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert } from 'react-native'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Item, Label,
    Input, View, Form
} from 'native-base';
import api from '../services/api';
import moment from 'moment';
import DatePickerCustom from '../components/DatePickerCustom'
import PickerCustom from '../components/PickerCustom'

export default function FormLivro(props) {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [volume, setVolume] = useState('');
    const [idGenero, setIdGenero] = useState(-1);
    const [idAutor, setIdAutor] = useState(-1);
    const [idEditora, setIdEditora] = useState(-1);
    const [dataPublicacao, setDataPublicacao] = useState(moment(Date.now()));
    const [generos, setGenero] = useState([]);
    const [autores, setAutores] = useState([]);
    const [editoras, setEditoras] = useState([]);

    async function carregarGeneros() {
        try {
            const response = await api.get('/generos');
            setGenero(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de generos');
        }
    }

    async function carregarAutores() {
        try {
            const response = await api.get('/autores');
            setAutores(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de generos');
        }
    }
    async function carregarEditora() {
        try {
            const response = await api.get('/editoras');
            setEditoras(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de editoras');
        }
    }

    useEffect(() => {
        carregarGeneros()
        carregarAutores()
        carregarEditora()
    }, []);

    async function handleSubmit() {
        try {
            console.log(dataPublicacao);
            const response = await api.post('/livros',
                {
                    nome,
                    valor,
                    genero: { id: idGenero },
                    autor: { id: idAutor },
                    editora: { id: idEditora },
                    volume,
                    dataPublicacao: moment(dataPublicacao, 'DD/MM/YYYY').format('YYYY-MM-DD')
                })

            Alert.alert('Livro salvo com sucesso!');
            setNome('');
            setValor('');
            setVolume('');
            setIdGenero(-1);
            setIdAutor(-1);
            setIdEditora(-1);
            setDataPublicacao(moment(Date.now()))
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao realizar a operação!');
        }
    }
    return (
        <Container>
            <View style={{ backgroundColor: '#1A237E', height: 23 }}></View>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={() => props.navigation.openDrawer()} />
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Livro</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.container}>
                    <Form>
                        <Item stackedLabel >
                            <Label>Nome do livro</Label>
                            <Input value={nome} onChangeText={setNome} />
                        </Item>
                        <Item stackedLabel >
                            <Label>Valor do livro</Label>
                            <Input value={valor} onChangeText={setValor} keyboardType={'numeric'} />
                        </Item>
                        <Item stackedLabel >
                            <Label>Volume do livro</Label>
                            <Input value={volume} onChangeText={setVolume} keyboardType={'numeric'} />
                        </Item>
                        <Item stackedLabel >
                            <Label>Genero</Label>
                            <Item picker>
                                <PickerCustom
                                    list={generos}
                                    placeholder="Selecione o genero..."
                                    selectedValue={idGenero}
                                    onValueChange={(id) => setIdGenero(id)} />
                            </Item>
                        </Item>
                        <Item stackedLabel>
                            <Label>Autor</Label>
                            <Item picker>
                                <PickerCustom
                                    list={autores}
                                    placeholder="Selecione o autor..."
                                    selectedValue={idAutor}
                                    onValueChange={(id) => setIdAutor(id)} />
                            </Item>
                        </Item>
                        <Item stackedLabel>
                            <Label>Editora</Label>
                            <Item picker>
                                <PickerCustom
                                    list={editoras}
                                    placeholder="Selecione a editora..."
                                    selectedValue={idEditora}
                                    onValueChange={(id) => setIdEditora(id)} />
                            </Item>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Data de publicação</Label>
                            <Item picker>
                                <DatePickerCustom
                                    placeHolderText="Selecione a data..."
                                    date={dataPublicacao}
                                    onDateChange={(dataPublicacao) => setDataPublicacao(dataPublicacao)}
                                />
                            </Item>
                        </Item>

                    </Form>
                    <Button block onPress={handleSubmit} ><Text> Cadastrar </Text></Button>
                </View>
            </Content>
        </Container>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    item: {
        marginVertical: 5
    }
});