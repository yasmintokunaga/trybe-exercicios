import { RESQUEST_STARTED, RECEIVE_DETAILS, REQUEST_FAILLED } from "../actions";

const initialState = {
  isFetching: false,
  personagemData: {},
  isError: false,
  errorMessage: '',
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case RESQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        personagemData: {},
        isError: false,
        errorMessage: '',
      };
    case RECEIVE_DETAILS: 
      return {
        ...state,
        isFetching: false,
        personagemData: action.payload,
        isError: false,
        errorMessage: '',
      };
    case REQUEST_FAILLED:
      return {
        ...state,
        isFetching: false,
        personagemData: {},
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;