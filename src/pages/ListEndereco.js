import React, { useState, useEffect } from 'react'
import {Alert} from 'react-native'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem, View, Footer, FooterTab,
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListEndereco(props) {
    const [enderecos, setEnderecoes] = useState([]);
    async function carregarEnderecos() {
        try {
            const response = await api.get('/enderecos')
            setEnderecoes(response.data);
        } catch (error) {
            Alert.alert('Erro ao listar os endereços')
        }
    }

    useEffect(()=>{
        carregarEnderecos();
    },[enderecos])

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
                    <Title>Lista de Endereços</Title>
                </Body>
            </Header>
            <Content>
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList data={enderecos}
                        keyExtractor={endereco => `${endereco.id}`}
                        renderItem={({ item }) => (
                            <Content>
                                <Card>
                                    <CardItem header bordered>
                                        <Text>{item.rua}, nº {item.numero}, {item.bairro}</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text >Rua: {item.rua}</Text>
                                            <Text >Nº: {item.numero}</Text>
                                            <Text >Bairro: {item.bairro}</Text>
                                            <Text >Cidade: {item.cidade}</Text>
                                            <Text >Estado: {item.estado}</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem footer>
                                        <Button danger onPress={async () => {
                                            const id = item.id;
                                            await api.delete(`/enderecos/${id}`);
                                        }} >
                                            <Text>Excluir</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            </Content>
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