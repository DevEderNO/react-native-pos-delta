import React, { useState } from 'react'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'

export default function FormAutor(props) {
    this.state = {
        showToast:false
    }
    const [nome, setNome] = useState('');
    async function handleSubmit(event) {
        try {
            console.log(nome);
            const response = await api.post('/autores',
                {
                    nome
                });
            Alert.alert('Autor cadastrado com sucesso!')
            setNome('');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao cadastrar o autor!')
        }
    }
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Autor</Title>
                </Body>
            </Header>
            <Content>
                <Container style={styles.container}>
                    <Item floatingLabel last style={{marginBottom:20}}>
                        <Label>Autor</Label>
                        <Input value={nome} onChangeText={setNome} />
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
        </Container>
    );
}
const styles = StyleSheet.create({
    container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
}})