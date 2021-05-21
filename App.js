import React from 'react';
import LugaresNavigator from './navigation/LugaresNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

import { init } from './helpers/db';

import ENV from './.env';
import * as firebase from 'firebase';

if (!firebase.apps.length)
  firebase.initializeApp(ENV);

init().then(() => {
  console.log("Criação da base ocorreu com sucesso.");
}).catch((err) => {
  console.log('Criação da base falhou.');
  console.log(err);
});

const rootReducer = combineReducers({
  contatos: contatosReducer
 });

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LugaresNavigator />
    </Provider>
  )
}