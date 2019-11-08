import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input, View
} from 'native-base';
import api from '../services/api';

export default function EnderecoCad(props) {
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
            <View style={{ backgroundColor: '#1A237E', height: 23 }}></View>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={() => props.navigation.openDrawer()} />
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Endereço</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.container}>
                    <Item stackedLabel >
                        <Label>Rua</Label>
                        <Input value={rua} onChangeText={setRua} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Quadra</Label>
                        <Input value={quadra} onChangeText={setQuadra} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Lote</Label>
                        <Input value={lote} onChangeText={setLote} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Numero</Label>
                        <Input value={numero} onChangeText={setNumero} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Bairro</Label>
                        <Input value={bairro} onChangeText={setBairro} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Complemento</Label>
                        <Input value={complemento} onChangeText={setComplemento} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Cidade</Label>
                        <Input value={cidade} onChangeText={setCidade} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Estado</Label>
                        <Input value={estado} onChangeText={setEstado} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Pais</Label>
                        <Input value={pais} onChangeText={setPais} />
                    </Item>
                    <Button block onPress={handleSubmit} ><Text> Cadastrar </Text></Button>
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
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
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