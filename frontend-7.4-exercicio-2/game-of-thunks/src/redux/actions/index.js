import fetchAPI from "../../services/fetch";
import store from "..";

export const RESQUEST_STARTED = 'RESQUEST_STARTED';
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';
export const REQUEST_FAILLED = 'REQUEST_FAILLED';

export const requestStarted = () => ({
  type: RESQUEST_STARTED,
});

export const receiveDetails = (dataDetails) => ({
  type: RECEIVE_DETAILS,
  payload: dataDetails,
});

export const requestFailled = (error) => ({
  type: REQUEST_FAILLED,
  payload: error,
});

export const fetchAction = (name) => {
  return async () => {
    store.dispatch(requestStarted());
    try {
      const data = await fetchAPI(name);
      if(data.length > 0) {
        return store.dispatch(receiveDetails(data[0]));
      }
      throw new Error();
    } catch(error) {
      store.dispatch(requestFailled('Personagem não encontrado'));
    }
  }
};
