import React, { useState } from 'react'
import {
    Container, Header, Title, Content, Button, Left,
    Body, Icon, Text, Card, CardItem
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function GeneroList() {
    const [generos, setGeneros] = useState([]);
    async function carregarGeneros() {
        const response = await api.get('/generos');
        setGeneros(response.data);
    }
    carregarGeneros();
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
                <Container style={{ paddingHorizontal: 10 }}>
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
                </Container>
            </Content>
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