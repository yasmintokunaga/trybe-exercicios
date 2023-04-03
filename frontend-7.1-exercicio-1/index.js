import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// 1. Criando o reducer com o estado inicial
const INITAL_STATE = { count: 0 }; 

const reducer = (state = INITAL_STATE, action) => {

  if(action.type === "INCREMENT_COUNTER") {
    return { count: state.count + 1 }
  }
  return state;
}

// 2. Criando a store com Redux dev tools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a action
const action = { type: "INCREMENT_COUNTER" };

// 4. Disparando a action
const incrementButton = document.querySelector('button');
incrementButton.addEventListener('click', () => {
  store.dispatch(action);
});

// 5. Lendo as alterações do estado
store.subscribe(() => {
  const globalState = store.getState();
  const counterEl = document.querySelector('h2');
  counterEl.innerHTML = globalState.count;
})