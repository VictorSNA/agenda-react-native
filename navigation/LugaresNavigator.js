import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NovoContatoTela from '../telas/NovoContatoTela';
import ContatosTela from '../telas/ContatosTela';
import Cores from '../constants/Cores';

const LugaresNavigator = createStackNavigator(
  {
    NovoContato: NovoContatoTela,
    Contatos: ContatosTela
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Cores.primary : "white"
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
    }
  }
);

export default createAppContainer(LugaresNavigator);
