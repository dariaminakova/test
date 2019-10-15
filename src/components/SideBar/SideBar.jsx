import React from 'react';
import CurrencyBtns from './CurrencyBtns';
import SelectStops from './SelectStops'
import './SideBar.css'

const SideBar = (props) => {

return(
    <div className='sideBar-container'>

        <h5>ВАЛЮТА</h5>
            <CurrencyBtns 
            setCurrency={props.setCurrency}/>
        <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            <SelectStops 
            onStopsChanged = {props.onStopsChanged}
            />

    </div> 
    )
}

export default SideBar;