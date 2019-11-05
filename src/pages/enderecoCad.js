import React, {useState} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Alert,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../services/api';
import TextInputLabelCustumizado from '../components/TextInputLabelCustumizado';

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
        <View style={styles.form}>
          <Text style={styles.titulo}>Cadastro de Endereço</Text>
          <TextInputLabelCustumizado
            label="Rua: *"
            placeholder="Informe a rua"
            placeholderTextColor="#999"
            value={rua}
            onChangeText={setRua}/>
          <TextInputLabelCustumizado
            label="Lote: *"
            placeholder="Informe a lote"
            placeholderTextColor="#999"
            value={lote}
            onChangeText={setLote}/>
          <TextInputLabelCustumizado
            label="Quadra: *"
            placeholder="Informe a quadra"
            placeholderTextColor="#999"
            value={quadra}
            onChangeText={setQuadra}/>
          <TextInputLabelCustumizado
            label="Numero: *"
            placeholder="Informe a numero"
            placeholderTextColor="#999"
            value={numero}
            onChangeText={setNumero}/>
          <TextInputLabelCustumizado
            label="Bairro: *"
            placeholder="Informe a bairro"
            placeholderTextColor="#999"
            value={bairro}
            onChangeText={setBairro}/>
          <TextInputLabelCustumizado
            label="Complemento: *"
            placeholder="Informe a complemento"
            placeholderTextColor="#999"
            value={complemento}
            onChangeText={setComplemento}/>
          <TextInputLabelCustumizado
            label="Cidade: *"
            placeholder="Informe a cidade"
            placeholderTextColor="#999"
            value={cidade}
            onChangeText={setCidade}/>
          <TextInputLabelCustumizado
            label="Estado: *"
            placeholder="Informe a estado"
            placeholderTextColor="#999"
            value={estado}
            onChangeText={setEstado}/>
          <TextInputLabelCustumizado
            label="Pais: *"
            placeholder="Informe a pais"
            placeholderTextColor="#999"
            value={pais}
            onChangeText={setPais}/>
            <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
                <Text style={styles.botaoTexto}>Salvar</Text>
            </TouchableOpacity>
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
  }, 
  titulo : {
      fontSize: 20
  },
  form: {
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      marginTop: 30
  },
  botao: {
      height: 42,
      backgroundColor: '#f05a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2
  },
  botaoTexto: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16
  }
});