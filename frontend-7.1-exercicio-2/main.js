import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = "NEXT_COLOR"
const PREVIOUS_COLOR = "PREVIOUS_COLOR";
const RANDOM_COLOR = "RANDOM_COLOR";

const reducer = (state = INITIAL_STATE, action) => {
  const { colors, index } = state;
  console.log(colors.length);
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: (colors.length - 1) === index ? 0 : (index + 1), 
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: index === 0 ? 0 : (index - 1),
      };
    case RANDOM_COLOR:
      const randomColor = criarCor();
      const newColorArray = colors;
      newColorArray.splice(index, 0, randomColor);
      return {
        ...state,
        colors: newColorArray,
      }
  
    default:
      return state;
  }
}

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const store = createStore(reducer, composeWithDevTools());

const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const randomButton = document.querySelector('#random');

previousButton.addEventListener('click', () => {
  store.dispatch({ type: PREVIOUS_COLOR });
});

nextButton.addEventListener('click', () => {
  store.dispatch({ type: NEXT_COLOR });
});

randomButton.addEventListener('click', () => {
  store.dispatch({ type: RANDOM_COLOR });
});

store.subscribe(() => {
  const globalState = store.getState();
  const { index, colors } = globalState;
  const container = document.querySelector('#container');
  const value = document.querySelector('#value');
  container.style.background = colors[index];
  value.innerHTML = colors[index];
});