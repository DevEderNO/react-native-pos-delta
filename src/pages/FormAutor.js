import React, { useState } from 'react'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input, View
} from 'native-base';
import api from '../services/api';
import { StyleSheet, Alert } from 'react-native'
import PickerCustom from '../components/PickerCustom';

export default function FormAutor(props) {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState(-1);
    const sexos = [
        { id: 0, nome: 'Masculino' },
        { id: 1, nome: 'Feminino' },
    ]
    async function handleSubmit() {
        if(sexo === -1){
            Alert.alert('Sexo não selecionado');
            return
        }
        try {
            const response = await api.post('/autores',
                {
                    nome,
                    sexo
                }
            );
            Alert.alert('Autor cadastrado com sucesso!')
            setNome('');
            setSexo(-1);
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao cadastrar o autor!')
        }
    }
    return (
        <Container>
            <View style={{backgroundColor:'#1A237E',height:23}}></View>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={() => props.navigation.openDrawer()}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Autor</Title>
                </Body>
            </Header>
            <Content>
                <View style={styles.container}>
                    <Item stackedLabel  style={{ marginBottom: 20 }}>
                        <Label>Autor</Label>
                        <Input value={nome} onChangeText={setNome} />
                    </Item>
                    <Item stackedLabel style={{marginBottom:10}}>
                        <Label>Sexo</Label>
                        <Item picker>
                            <PickerCustom
                                list={sexos}
                                placeholder="Selecione o sexo..."
                                selectedValue={sexo}
                                onValueChange={(sexo)=>setSexo(sexo)} />
                        </Item>
                    </Item>
                    <Button block onPress={handleSubmit} ><Text> Cadastrar </Text></Button>
                </View>
            </Content>
        </Container >
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    }
})