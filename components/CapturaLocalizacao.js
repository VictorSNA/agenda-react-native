import React from 'react';
import Cores from '../constants/Cores';

import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const CapturaLocalizacao = (props) => {
  const verificarPermissoes = async () => {
    const resultado = await Permissions.askAsync(Permissions.LOCATION);
    if (resultado.status !== 'granted'){
      Alert.alert(
        'Sem permissão para uso do mecanismo de localização',
        'É preciso liberar acesso ao mecanismo de localização',
        [{text: "OK"}]
      );
      return false;
    }
    return true;
  }

  const capturarLocalizacao = async () => {
    const temPermissao = await verificarPermissoes();
    if (temPermissao) {
      try {
        const localizacao = await Location.getCurrentPositionAsync({timeout: 8000})
        props.setLocalizacao({
          lat: localizacao.coords.latitude,
          lng: localizacao.coords.longitude
        });
      }catch(error){
        Alert.alert(
          error.toString(),
          'Impossível obter a localização',
          [{text: "OK"}]
        )
      }
    }
  }

  return (
    <View>
    <Button
    title="Obter localização"
    color={Cores.primary}
    onPress={() => capturarLocalizacao()}
    />
    </View>
  )
}

export default CapturaLocalizacao

const styles = StyleSheet.create({})
