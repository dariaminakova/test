import * as types from './actionTypes';
import tickets from '../tickets.json'

export const updateStopsAC = (stopsCount) => ({type: types.STOPS_CHANGED, tickets: tickets, stopsFilter: stopsCount});
export const currentCurrency = (currency) => ({type: types.CURRENCY_RUB, currency: currency, tickets: tickets});

export const showModalAC = (openModal) => {
  return { type: types.SHOW_MODAL, openModal };
}

export const showSuccessAC = () => {
  return { type: types.SHOW_SUCCESS };
}