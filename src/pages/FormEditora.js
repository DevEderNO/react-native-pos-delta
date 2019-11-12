import React, { useState } from 'react'
import {
  Container, Header, Title, Content,
  Footer, FooterTab, Button, Left,
  Body, Icon, Text, Item, Label,
  Input, View
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'

export default function FormEditora(props) {
  const [nome, setNome] = useState('');
  async function handleSubmit() {
    try {
      console.log(nome);
      const response = await api.post('/editoras',
        {
          nome
        });
      Alert.alert('Editora cadastrado com sucesso!')
      setNome('');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao cadastrar o genero!')
    }
  }
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
          <Title>Cadastro de Editora</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.container}>
          <Item stackedLabel style={{ marginBottom: 20 }}>
            <Label>Editora</Label>
            <Input value={nome} onChangeText={setNome} />
          </Item>
          <Button block onPress={handleSubmit} ><Text> Cadastrar </Text></Button>
        </View>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  }
})