import React from 'react'
import DatePicker from 'react-native-datepicker'
import { StyleSheet,View, Text } from 'react-native'

export default function DatePickerCustom(props) {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <DatePicker
                style={styles.data}
                date={props.date}
                mode="date"
                placeholder="selecione uma data"
                format="DD/MM/YYYY"
                minDate="01/01/1500"
                maxDate="01/01/2100"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    }// ... You can check the source to find the other keys.
                }}
                onDateChange={props.onDateChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5
    },
    data: {
        width: '100%'
    }
});
