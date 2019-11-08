import React, { useState } from 'react'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem, View, Footer, FooterTab,
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListLivro(props) {
    const [livros, setLivros] = useState([]);
    async function carregarGeneros() {
        const response = await api.get('/livros');
        setLivros(response.data);
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
                    <Title>Lista de livros</Title>
                </Body>
            </Header>
            <Content>
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList data={livros}
                        keyExtractor={livro => `${livro.id}`}
                        renderItem={({ item }) => (
                            <Content>
                                <Card>
                                    <CardItem header>
                                            <Text >{item.nome}</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text >{item.genero.descricao}</Text>
                                            <Text >{item.valor}</Text>
                                            <Text >{item.volume}</Text>
                                            <Text >{item.volume}</Text>
                                            <Text >{item.autor.nome}</Text>
                                            <Text >{item.editora.nome}</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem footer>
                                        <Button danger onPress={async () => {
                                            const id = item.id;
                                            await api.delete(`/livros/${id}`);
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