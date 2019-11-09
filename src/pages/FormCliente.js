import React, { useState, useEffect } from 'react'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input, View
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'
import PickerCustomEndereco from '../components/PickerCustomEndereco';

export default function FormCliente(props) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idEndereco, setIdEndereco] = useState('');
    const [enderecos, setEnderecos] = useState([]);

    async function carregarEnderecos() {
        try {
            const response = await api.get('/enderecos');
            setEnderecos(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de enderecos');
        }
    }

    useEffect(() => {
        carregarEnderecos();
    }, [enderecos])

    async function handleSubmit() {
        try {
            console.log(idEndereco);
            const response = await api.post('/clientes',
                {
                    nome,
                    cpf,
                    email,
                    telefone,
                    endereco: { "id": idEndereco }
                }
            );
            Alert.alert('Cliente cadastrado com sucesso!')
            setNome('')
            setCpf('')
            setEmail('')
            setTelefone('')
            setIdEndereco(-1)
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao cadastrar o autor!')
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
                    <Title>Cadastro de Cliente</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.container}>
                    <Item stackedLabel>
                        <Label>Nome</Label>
                        <Input value={nome} onChangeText={setNome} />
                    </Item>
                    <Item stackedLabel>
                        <Label>CPF</Label>
                        <Input value={cpf} onChangeText={setCpf} />
                    </Item>
                    <Item stackedLabel>
                        <Label>E-mail</Label>
                        <Input value={email} onChangeText={setEmail} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Telefone</Label>
                        <Input value={telefone} onChangeText={setTelefone} />
                    </Item>
                    <Item stackedLabel style={{marginBottom:10}}>
                        <Label>Endereço</Label>
                        <Item>
                            <PickerCustomEndereco
                                list={enderecos}
                                placeHolder="Selecione o endereco..."
                                selectedValue={idEndereco}
                                onValueChange={setIdEndereco} />
                        </Item>
                    </Item>
                    <Button block onPress={handleSubmit} ><Text> Cadastrar </Text></Button>
                </View>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container >
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    }
})