import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableNativeFeedback } from 'react-native';

const ContactList = (props) => {
  const renderItem = ({item}) => {
    return ([item].map(([nome, numero]) => (
      <TouchableNativeFeedback onLongPress={() => props.onDelete(nome)}>
        <View key={numero} style={styles.itemNaLista}>
          <Text>{nome} - {numero}</Text>
        </View>
      </TouchableNativeFeedback>
      )
    )
    )
  }
  return (
    <View style={{marginTop: 10}}>
      <Text style={{fontSize: 20}}>Lista de contatos</Text>
        <FlatList
          data={Array.from(props.contatos)}
          renderItem={renderItem}
          keyExtractor={item => item.numero}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#e0e0e0',
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
});

export default ContactList;