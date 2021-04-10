import React from 'react'
import { StyleSheet, View } from 'react-native'
import ContactInput from '../components/ContactInput';

const NovoContatoTela = (props) => {
  return (
    <View>
      <ContactInput goBack={() => { props.navigation.goBack() }} />
    </View>
  )
}

export default NovoContatoTela

const styles = StyleSheet.create({})
