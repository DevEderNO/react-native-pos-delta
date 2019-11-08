import React, { useState } from 'react'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem, View, Footer, FooterTab,
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListEndereco(props) {
    const [enderecos, setEnderecoes] = useState([]);
    async function carregarGeneros() {
        const response = await api.get('/enderecos');
        setEnderecoes(response.data);
    }
    carregarGeneros();
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
                    <Title>Lista de endereços</Title>
                </Body>
            </Header>
            <Content>
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList data={enderecos}
                        keyExtractor={endereco => `${endereco.id}`}
                        renderItem={({ item }) => (
                            <Content>
                                <Card>
                                    <CardItem>
                                        <Body>
                                            <Text >{item.nome}</Text>
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