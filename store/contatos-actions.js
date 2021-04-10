export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (nomeContato, telefone) => {
  return {
  type: ADD_CONTATO, dadosContato: { nomeContato: nomeContato, telefone: telefone}
  }
}