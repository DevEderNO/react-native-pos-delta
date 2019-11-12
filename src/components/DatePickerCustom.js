import React from 'react'
import {
    Content, DatePicker
} from 'native-base';

export default function DatePickerCustom(props) {
    return (
        <Content>
            <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(1500, 1, 1)}
                maximumDate={new Date(2100, 1, 1)}
                locale={"pt"}
                date={props.date}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={props.placeHolderText}
                textStyle={{ color: "#0026ca" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={props.onDateChange}
                disabled={false}
            />
        </Content>
    )
}
