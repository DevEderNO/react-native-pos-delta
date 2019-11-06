import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input
} from 'native-base';
import api from '../services/api';

export default function EnderecoCad() {
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    const [lote, setLote] = useState('');
    const [numero, setNumero] = useState('');
    const [pais, setPais] = useState('');
    const [quadra, setQuadra] = useState('');
    const [rua, setRua] = useState('');

    async function handleSubmit() {
        try {
            const response = await api.post('/enderecos', {
                rua,
                lote,
                quadra,
                numero,
                bairro,
                complemento,
                cidade,
                estado,
                pais,
            });

            Alert.alert('Endereço cadastrado com sucesso!');
            setBairro('');
            setCidade('');
            setComplemento('');
            setEstado('');
            setLote('');
            setNumero('');
            setPais('');
            setQuadra('');
            setRua('');

        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao realizar a operação');
        }
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Endereço</Title>
                </Body>
            </Header>
            <Content>
                <Container style={styles.container}>
                    <Item floatingLabel style={styles.item}>
                        <Label>Rua</Label>
                        <Input value={rua} onChangeText={setRua} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Lote</Label>
                        <Input value={lote} onChangeText={setLote} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Quadra</Label>
                        <Input value={quadra} onChangeText={setQuadra} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Numero</Label>
                        <Input value={numero} onChangeText={setNumero} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Bairro</Label>
                        <Input value={bairro} onChangeText={setBairro} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Complemento</Label>
                        <Input value={complemento} onChangeText={setComplemento} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Bairro</Label>
                        <Input value={bairro} onChangeText={setBairro} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Cidade</Label>
                        <Input value={cidade} onChangeText={setCidade} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Estado</Label>
                        <Input value={estado} onChangeText={setEstado} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Pais</Label>
                        <Input value={pais} onChangeText={setPais} />
                    </Item>
                    <Button block onPress={handleSubmit} ><Text> Cadastrar </Text></Button>
                </Container>
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
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom:50
    },
    item: {
        marginVertical: 5
    }
});
{/* <ScrollView>
<KeyboardAvoidingView
  enabled
  behavior="padding"
  style={styles.container}>
  <Text style={styles.titulo}>Cadastro de Endereço</Text>
  <View style={styles.form}>
    <TextInputLabelCustom
      label="Rua: *"
      placeholder="Informe a rua"
      value={rua}
      onChangeText={setRua}/>
    <TextInputLabelCustom
      label="Lote: *"
      placeholder="Informe a lote"
      value={lote}
      onChangeText={setLote}/>
    <TextInputLabelCustom
      label="Quadra: *"
      placeholder="Informe a quadra"
      value={quadra}
      onChangeText={setQuadra}/>
    <TextInputLabelCustom
      label="Numero: *"
      placeholder="Informe a numero"
      value={numero}
      onChangeText={setNumero}/>
    <TextInputLabelCustom
      label="Bairro: *"
      placeholder="Informe a bairro"
      value={bairro}
      onChangeText={setBairro}/>
    <TextInputLabelCustom
      label="Complemento: *"
      placeholder="Informe a complemento"
      value={complemento}
      onChangeText={setComplemento}/>
    <TextInputLabelCustom
      label="Cidade: *"
      placeholder="Informe a cidade"
      value={cidade}
      onChangeText={setCidade}/>
    <TextInputLabelCustom
      label="Estado: *"
      placeholder="Informe a estado"
      value={estado}
      onChangeText={setEstado}/>
    <TextInputLabelCustom
      label="Pais: *"
      placeholder="Informe a pais"
      value={pais}
      onChangeText={setPais}/>
    <TouchableOpacityCustom 
      label="Salvar"
      onPress={handleSubmit}/>
  </View>

</KeyboardAvoidingView>
</ScrollView> */}