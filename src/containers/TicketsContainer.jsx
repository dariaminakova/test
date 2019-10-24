import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStops, showOnlyOneStop, onAllStops, showModal, showSuccess, onSubmitForm} from '../store/actions';
import {getFilterTicketsByCurrency} from '../store/filters';
import TicketsView from '../components/Tickets/TicketsView';
import SideBar from '../components/SideBar/SideBar';
import preload from '../images/tenor.gif';

import './Container.css'

class TicketsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    };
  }

  getTickets = () =>{
    this.setState({
      tickets: this.props.tickets
    })
  }

  componentDidMount(){
    this.getTickets()
  }

  componentDidUpdate(prevProps) {
    if (this.props.tickets !== prevProps.tickets) {
      this.getTickets();
    }
  }

  onStopsChanged = (stops) => {
    this.props.updateStops(stops);
  }

  onShowOnlyOneStop = (value) => {
    this.props.showOnlyOneStop(value);
  }

  onShowAllStops = (checked) => {
    this.props.onAllStops(checked);
  }

  setCurrency = (currency) => {
    let newTickets = getFilterTicketsByCurrency (this.props.tickets, currency);
    this.setState({
      tickets: newTickets
    })
  }

  onOpenModal = () => {
    this.props.showModal()
  }

  onShowSuccess = () => {
    this.props.showSuccess();
  }

  onSubmit = (data) => {
    this.props.onSubmitForm(data);
  }

  render() {
    return (!this.props.tickets ? this.renderLoading() :
      <div className="ticketsScreen">
        <SideBar onStopsChanged={this.onStopsChanged} 
                 onShowAllStops={this.onShowAllStops}
                 onShowOnlyOneStop={this.onShowOnlyOneStop}
                 setCurrency={this.setCurrency}
                 currency ={this.props.currency}
                 stops={this.props.stops} />
        <TicketsView tickets={this.state.tickets}
                    openModal={this.props.openModal}
                    successModal={this.props.successModal}
                    onShowSuccess={this.onShowSuccess}
                    onOpenModal={this.onOpenModal}
                    onSubmit={this.onSubmit} />
      </div>
    );
  }

  renderLoading() {
    return (
      <div className="ticketsScreen">
        <img className="preload" src={preload} alt='preload' />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    tickets: state.ticketsreducer.tickets,
    stops: state.ticketsreducer.stops,
    currency: state.ticketsreducer.currency,
    openModal: state.formreducer.openModal,
    successModal: state.formreducer.successModal,
  };
}

export default connect(mapStateToProps, {updateStops, onAllStops, showOnlyOneStop, showModal, showSuccess, onSubmitForm})(TicketsContainer);