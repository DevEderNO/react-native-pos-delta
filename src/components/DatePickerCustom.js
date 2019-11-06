import React from 'react'
import {
    Container, Content,
    Text, DatePicker
} from 'native-base';

export default function DatePickerCustom(props) {
    return (
        <Container>
            <Content>
            <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"pt"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={props.onDateChange}
                disabled={false}
                />
                <Text>
                {props.label}: {props.date.toString().substr(4, 12)}
                </Text>
            </Content>
        </Container>
    )
}
