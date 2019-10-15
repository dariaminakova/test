import React, { Component } from 'react';
import './App.css';
import TicketsContainer from './containers/TicketsContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <TicketsContainer />
      </div>
    );
  }
};

export default App;
