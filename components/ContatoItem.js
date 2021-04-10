import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Cores from '../constants/Cores';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.contatoItem}>
      <Image style={styles.imagem} source={{ uri: props.imagem }} />
      <View style={styles.infoContainer} >
          <Text style={styles.nomeContato}>{props.nome}</Text>
          <Text style={styles.numero}>{props.numero}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ContatoItem;

// flex direction, filhos do touchable item é row (horizontalmente)
const styles = StyleSheet.create({
  contatoItem: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Cores.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  nomeContato: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  numero: {
    color: '#777',
    fontSize: 16
  }
});
