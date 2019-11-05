import React from 'react'
import {View, Text, Picker, StyleSheet} from 'react-native'

export default function PickerCustom(props) {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <Picker selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}>
                {
                    props.list.map((item) => {
                        return <Picker.Item key={item.id}
                            label={item.nome ? item.nome : item.descricao}
                            value={item.id} />
                    })
                }
            </Picker> 
        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
})