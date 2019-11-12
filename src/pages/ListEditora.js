import React, { useState, useEffect } from 'react'
import {Alert} from 'react-native'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem, View, Footer, FooterTab,
} from 'native-base';
import ActionButtonCustom from '../components/ActionButtonCustom';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListEditora(props) {
    const [editoras, setEditoras] = useState([]);
    async function carregarEditoras() {
        const response = await api.get('/editoras');
        setEditoras(response.data);
    }
    useEffect(()=>{
        carregarEditoras()
    },[])
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
                    <Title>Lista de Editoras</Title>
                </Body>
            </Header>
            <Content>
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList data={editoras}
                        keyExtractor={editora => `${editora.id}`}
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
                                                                await api.delete(`/editoras/${id}`);
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
            <ActionButtonCustom props={props} title='Novo' route='FormEditora'/>
        </Container>
    );
}