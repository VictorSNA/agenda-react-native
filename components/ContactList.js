import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableNativeFeedback
} from 'react-native';

const ContactList = (props) => {
  const renderItem = ({item}) => {
    return ([item].map(([nome, numero]) => (
      <TouchableNativeFeedback
        key={numero}
        onLongPress={() => props.onDelete(nome)}
      >
        <View key={numero} style={styles.itemNaLista}>
          <Text key={numero}>{nome} - {numero}</Text>
        </View>
      </TouchableNativeFeedback>
      )
    )
    )
  }
  return (
    <View>
        <SafeAreaView>
          <FlatList
            data={Array.from(props.contatos)}
            renderItem={renderItem}
            keyExtractor={item => item.numero}
          />
        </SafeAreaView>
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