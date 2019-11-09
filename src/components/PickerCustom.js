import React from 'react'
import { Content, Icon, Picker } from "native-base";

export default function PickerCustom(props) {
    return (
        <Content>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder={props.placeholder}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}
            >
                <Picker.Item key={-1}
                    label={'Selecione...'}
                    value={-1}
                    color="#bfc6ea"
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