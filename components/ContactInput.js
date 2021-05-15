import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { ContactName, ContactNumber } from '../utils/Messages';
import * as contatosActions from '../store/contatos-actions'
import ImportPhoto from '../components/ImportPhoto';

import { useDispatch } from 'react-redux';

import CapturaLocalizacao from '../components/CapturaLocalizacao';

const ContactInput = (props) => {
  const dispatch = useDispatch ();

  const [nomeContato, setNomeContato] = useState("");
  const [numero, setNumero] = useState("");
  const [image, setImage] = useState(null);

  const capturarNomeContato = (nomeContato) => {
    setNomeContato(nomeContato);
  }
  const capturarNumero = (numero) => {
    setNumero(numero);
  }

  const addImage = (imageURI) => {
    setImage(imageURI);
  }

  const onAdicionarContato = () => {
    dispatch(contatosActions.addContato(
      nomeContato,
      numero,
      image,
      new Date().toString(),
      localizacao.lat,
      localizacao.lng
      ));
    props.goBack();
  }

  const [localizacao, setLocalizacaoSelecionada] = useState();

  const capturaLocalizacao = (localizacao) => {
    setLocalizacaoSelecionada(localizacao);
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
      <View style={styles.textInput}>
        <ImportPhoto addImage={{addImage}} />
      </View>
      <View style={styles.button}>
        <Button
          title="Adicionar contato"
          color="#003300"
          onPress={() => {
            onAdicionarContato();
          }
          }
        />
      </View>
      <CapturaLocalizacao setLocalizacao={(localizacao) => {capturaLocalizacao(localizacao)}}/>
    </View>
  )
};

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    borderWidth: 1,
    padding: 15,
    marginVertical: 3
  },
  button: {
    marginTop: 0
  }
});
export default ContactInput;