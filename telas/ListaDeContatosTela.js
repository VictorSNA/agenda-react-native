import { View, Platform} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho'
import React from 'react';
import ContactList from '../components/ContactList';
import styles from '../styles/AppStyles';

const ListaDeContatosTela = (props) =>{
  return(
    <View style={styles.main}>
      <View style={styles.container}>
        <ContactList />
      </View>
    </View>
  );
}

ListaDeContatosTela.navigationOptions = ({ navigation }) => {
  return{
    headerTitle: "Todos os contatos",
    headerRight: () =>
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}>
          <Item
             title="Adicionar"
             iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
             onPress={() => {
                  navigation.navigate("NovoContato");
                }
              }
             />
      </HeaderButtons>  
  }
}

export default ListaDeContatosTela;