import React, { useState } from 'react'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input, View
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'

export default function FormGenero(props) {
    const [descricao, setDescricao] = useState('');
    async function handleSubmit() {
        try {
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
            <View style={{ backgroundColor: '#1A237E', height: 23 }}></View>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={() =>props.navigation.openDrawer()} />
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Genero</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.container}>
                    <Item stackedLabel  style={{ marginBottom: 10 }}>
                        <Label>Genero</Label>
                        <Input value={descricao} onChangeText={setDescricao} />
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
        </Container>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10
    }
})