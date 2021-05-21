import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';

import ContatoItem from '../components/ContatoItem';
import { useSelector } from 'react-redux';

const ContactList = (props) => {
  const [contatos, setContatos] = useState ([]);

  useEffectt(() => {
    db.collection('contatos').onSnapshot((snapshot) => {
      let aux = [];
      snapshot.forEach(doc => {
        aux.push({
          id: doc.id,
          data: doc.data().data,
          nome: doc.data().nome,
          telefone: doc.data().telefone,
          image: doc.data().imagem
        });
      });
      setContatos(aux);
    });
  }, []);

  const removerItem = (chave) => {
    Alert.alert(
      "Apagar",
      "Quer mesmo apagar seu contato?",
      [
        { text: "Cancelar" },
        {
          text: "Confirmar",
          onPress: () => db.collection('lembretes').doc(chave).delete()
        }
      ]
    )
  }

  const renderItem = (contato) => {
    return (
      <TouchableOpacity onLongPress={() => {removerItem(contato.item.id)}}>
      <View>
      <ContatoItem
      nome={contato.item.nome}
      numero={contato.item.telefone}
      onSelect={()=>
        props.navigation.navigate('DetalhesContato', {tituloLugar: contato.item.nome, idContato: contato.item.id})
      }
      imagem={contato.item.image}
      endereco={null}
      />
      </View>
      </TouchableOpacity>

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