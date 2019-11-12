import React from 'react'
import { Content, Icon, Picker } from "native-base";

export default function PickerCustom(props) {
    return (
        <Content>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholderStyle={{ color: "#0026ca" }}
                placeholderIconColor="#007aff"
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}
            >
                <Picker.Item key={-1}
                    label={props.placeholder}
                    value={-1}
                    color="#d3d3d3"
                     />
                {
                    props.list.map((item) => {
                        return (
                            <Picker.Item key={item.id}
                                label={item.nome ? item.nome : item.descricao}
                                value={item.id} />
                            )
                    })
                }
            </Picker>
        </Content>
    );
}