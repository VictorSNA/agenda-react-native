import * as contatosActions from './contatos-actions';
import Contato from '../modelo/Contato';

const estadoInicial = {
  contatos: []
}

export default (estado = estadoInicial, action) => {
  switch(action.type) {
    case contatosActions.ADD_CONTATO:
      const c = new Contato(action.dadosContato.id.toString(), action.dadosContato.nomeContato, action.dadosContato.telefone, action.dadosContato.image);
      return {
        contatos: estado.contatos.concat(c)
      }
    }
  return estado;
};