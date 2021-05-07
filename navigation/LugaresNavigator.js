import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NovoContatoTela from '../telas/NovoContatoTela';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import DetalhesContatoTela from '../telas/DetalhesContatoTela';
import Cores from '../constants/Cores';

const LugaresNavigator = createStackNavigator(
  {
    ListaDeContatos: ListaDeContatosTela,
    NovoContato: NovoContatoTela,
    DetalhesContato: DetalhesContatoTela
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
