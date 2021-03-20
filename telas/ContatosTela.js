import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ContactList from './components/ContactList';

const ContatosTela = (props) => {
  return (
    <View>
      <Text>Contatos</Text>
      <ContactList contatos={props.contatos}  onDelete={props.removeContato} />
    </View>
    
  )
}

export default ContatosTela

const styles = StyleSheet.create({})
