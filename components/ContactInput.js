import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { ContactName, ContactNumber } from '../utils/Messages';

const ContactInput = (props) => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  const capturarNome = (nome) => {
    setNome(nome);
  }
  const capturarNumero = (numero) => {
    setNumero(numero);
  }
  return (
    <View>
      <View style={styles.textInput}>
        <TextInput
          placeholder={ContactName}
          onChangeText={capturarNome}
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
            props.onAdicionarContato(nome, numero);
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