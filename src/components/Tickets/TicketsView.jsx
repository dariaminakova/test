import React from 'react';
import TicketItem from './TicketItem';
import Form from '../Form/Form';
import Success from '../Form/Success';

import './Tickets.css';

const TicketsView = (props) => {
  const ticketsList = props.tickets.map((elem) => <TicketItem key={elem.id} ticket={elem} onOpenModal={props.onOpenModal} />);

  const modalComponents = {
    form: <><div className='showModal'><Form onOpenModal={props.onOpenModal} onShowSuccess={props.onShowSuccess} onSubmit={props.onSubmit}/></div><div className='overlay'></div></>,
    success: <div className='showModal'><Success onShowSuccess={props.onShowSuccess} /></div>,
    empty: <div className='hideModal'></div>
  }

  let form = props.openModal ? modalComponents.form : props.successModal ? modalComponents.success : modalComponents.empty

  return (
    <div>
      {form}
      <div className="ticketList">
      {ticketsList}
      </div>
    </div>
  );
}

export default TicketsView;