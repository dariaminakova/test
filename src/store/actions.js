import * as types from './actionTypes';

export const updateStops = (stopsCount) => ({type: types.STOPS_CHANGED, stopsFilter: stopsCount});
export const showOnlyOneStop = (value) => ({type: types.SHOW_ONLY_ONE_STOP, value});
export const onAllStops = (checked) => ({type: types.ALL_CHANGED, checked});

export const onSubmitForm = (data) => ({type: types.SUBMIT_FORM, data});
export const showModal = () => {
  return { type: types.SHOW_MODAL };
}
export const showSuccess = () => {
  return { type: types.SHOW_SUCCESS };
}