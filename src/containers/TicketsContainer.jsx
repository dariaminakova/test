import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStopsAC, showModalAC, showSuccessAC, currentCurrency, currencyUSD, currencyEUR } from '../store/actions';
import TicketsView from '../components/Tickets/TicketsView';
import SideBar from '../components/SideBar/SideBar';
import preload from '../images/tenor.gif';

import './Container.css'

class TicketsContainer extends Component {

  onStopsChanged = (stops) => {
    this.props.updateStops(stops);
  }

  setCurrency = (currency) => {
    this.props.setCurrentCurrency(currency)
  }

  onOpenModal = (openModal) => {
    this.props.showModal(openModal)
  }

  onCloseModal = (openModal) => {
    this.props.showModal(openModal);
  }

  onShowSuccess = () => {
    this.props.showSuccess();
  }

  render() {
    return (!this.props.tickets ? this.renderLoading() :
      <div className="ticketsScreen">
        <SideBar
          onStopsChanged={this.onStopsChanged}
          setCurrency={this.setCurrency}/>
        <TicketsView
          tickets={this.props.tickets}
          successModal={this.props.successModal}
          openModal={this.props.openModal}
          onShowSuccess={this.onShowSuccess}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}/>
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
    ticketsByStops: state.ticketsreducer.ticketsByStops,
    openModal: state.formreducer.openModal,
    successModal: state.formreducer.successModal,
    dataForm: state.formreducer.dataForm
  };
}

let mapDipatchToProps = (dispatch) => {
  return {
    updateStops: (stops) => {
      dispatch(updateStopsAC(stops))
    },
    setCurrentCurrency: (currency) => {
      dispatch(currentCurrency(currency))
    },
    showModal: (openModal) => {
      dispatch(showModalAC(openModal))
    },
    showSuccess: () => {
      dispatch(showSuccessAC())
    }
  };
}
export default connect(mapStateToProps, mapDipatchToProps)(TicketsContainer);