import * as FileSystem from 'expo-file-system';
import { inserirContato } from '../helpers/db';

export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (nomeContato, telefone, image, data, lat, lng) => {
  return async dispatch => {
    const nomeArquivo = image.split("/").pop();
    const novoPath = FileSystem.documentDirectory + nomeArquivo;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: novoPath
      })
      const resultadoDB = await inserirContato(
        nomeContato,
        telefone,
        image,
        "Somewhere",
        data,
        lat,
        lng
      );
      console.log(resultadoDB);
      dispatch(
        {
          type: ADD_CONTATO,
          dadosContato: {
            id: resultadoDB.insertId,
            nomeContato: nomeContato,
            telefone: telefone,
            image: novoPath
          }
        }
      )
    } catch(err) {
      console.log("Algo deu errado")
      console.log(err);
      throw err;
    }

  };
  //  return {
//  type: ADD_CONTATO, dadosContato: { nomeContato: nomeContato, telefone: telefone, image: image}
//  }
}