import { View, Platform} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho'
import React, {useState} from 'react';
import ContactList from '../components/ContactList';
import GeneralStatusBarColor from '../components/GeneralStatusBarColor';
import styles from '../styles/AppStyles';


const ListaDeContatosTela = (props) =>{


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
    return(
        <View style={styles.main}>
            <GeneralStatusBarColor
                backgroundColor="midnightblue"
                barStyle="light-content"

            />

        <View style={styles.container}>
            <ContactList contatos={contatos}  onDelete={removeContato} />
        </View>
        </View>
    );
}

ListaDeContatosTela.navigationOptions = dadosNav => {
    return{
        headerTitle: "Todos os contatos",
        headerRight:
        <HeaderButtons
            HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("NovoContato")}}/>
        </HeaderButtons>  
        
        
    }
}

export default ListaDeContatosTela;