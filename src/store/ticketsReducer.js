import * as types from './actionTypes';
import tickets from '../tickets.json';
import { getFilterTicketsByStops, getStops } from './filters'

const initTickets = tickets.tickets;
const initStops = ['all', '0', '1', '2', '3'];

const initialState = {
  tickets: initTickets,
  stops: initStops,
  currency: 'rub'
};

const ticketsreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ALL_CHANGED:
      let showAll = action.checked ? initStops: [];
      let allTickets = showAll.length ? initTickets: [];
      return { ...state, stops: showAll, tickets: allTickets};

    case types.STOPS_CHANGED:
      const { stops } = state;
      const actionStops = action.stopsFilter;
      let newStop = getStops(stops, actionStops);
      const newTickets = newStop.includes('all') ? initTickets : getFilterTicketsByStops(initTickets, newStop);
      return { ...state, stops: newStop, tickets: newTickets };

    case types.SHOW_ONLY_ONE_STOP:
      const stop = action.value;
      return { ...state, stops: stop, tickets: getFilterTicketsByStops(initTickets, stop)};

    default:
      return state;
  }
}

export default ticketsreducer;