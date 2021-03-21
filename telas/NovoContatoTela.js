import React from 'react'
import { StyleSheet, Text, View, Platform} from 'react-native'
import ContactInput from '../components/ContactInput';


const NovoContatoTela = (props) => {
  return (
    <View>
      <ContactInput onAdicionarContato={props.screenProps.addContato} />
    </View>
  )
}

export default NovoContatoTela

const styles = StyleSheet.create({})
