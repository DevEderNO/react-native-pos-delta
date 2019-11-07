import React, {useState} from 'react'
import {StyleSheet, Alert} from 'react-native'
import {
    Container, Header, Title, Content,
    Footer, FooterTab, Button, Left,
    Body, Icon, Text, Item, Label,
    Input, View
} from 'native-base';
import api from '../services/api';
import moment from 'moment';
import DatePickerCustom from '../components/DatePickerCustom'
import PickerCustom from '../components/PickerCustom'

export default function FormLivro() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [generos, setGenero] = useState([]);
    const [autores, setAutores] = useState([]);
    const [idGenero, setIdGenero] = useState('');
    const [volume, setVolume] = useState('');
    const [idAutor, setIdAutor] = useState('');
    const [dataPublicacao, setDataPublicacao] = useState(new Date());

    async function carregarGeneros(){
        try {
            const response = await api.get('/generos');
            setGenero(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de generos');
        }
    }

    async function carregarAutores(){
        try {
            const response = await api.get('/autores');
            setAutores(response.data);
        } catch (error) {
            Alert.alert('Erro ao carregar a lista de generos');
        }
    }

    carregarGeneros();
    carregarAutores();

    async function handleSubmit() {
        try {
            const response = await api.post('/livros', 
            {
                nome,
                valor,
                genero:{id:idGenero},
                autor:{id:idAutor},
                volume,
                dataPublicacao:moment(dataPublicacao, 'DD/MM/YYYY').format('YYYY-MM-DD')
            })
    
            Alert.alert('Livro salvo com sucesso!');
            setNome('');
            setValor('');
            setVolume('');
            setIdGenero('');
            setIdAutor('');
            setDataPublicacao(new Date())
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao realizar a operação!');
        }
    }
    return(
        <Container>
            <View style={{backgroundColor:'#1A237E',height:23}}></View>
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
                <View style={styles.container}>
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
                    <Item>
                        <PickerCustom
                            list={generos}
                            placeholder="Selecione o genero..."
                            selectedValue={idGenero}
                            onValueChange={setIdGenero} />
                    </Item>
                    <Item>
                        <PickerCustom
                            list={autores}
                            placeholder="Selecione o autor..."
                            selectedValue={idAutor}
                            onValueChange={setIdAutor} />
                    </Item>
                    <Item last style={styles.item}>
                        <DatePickerCustom
                            placeHolderText="Selecione a data..."
                            label='Data de publicação'
                            date={dataPublicacao}
                            onDateChange={setDataPublicacao}
                        />
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