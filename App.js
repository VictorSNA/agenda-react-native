import React, {useState} from 'react';
import { View } from 'react-native';
import ContactInput from './components/ContactInput';
import ContactList from './components/ContactList';
import GeneralStatusBarColor from './components/GeneralStatusBarColor';
import styles from './styles/AppStyles';

export default function App() {
  const [contatos, setContatos] = useState(new Map());
  const addContato = (nome, numero) => {
    if (contatos.get(nome)) {
      contatos.delete(nome);
    }
    setContatos(contatos => {
      console.log(nome + " - " + numero + " salvo com sucesso");
      return new Map([[nome, numero], ...contatos])
    }
    )
  }
  const removeContato = (nome) => {
    contatos.delete(nome);
    console.log("Contato "+ nome + " deletado")
    setContatos(new Map([...contatos]));
  }
  return (
    <View style={styles.main}>
      <GeneralStatusBarColor
        backgroundColor="midnightblue"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <ContactInput onAdicionarContato={addContato} />
        <ContactList contatos={contatos}  onDelete={removeContato} />
      </View>
    </View>
  );
}