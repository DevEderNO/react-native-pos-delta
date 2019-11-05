import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TextInput} from 'react-native-gesture-handler';


export default function TextInputLabelCustom(props){
  return(
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor="#999"
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={props.onChangeText} />
    </View>
  );
}


const styles = StyleSheet.create({
  label: {
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 5
  },
  input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      fontSize: 16,
      color: '#444',
      marginBottom: 20,
      borderRadius: 2
  }
});