import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import ContactInput from './components/ContactInput';
import ContactList from './components/ContactList';

export default function App() {
  const [contatos, setContatos] = useState(new Map());
  const addContato = (nome, numero) => {
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
    <View style={styles.container}>
      <ContactInput onAdicionarContato={addContato} />
      <ContactList contatos={contatos}  onDelete={removeContato} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});