import React from 'react'
import { Content, Icon, Picker } from "native-base";

export default function PickerCustomEndereco(props) {
    return (
        <Content>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeHolder={props.placeHolder}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                placeholderIconColor="#007aff"
                style={props.style}
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}
            >
                {
                    props.list.map((item) => {
                        return <Picker.Item key={item.id}
                            label={`${item.rua}, Nº ${item.numero}, ${item.bairro}`}
                            value={item.id} />
                    })
                }
            </Picker>
        </Content>
    );
}