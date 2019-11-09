import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem, View, Footer, FooterTab
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListGenero(props) {
    const [generos, setGeneros] = useState([]);

    async function carregarGeneros() {
        try {
            const response = await api.get('/generos');
            setGeneros(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de generos');
        }
    }

    useEffect(() => {
        carregarGeneros()
    }, [generos])

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
                    <Title>Cadastro de Generos</Title>
                </Body>
            </Header>
            <Content>
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList data={generos}
                        keyExtractor={genero => `${genero.id}`}
                        renderItem={({ item }) => (
                            <Container style={{ height: 'auto' }}>
                                <Content>
                                    <Card>
                                        <CardItem header bordered>
                                            <Text >{item.descricao}</Text>
                                        </CardItem>
                                        <CardItem footer>
                                            <Button danger onPress={async () => {
                                                const id = item.id;
                                                await api.delete(`/generos/${id}`);
                                            }} >
                                                <Text>Excluir</Text>
                                            </Button>
                                        </CardItem>
                                    </Card>
                                </Content>
                            </Container>
                        )} />
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