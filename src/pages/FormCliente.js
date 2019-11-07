import React, { useState } from 'react'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input, View
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'
import PickerCustom from '../components/PickerCustom';

export default function FormCliente() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idEndereco, setIdEndereco] = useState(0);
    const [enderecos, setEnderecos] = useState([]);

    async function handleSubmit() {
        try {

            const response = await api.post('/clientes',
                {
                    nome,
                    cpf,
                    email,
                    telefone,
                    endereco:{"id":idEndereco}
                }
            );
            Alert.alert('Cliente cadastrado com sucesso!')
            setNome('')
            setCpf('')
            setEmail('')
            setTelefone('')
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao cadastrar o autor!')
        }
    }
    return (
        <Container>
            <View style={{backgroundColor:'#1A237E',height:23}}></View>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Cliente</Title>
                </Body>
            </Header>
            <Content>
                <Container style={styles.container}>
                    <Item floatingLabel last style={{ marginBottom: 20 }}>
                        <Label>Nome</Label>
                        <Input value={nome} onChangeText={setNome} />
                    </Item>
                    <Item floatingLabel last style={{ marginBottom: 20 }}>
                        <Label>CPF</Label>
                        <Input value={cpf} onChangeText={setCpf} />
                    </Item>
                    <Item floatingLabel last style={{ marginBottom: 20 }}>
                        <Label>E-mail</Label>
                        <Input value={email} onChangeText={setEmail} />
                    </Item>
                    <Item floatingLabel last style={{ marginBottom: 20 }}>
                        <Label>Telefone</Label>
                        <Input value={telefone} onChangeText={setTelefone} />
                    </Item>
                    <Item>
                        <PickerCustom
                            list={enderecos}
                            placeholder="Selecione o endereco..."
                            selectedValue={idEndereco}
                            onValueChange={setIdEndereco} />
                    </Item>
                    <Button block onPress={handleSubmit} ><Text> Cadastrar </Text></Button>
                </Container>
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