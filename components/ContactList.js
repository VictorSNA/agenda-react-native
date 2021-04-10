import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import ContatoItem from '../components/ContatoItem';
import { useSelector } from 'react-redux';

const ContactList = (props) => {
  const contatos = useSelector(estado => estado.contatos.contatos);
  const renderItem = (contato) => {
    return (
      <ContatoItem
      nome={contato.item.nome}
      numero={contato.item.telefone}
      onSelect={()=>
        props.navigation.navigate('DetalhesDoLugar', {tituloLugar: lugar.item.titulo, idLugar: lugar.id})
      }
      imagem={contato.item.image}
      endereco={null}
    />
    )
  }
  return (
    <View>
        <SafeAreaView>
          <FlatList
            data={contatos}
            renderItem={renderItem}
            keyExtractor={contato => contato.id}
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