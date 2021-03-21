import React, {useState} from 'react';
import LugaresNavigator from './navigation/LugaresNavigator';

export default function App() {
  const [contatos, setContatos] = useState(new Map());

  const addContato = (nome, numero) => {
    if (contatos.get(nome)) {
      contatos.delete(nome);
    }

    setContatos(contatos => {
      console.log(nome + " - " + numero + " salvo com sucesso");
      return new Map([[nome, numero], ...contatos])
    })
  }

  const removeContato = (nome) => {
    contatos.delete(nome);
    console.log("Contato "+ nome + " deletado")
    setContatos(new Map([...contatos]));
  }

  return (
    <LugaresNavigator
      screenProps={{contatos: contatos, addContato: addContato, removeContato: removeContato}}
    />
  )
}