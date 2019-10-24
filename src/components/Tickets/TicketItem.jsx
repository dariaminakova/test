import React from 'react';
import aviacompany from '../../images/avia.png'
import './Tickets.css'
import Price from './Price';

const TicketItem = (props) => {
    return (
        <div className="item">
            <div className='buyTicket'>
                <img src={aviacompany} alt='aviacompany'></img>
                <p>{props.ticket.carrier}</p>
                <button
                    className='buyButton'
                    onClick={() => { props.onOpenModal() }}> Купить за
                <Price price={props.ticket.price} 
                currency={props.ticket.currency}/></button>
            </div>
            <div className='infoTicket'>
                <div>
                    <p className='time'>{props.ticket.departure_time}</p>
                    <p className='point'>{props.ticket.origin} {props.ticket.origin_name}</p>
                    <p>{props.ticket.departure_date}</p>
                </div>
                <div>
                    <p className='stops'>количество пересадок: </p>
                    {props.ticket.stops}
                </div>
                <div>
                    <p className='time'>{props.ticket.arrival_time}</p>
                    <p className='point'>{props.ticket.destination} {props.ticket.destination_name}</p>
                    <p>{props.ticket.arrival_date}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketItem;