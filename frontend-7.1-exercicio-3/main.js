import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const CHANGE_STATUS = "CHANGE_STATUS";
const CHANGE_THEME = "CHANGE_THEME";

const reducer = (status = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...status,
        status: status.status === 'offline' ? 'online' : 'offline',
      };
    case CHANGE_THEME:
      return {
        ...status,
        theme: status.theme ==='dark' ? 'light' : 'dark',
      };  
    default:
      return {
        ...status,
      };
  };  
}

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: CHANGE_THEME });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: CHANGE_STATUS });
});

// color: white;
// background-color: #333;

store.subscribe(() => {
  const { status, theme } = store.getState();

  const body = document.querySelector('body');
  if (theme === 'light') {
    body.style.background = 'white';
    body.style.color = '#333';
    themeButton.innerHTML = 'Dark Mode';
  } else {
    body.style.background = '#333';
    body.style.color = 'white';
    themeButton.innerHTML = 'Light Mode';
  }

  const statusText = document.querySelector('#status');
  if (status === 'offline') {
    statusText.innerHTML ='Offline';
    statusButton.innerHTML = 'Ficar Online';
  } else {
    statusText.innerHTML ='Online';
    statusButton.innerHTML = 'Ficar Offline';
  }

})