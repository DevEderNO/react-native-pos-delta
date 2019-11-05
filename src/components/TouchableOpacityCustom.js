import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';


export default function TouchableOpacityCustom(props){
    return(
        <TouchableOpacity style={styles.botao} onPress={props.onPress}>
            <Text style={styles.botaoTexto}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    botaoTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
  });
