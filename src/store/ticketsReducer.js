import * as types from './actionTypes';
import tickets from '../tickets.json';

const initTickets = tickets.tickets;

const initialState = {
  tickets: initTickets,
  stops: []
};

const ticketsreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.STOPS_CHANGED:
      const { stops } = state;
      let newStop;
      const indexStop = stops.indexOf(action.stopsFilter);
      if (indexStop === -1) {
        newStop = [...stops, action.stopsFilter];
      } else {
        newStop = [...stops.slice(0, indexStop), ...stops.slice(indexStop+1)];
      }
      const newTickets = newStop.includes('all') ? action.tickets.tickets : (action.tickets.tickets.filter(ticket => newStop.includes(String(ticket.stops)))); 
      return { ...state, stops: newStop, tickets: newTickets };

    case types.CURRENCY_RUB:
      return { ...state, tickets: filterTicketsByCurrency(action.tickets.tickets, action.currency) };

    case types.CURRENCY_USD:
      return { ...state, tickets: filterTicketsByCurrency(action.tickets.tickets, action.currency) };

    case types.CURRENCY_EUR:
      return { ...state, tickets: filterTicketsByCurrency(action.tickets.tickets, action.currency) };

    default:
      return state;
  }
}

export default ticketsreducer;

const filterTicketsByCurrency = (tickets, currency) => {
  if (currency === 'eur'){
  return tickets.map((ticket) => ({...ticket, price: Math.round(ticket.price / 14) + ' ' + currency}))}
  else if (currency === 'usd'){
  return tickets.map((ticket) => ({...ticket, price: Math.round(ticket.price / 15) + ' ' + currency}))}
  return tickets.map((ticket) => ({...ticket, price: ticket.price + ' ' + currency}))
}