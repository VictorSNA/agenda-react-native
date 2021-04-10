import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { ContactName, ContactNumber } from '../utils/Messages';
import * as contatosActions from '../store/contatos-actions'

import { useDispatch } from 'react-redux';

const ContactInput = (props) => {
  const dispatch = useDispatch ();

  const [nomeContato, setNomeContato] = useState("");
  const [numero, setNumero] = useState("");

  const capturarNomeContato = (nomeContato) => {
    setNomeContato(nomeContato);
  }
  const capturarNumero = (numero) => {
    setNumero(numero);
  }

  const onAdicionarContato = () => {
    dispatch(contatosActions.addContato(nomeContato, numero));
    props.goBack();
  }
  return (
    <View>
      <View style={styles.textInput}>
        <TextInput
          placeholder={ContactName}
          onChangeText={capturarNomeContato}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          placeholder={ContactNumber}
          onChangeText={capturarNumero}
        />
       </View>

      <View>
        <Button
          title="Adicionar contato"
          color="#003300"
          onPress={() => {
            onAdicionarContato();
          }
          }
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    borderWidth: 1,
    padding: 15,
    marginVertical: 3
  }
});
export default ContactInput;