import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import {
  Container, Header, Title, Content, Button, Left,
  Body, Icon, Text, Card, CardItem, View
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import ActionButtonCustom from '../components/ActionButtonCustom';
import api from '../services/api';
import moment from 'moment';

export default function ListEmprestimo(props) {
  const [emprestimos, setEmprestimos] = useState([]);

  async function carregarEmprestimos() {
    try {
      const response = await api.get('/emprestimos');
      setEmprestimos(response.data);
    } catch (error) {
      Alert.alert('Erro ao carregar a lista de emprestimos');
    }
  }

  useEffect(() => {
    carregarEmprestimos()
  }, [idEmprestimo])

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
          <Title>Lista de Emprestimos</Title>
        </Body>
      </Header>
      <Content>
        <View style={{ paddingHorizontal: 10 }}>
          <FlatList data={emprestimos}
            keyExtractor={emprestimo => `${emprestimo.id}`}
            renderItem={({ item }) => (
              <Container style={{ height: 'auto' }}>
                <Content>
                  <Card>
                    <CardItem header bordered>
                      <Text >{item.livro.nome}</Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text >Cliente: {item.cliente.nome}</Text>
                        <Text >Emprestimo: {moment(item.dataDoEmprestimo).format('L')}</Text>
                        <Text >Devolução: {moment(item.dataDaDevolucao).format('L')}</Text>
                        <Text >R$: {item.valorDoEmprestimo}</Text>
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
                                await api.delete(`/emprestimos/${id}`);
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
      <ActionButtonCustom props={props} title='Novo' route='FormEmprestimo' />
    </Container>
  );
}

