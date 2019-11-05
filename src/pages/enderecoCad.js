import React, {useState} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Alert,ScrollView } from 'react-native';
import api from '../services/api';
import TextInputLabelCustom from '../components/TextInputLabelCustom';
import TouchableOpacityCustom from '../components/TouchableOpacityCustom';

export default function EnderecoCad() {
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [estado, setEstado] = useState('');
  const [lote, setLote ] = useState('');
  const [numero, setNumero ] = useState('');
  const [pais, setPais ] = useState('');
  const [quadra, setQuadra ] = useState('');
  const [rua, setRua ] = useState('');

  async function handleSubmit() {
    try {
      const response = await api.post('/enderecos',{
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

  return(
    <ScrollView>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 40
  }, 
  titulo : {
    fontSize: 20,
    paddingBottom: 5
  },
  form: {
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      marginTop: 30
  }
});