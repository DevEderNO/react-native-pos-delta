import React from 'react'
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Icon } from 'native-base';



export default function ActionButtonCustom(props) {
  return (
    <ActionButton buttonColor="#0026ca" hideShadow style={styles.actionButton}>
      <ActionButton.Item buttonColor='#4CAF50' title={props.title} onPress={() => props.props.navigation.navigate(props.route)}>
        <Icon name="ios-add" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  )
}

const styles = StyleSheet.create({
  actionButton: {
      position: 'absolute',
  },
  actionButtonIcon: {
      fontSize: 32,
      height: 33,
      color: 'white',
  },
});


