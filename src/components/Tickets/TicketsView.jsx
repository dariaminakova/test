import React from 'react';
import TicketItem from './TicketItem';
import './Tickets.css'
import Form from '../Form/Form';
import Success from '../Form/Success';

const TicketsView = (props) => {

let ticketsList = props.tickets.map((elem) => 
                  <TicketItem 
                  key={elem.id} 
                  ticket={elem} 
                  openModal={props.openModal}
                  onOpenModal={props.onOpenModal}/>);

let form;

  if (props.openModal && props.successModal !== true) {
    form = <div className='showModal'>
      <Form
        openModal={props.openModal}
        onCloseModal={props.onCloseModal} 
        onShowSuccess={props.onShowSuccess}
        dataForm={props.dataForm}
        />
    </div>
  } else if (props.successModal) {
    form = <div className='showModal'>
      <Success
        openModal={props.openModal}
        onShowSuccess={props.onShowSuccess} />
    </div>
  } else {
    form = <div className='hideModal'></div>
  }

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