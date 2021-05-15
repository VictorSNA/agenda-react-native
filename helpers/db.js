import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, numero TEXT NOT NULL, foto TEXT NOT NULL, endereco TEXT NOT NULL, data_hora TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        (_, resultado) => { resolve(resultado) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}

export const inserirContato = (nome, numero, foto, endereco, data_hora, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO tb_contato (nome, numero, foto, endereco, data_hora, lat, lng) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nome, numero, foto, endereco, data_hora, lat, lng],
        (_, resultado) => { resolve(resultado) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}