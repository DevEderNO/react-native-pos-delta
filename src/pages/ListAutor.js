import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem, View, Footer, FooterTab,
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import ActionButtonCustom from '../components/ActionButtonCustom';

import api from '../services/api';

export default function ListAutor(props) {
    const [autores, setAutores] = useState([]);

    async function carregarAutores() {
        try {
            const response = await api.get('/autores');
            setAutores(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de autores');
        }
    }

    useEffect(() => {
        carregarAutores()
    }, [])


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
                    <Title>Lista de Autores</Title>
                </Body>
            </Header>
            <Content>
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList data={autores}
                        keyExtractor={autor => `${autor.id}`}
                        renderItem={({ item }) => (
                            <Container style={{ height: 'auto' }}>
                                <Content>
                                    <Card>
                                        <CardItem header bordered>
                                            <Text >{item.nome}</Text>
                                        </CardItem>
                                        <CardItem footer>
                                            <Button danger onPress={async () => {
                                                Alert.alert(
                                                    'Excluir',
                                                    'Confimar a exclusão ?',
                                                    [
                                                        { text: 'Não', style: 'cancel' },
                                                        {
                                                            text: 'Sim', onPress: async () => {
                                                                const id = item.id;
                                                                await api.delete(`/autores/${id}`);
                                                            }
                                                        }
                                                    ]
                                                )
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
            <ActionButtonCustom props={props} title='Novo' route='FormAutor'/>
        </Container>
    );
}