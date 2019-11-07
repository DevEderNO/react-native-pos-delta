import React, { useState } from 'react'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem, View,Footer, FooterTab,
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListGenero() {
    const [generos, setGeneros] = useState([]);
    async function carregarGeneros() {
        const response = await api.get('/generos');
        setGeneros(response.data);
    }
    carregarGeneros();
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
                    <Title>Cadastro de Genero</Title>
                </Body>
            </Header>
            <Content>
                <View style={{paddingHorizontal:10}}>
                    <FlatList data={generos}
                        keyExtractor={genero => `${genero.id}`}
                        renderItem={({ item }) => (
                            <Container style={{ height: 'auto' }}>
                                <Content>
                                    <Card>
                                        <CardItem header>
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



        // <View style={styles.container}>
        //     <View style={styles.top}></View>
        //     <Text style={styles.titulo}>Lista de Genero</Text>
        //     <FlatList data={generos}
        //         style={styles.lista}
        //         keyExtractor={genero => `${genero.id}`}
        //         renderItem={({ item }) => (
        //             <View style={styles.container}>
        //                 <View style={styles.card}>
        //                     <Text style={styles.label} >Id: {item.id}</Text>
        //                     <Text style={styles.label}>Descrição: {item.descricao}</Text>
        //                     <TouchableOpacity onPress={async () => {
        //                         const id = item.id;
        //                         await api.delete(`/generos/${id}`);
        //                     }}>
        //                         <Text style={styles.botaoTexto}>Excluir</Text>
        //                     </TouchableOpacity>
        //                 </View>
        //             </View>
        //         )}
        //     />
        // </View>