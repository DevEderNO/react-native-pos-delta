import React, { useState } from 'react'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'

export default function GeneroCad(props) {
    this.state = {
        showToast:false
    }
    const [descricao, setDescricao] = useState('');
    async function handleSubmit(event) {
        try {
            console.log(descricao);
            const response = await api.post('/generos',
                {
                    descricao
                });
            Alert.alert('Genero cadastrado com sucesso!')
            setDescricao('');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao cadastrar o genero!')
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
                    <Title>Cadastro de Genero</Title>
                </Body>
            </Header>
            <Content>
                <Container style={styles.container}>
                    <Item floatingLabel last style={{marginBottom:20}}>
                        <Label>Genero</Label>
                        <Input value={descricao} onChangeText={setDescricao} />
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