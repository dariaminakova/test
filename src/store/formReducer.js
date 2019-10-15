import * as types from './actionTypes';

const initialState = {
  openModal: false,
  successModal: false,
  dataForm: {
    email: '',
    phone: '',
    firstname: '',
    secondname: '',
    passportnumber: '',
    formErrors: { email: '', phone: '', firstname: '', secondname: '', passportnumber: '' },
    emailValid: false,
    phoneValid: false,
    firstnameValid: false,
    secondnameValid: false,
    passportnumberValid: false,
    formValid: false
  }
};

const formreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, openModal: state.openModal === false? true: false };
    case types.SHOW_SUCCESS:
      return { ...state, successModal: state.successModal === false? true: false };
    case types.SET_DATA_FORM:
      return { ...state, dataForm: action.dataForm };
    default:
      return state;
  }
}

export default formreducer;