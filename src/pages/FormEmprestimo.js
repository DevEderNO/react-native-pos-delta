import React, { useState, useEffect } from 'react'
import {
  Container, Header, Title, Content, Button, Left,
  Body, Icon, Text, Item, Label,
  Input, View
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'
import DatePickerCustom from '../components/DatePickerCustom';
import PickerCustom from '../components/PickerCustom';
import moment from "moment";

export default function FormEmprestimo(props) {
  const [clientes, setClientes] = useState([]);
  const [livros, setLivros] = useState([]);
  const [idCliente, setIdCliente] = useState('');
  const [dataDeDevolucao, setDataDeDevolucao] = useState(moment(Date.now()));
  const [dataDoEmprestimo, setDataDoEmprestimo] = useState(moment(Date.now()));
  const [idLivro, setIdLivro] = useState('');
  const [valorDoEmprestimo, setValorDoEmprestimo] = useState('');

  async function carregarLivros() {
    try {
      const response = await api.get('/livros');
      setLivros(response.data);
    } catch (error) {
      Alert.alert('Erro ao carregar a lista de livros');
    }
  }

  async function carregarClientes() {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      Alert.alert('Erro ao carregar a lista de clientes');
    }
  }

  useEffect(() => {
    carregarClientes()
    carregarLivros()
  }, []);

  async function handleSubmit() {
    try {
      const response = await api.post('/emprestimos',
        {
          cliente: { id: idCliente },
          dataDeDevolucao:moment(dataDeDevolucao, 'DD/MM/YYYY').format('YYYY-MM-DD') ,
          dataDoEmprestimo:moment(dataDoEmprestimo, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          livro: { id: idLivro },
          valorDoEmprestimo
        }).catch((error) =>{
          console.log(error);
        });
      Alert.alert('Emprestimo cadastrado com sucesso!')
      setIdCliente(-1)
      setDataDeDevolucao('')
      setDataDoEmprestimo('')
      setIdLivro('')
      setValorDoEmprestimo('')
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao cadastrar o emprestimo!')
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
          <Title>Emprestimo</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.container}>
          <Item stackedLabel >
            <Label>Cliente</Label>
            <Item picker>
              <PickerCustom
                list={clientes}
                placeholder="Selecione o cliente..."
                selectedValue={idCliente}
                onValueChange={(id) => setIdCliente(id)} />
            </Item>
          </Item>
          <Item stackedLabel last>
            <Label>Data de Emprestimo</Label>
            <Item picker>
              <DatePickerCustom
                placeHolderText="Selecione a data..."
                date={dataDoEmprestimo}
                onDateChange={(dataDoEmprestimo) => setDataDoEmprestimo(dataDoEmprestimo)}
              />
            </Item>
          </Item>
          <Item stackedLabel last>
            <Label>Data de Devolução</Label>
            <Item picker>
              <DatePickerCustom
                placeHolderText="Selecione a data..."
                date={dataDeDevolucao}
                onDateChange={(dataDeDevolucao) => setDataDeDevolucao(dataDeDevolucao)}
              />
            </Item>
          </Item>
          <Item stackedLabel >
            <Label>Livro</Label>
            <Item picker>
              <PickerCustom
                list={livros}
                placeholder="Selecione o livro..."
                selectedValue={idLivro}
                onValueChange={(id) => setIdLivro(id)} />
            </Item>
          </Item>
          <Item stackedLabel style={{ marginBottom: 10 }}>
            <Label>Valor do Emprestimo</Label>
            <Input value={valorDoEmprestimo} onChangeText={setValorDoEmprestimo} keyboardType={'numeric'} />
          </Item>
          <Button block onPress={handleSubmit} ><Text>Realizar Emprestimo</Text></Button>
        </View>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10
  }
})