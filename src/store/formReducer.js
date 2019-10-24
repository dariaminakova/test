import * as types from './actionTypes';

const initialState = {
  openModal: false,
  successModal: false,
  dataForm: []
};

const formreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, openModal: state.openModal === false ? true: false };
    case types.SHOW_SUCCESS:
      return { ...state, successModal: state.successModal === false ? true: false };
    case types.SUBMIT_FORM:
      return { ...state, dataForm: action.data };
    default:
      return state;
  }
}

export default formreducer;