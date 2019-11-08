import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native';
import {
  Container, Header, Title, Content, Button, Left,
  Body, Icon, Text, Card, CardItem, View, Footer, FooterTab
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';

export default function ListCliente(props) {
  const [clientes, setClientes] = useState([]);
  async function carregarClientes() {
    const response = await api.get('/clientes');
    setClientes(response.data);
  }

  useEffect(() => {
    carregarClientes();
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
          <Title>Lista de clientes</Title>
        </Body>
      </Header>
      <Content>
        <KeyboardAvoidingView style={{ paddingHorizontal: 10 }} behavior="padding" enabled>
          <FlatList data={clientes}
            keyExtractor={cliente => `${cliente.id}`}
            renderItem={({ item }) => (
              <Content>
                <Card>
                  <CardItem>
                    <Body>
                      <Text >{item.nome}</Text>
                      <Text >{item.cpf}</Text>
                      <Text >{item.email}</Text>
                      <Text >{item.telefone}</Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Button danger onPress={async () => {
                      const id = item.id;
                      await api.delete(`/clientes/${id}`);
                    }} >
                      <Text>Excluir</Text>
                    </Button>
                  </CardItem>
                </Card>
              </Content>
            )} />
        </KeyboardAvoidingView >
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