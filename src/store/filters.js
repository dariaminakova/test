// currency filters

export const getFilterTicketsByCurrency = (tickets, currency) => {
  switch(currency){
    case 'eur':
      return tickets.map((ticket) => ({ ...ticket, price: getPrice(ticket.price, 14), currency }))
    case 'usd':
      return tickets.map((ticket) => ({ ...ticket, price: getPrice(ticket.price, 15), currency }))
    default:
      return tickets.map((ticket) => ({ ...ticket, price: ticket.price, currency }));
  }
}

const getPrice = (price, course) => {
  const newPrice = Math.round(price / course);
  return newPrice;
}

// stops filters

export const getStops = (stops, actionStops) => {
  let newStop = (stops.indexOf(actionStops) === -1) ? [...stops, actionStops] : getSliceArr(stops, actionStops);
  if (newStop.length === 4 ) {
    newStop = (newStop.indexOf('all') !== -1)? getSliceArr(newStop, 'all'): [...newStop, 'all'];
  }
return newStop;
}

const getSliceArr = (arr, index) => {
  const indexStop = arr.indexOf(index);
  let newStop = [...arr.slice(0, indexStop), ...arr.slice(indexStop + 1)];
  return newStop;
}

export const getFilterTicketsByStops = (arrTickets, stops) => {
  const newArr = arrTickets.filter(ticket => stops.includes(String(ticket.stops)));
  return newArr;
}