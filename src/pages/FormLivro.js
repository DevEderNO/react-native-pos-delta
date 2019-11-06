import React, {useState} from 'react'
import {StyleSheet, Alert} from 'react-native'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input
} from 'native-base';
import api from '../services/api';
import moment from 'moment';
import DatePickerCustom from '../components/DatePickerCustom'

export default function FormLivro() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [generos, setGenero] = useState([]);
    const [idGenero, setIdGenero] = useState('');
    const [volume, setVolume] = useState('');
    const [dataPublicacao, setDataPublicacao] = useState(new Date());

    async function carregarGeneros(){
        try {
            const response = await api.get('/generos');
            setGenero(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de generos');
        }
    }

    carregarGeneros();

    async function handleSubmit() {
        try {
            const response = await api.post('/livros', 
            {
                nome,
                valor,
                genero:{id:idGenero},
                volume,
                dataPublicacao:moment(dataPublicacao, 'DD/MM/YYYY').format('YYYY-MM-DD')
            })
    
            Alert.alert('Livro salvo com sucesso!');
            setNome('');
            setValor('');
            setVolume('');
            setIdGenero('');
            setDataPublicacao(new Date())
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao realizar a operação!');
        }
    }
    return(
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Cadastro de Livro</Title>
                </Body>
            </Header>
            <Content>
                <Container style={styles.container}>
                    <Item floatingLabel style={styles.item}>
                        <Label>Nome do livro</Label>
                        <Input value={nome} onChangeText={setNome} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Valor do livro</Label>
                        <Input value={valor} onChangeText={setValor} keyboardType={'numeric'} />
                    </Item>
                    <Item floatingLabel style={styles.item}>
                        <Label>Volume do livro</Label>
                        <Input value={volume} onChangeText={setVolume} keyboardType={'numeric'} />
                    </Item>
                    <Item floatingLabel style={styles.item}></Item>
                        <DatePickerCustom
                            label='Data de publicação'
                            date={dataPublicacao} 
                            onDateChange={setDataPublicacao}
                        />

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
    }, 
    item:{
        marginVertical: 5
    }
});

{/* <KeyboardAvoidingView 
            enabled 
            behavior="padding"
            style={styles.container} >
            <Text style={styles.titulo}>Cadastro de Livro</Text>
            <View style={styles.form}>
                <TextInputLabelCustom
                    label="Nome: *"
                    placeholder="Nome do Livro"
                    value={nome}
                    onChangeText={setNome}/>
                <TextInputLabelCustom
                    label="Valor: *"
                    placeholder="Valor do Livro"
                    keyboardType={'numeric'}
                    value={valor}
                    onChangeText={setValor}/>
                <TextInputLabelCustom
                    label="Volume: *"
                    placeholder="Volume do Livro"
                    keyboardType={'numeric'}
                    value={volume}
                    onChangeText={setVolume}/>
                <DatePickerCustom
                    label="Data de publicação: *"
                    date={dataPublicacao}
                    onDateChange={setDataPublicacao}/>
                <Text style={styles.label}>Genero: *</Text>
                <Picker selectedValue={idGenero}
                    onValueChange={setIdGenero}>
                    {
                        generos.map((genero) =>{
                            return <Picker.Item key={genero.id} 
                                label={genero.descricao}
                                value={genero.id} />
                        })
                    }
                </Picker> 
                <TouchableOpacityCustom
                    label="Salvar"
                    onPress={handleSubmit}/>
            </View>
        </KeyboardAvoidingView> */}