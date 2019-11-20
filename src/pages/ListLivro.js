import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import {
	Container, Header, Title, Content, Button, Left,
	Body, Icon, Text, Card, CardItem, View, Footer, FooterTab,
} from 'native-base';
import ActionButtonCustom from '../components/ActionButtonCustom';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListLivro(props) {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
	async function carregarGeneros() {
    try {
      const response = await api.get('/livros');
      setLivros(response.data);
      setLoading(false)
    } catch (error) {
      Alert.alert('Erro ao carregar a lista de livros')
    }
	}
	useEffect(() => {
    if(loading){
      carregarGeneros()
      setTimeout(() => {
        setLoading(true)
      }, 1000);
    }
	}, [loading]);

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
					<Title>Lista de Livros</Title>
				</Body>
			</Header>
			<Content>
				<View style={{ paddingHorizontal: 10 }}>
					<FlatList data={livros}
						keyExtractor={livro => `${livro.id}`}
						renderItem={({ item }) => (
							<Content>
								<Card>
									<CardItem header bordered>
										<Text >{item.nome}</Text>
									</CardItem>
									<CardItem>
										<Body>
											<Text >Genero: {item.genero.descricao}</Text>
											<Text >R$: {item.valor}</Text>
											<Text >Volume: {item.volume}</Text>
											<Text >Autor: {item.autor.nome}</Text>
											<Text >Editora: {item.editora.nome}</Text>
										</Body>
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
															await api.delete(`/livros/${id}`);
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
						)} />
				</View>
			</Content>
			<ActionButtonCustom props={props} title='Novo' route='FormLivro'/>
		</Container>
	);
}